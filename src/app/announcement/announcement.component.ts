import { Component, Input, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../services/announcement.service';
import { CategoryService } from '../services/category.service';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})

export class AnnouncementComponent implements OnInit {

  @Input() selectedCategoryId: string = '0';
  
  
  currentAnnouncements: Announcement[] = [];

  constructor(private service: AnnouncementService, 
    private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAllAnnouncements();
  }

  ngOnChanges(): void {
    if (this.selectedCategoryId != '0' && this.selectedCategoryId != "") {
      this.service.getFiltredAnnouncements(this.selectedCategoryId).
        subscribe((values: Announcement[]) => { this.currentAnnouncements = values })
    }
    else {
      this.getAllAnnouncements();
    }
  }

  deleteAnnouncement(id: string) {
    this.service.deleteAnnouncement(id).pipe(switchMap(() => this.service.getAnnouncements()
    )).subscribe();
  }

  getAllAnnouncements() {
    this.service.getAnnouncements().subscribe((values: Announcement[]) => { this.currentAnnouncements = values });
  }

  getCategoryName(id: string) {
    return this.categoryService.getCategoryById(id)?.name;
  }
}
