import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Output() emitSelectedCategory = new EventEmitter<string>();

  categories!: Category[] ;

  constructor(private service : CategoryService) { }

  ngOnInit(): void {
    this.categories = this.service.getCategories();
  }

  selectCategory(category: string) {
    this.emitSelectedCategory.emit(category);
  }
}
