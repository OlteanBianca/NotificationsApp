import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.scss']
})

export class EditAnnouncementComponent implements OnInit {

  titleFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  authorFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  messageFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  imageURLFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  categoryFormControl = new FormControl('', [Validators.required]);


  categories!: Category[];
  announcementToEdit!: Announcement;

  constructor(private aService: AnnouncementService, private route: ActivatedRoute, private cService: CategoryService) { }


  ngOnInit(): void {
    this.categories = this.cService.getCategories();

    let id = this.route.snapshot.paramMap.get('id');
    if (id == null) return;

    this.aService.getAnnouncementById(id).subscribe((value: Announcement) => { this.announcementToEdit = value });
  }

  saveAnnouncement() {
    this.aService.editAnnouncement(this.announcementToEdit).subscribe();
  }
}
