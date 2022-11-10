import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedCategory: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  receiveCategory(category: string) {
    this.selectedCategory = category;
  }
}
