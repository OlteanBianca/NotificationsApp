import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { CategoryService } from '../services/category.service';

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
  categoryFormControl = new FormControl('', [Validators.required])

  newTitle: string = "";
  newAuthor: string = "";
  newMessage: string = "";
  newCategory!: Category;
  newImageURL: string = "";
  categories!: Category[];

  constructor(private service: AnnouncementService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
   }

  addAnnouncement(): void {

    if (this.titleFormControl.invalid || this.authorFormControl.invalid || this.messageFormControl.invalid ||
      this.imageURLFormControl.invalid || this.categoryFormControl.invalid)
      return;

    const announcement: Announcement = {
      title: this.newTitle,
      author: this.newAuthor,
      message: this.newMessage,
      imageUrl: this.newImageURL,
      category: this.newCategory.Id,
      id: '',
    }
    this.service.addAnnouncement(announcement).subscribe();
  }
}
