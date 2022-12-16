import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Output() emitSelectedCategory = new EventEmitter<string>();

  categories!: Category[];

  constructor(private service: AnnouncementService) { }

  ngOnInit(): void {
    this.service.getCategories().subscribe((values: Category[]) => this.categories = values);
  }

  selectCategory(category: string) {
    this.emitSelectedCategory.emit(category);
  }
}
