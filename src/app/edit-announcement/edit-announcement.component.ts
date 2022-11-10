import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';

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
  //, Validators.pattern("([^\\s]+(\\.(?i)(jpe?g|png|gif|bmp))$)")]);
  categoryFormControl = new FormControl('', [Validators.required])


  categories: Category[] = Object.values(Category);
  announcementToEdit!: Announcement;

  constructor(private service: AnnouncementService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id == null) return;

    this.service.getAnnouncementById(id).subscribe((value: Announcement) => { this.announcementToEdit = value });
  }

  saveAnnouncement() {
    this.service.editAnnouncement(this.announcementToEdit).subscribe();
  }
}
