import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})


export class AddAnnouncementComponent implements OnInit {

  titleFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  authorFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  messageFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  imageURLFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  //, Validators.pattern("([^\\s]+(\\.(?i)(jpe?g|png|gif|bmp))$)" )]);
  categoryFormControl = new FormControl('', [Validators.required])

  newTitle: string = "";
  newAuthor: string = "";
  newMessage: string = "";
  newCategory: Category = Category.General;
  newImageURL: string = "";
  categories: Category[] = Object.values(Category);

  constructor(private service: AnnouncementService) {
  }

  ngOnInit(): void { }

  addAnnouncement(): void {

    if (this.titleFormControl.invalid || this.authorFormControl.invalid || this.messageFormControl.invalid ||
      this.imageURLFormControl.invalid || this.categoryFormControl.invalid)
      return;

    const announcement: Announcement = {
      title: this.newTitle,
      author: this.newAuthor,
      message: this.newMessage,
      imageUrl: this.newImageURL,
      category: this.newCategory,
      id: '',
    }
    this.service.addAnnouncement(announcement).subscribe();
  }
}
