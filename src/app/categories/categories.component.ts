import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Output() emitSelectedCategory = new EventEmitter<string>();

  categories: string[] = Object.values(Category);

  constructor() { }

  ngOnInit(): void {
  }

  selectCategory(category: string) {
    this.emitSelectedCategory.emit(category);
  }
}
