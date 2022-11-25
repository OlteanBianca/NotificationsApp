import { Injectable } from '@angular/core';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 
  categories:Category[] = [
    {Name: 'All', Id: '0'},
    {Name:'General', Id:'1'},
    {Name:'Course', Id:'2'},
    {Name:'Laboratory', Id:'3'}
    ];

  constructor() { }

  getCategories(){
    return this.categories;
  }
}
