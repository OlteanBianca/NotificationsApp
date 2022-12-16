import { Injectable } from '@angular/core';
import { Category } from '../category';
import { AnnouncementService } from './announcement.service';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

    categories!: Category[];

    constructor(private service: AnnouncementService) { 
      this.service.getCategories().subscribe((val: Category[]) => this.categories = val);
    }

    getCategoryById(id: string){
      return this.categories.find(val => val.id === id);
    }

    getCategories(){
      return this.categories;
   }
}
