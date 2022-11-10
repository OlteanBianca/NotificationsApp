import { Component, Input, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})

export class AnnouncementComponent implements OnInit {

  @Input() selectedCategory: string = 'All';


  currentAnnouncements: Announcement[] = [];

  constructor(private service: AnnouncementService) {
  }

  ngOnInit(): void {
    this.getAllAnnouncements();
  }

  ngOnChanges(): void {
    if (this.selectedCategory != 'All' && this.selectedCategory != "") {
      this.service.getFiltredAnnouncements(this.selectedCategory).
        subscribe((values: Announcement[]) => { this.currentAnnouncements = values })
    }
    else {
      this.getAllAnnouncements();
    }
  }

  deleteAnnouncement(id: string) {
    this.service.deleteAnnouncement(id).pipe(switchMap(anns=> this.service.getAnnouncements()
    )).subscribe();
  }

  getAllAnnouncements() {
    this.service.getAnnouncements().subscribe((values: Announcement[]) => { this.currentAnnouncements = values });
  }
}
