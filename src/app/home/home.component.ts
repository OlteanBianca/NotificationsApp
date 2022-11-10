import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedCategory: string = "";

  constructor(private announcementService: AnnouncementService) {

  }

  ngOnInit(): void {
  }

  receiveCategory(category: string) {
    this.selectedCategory = category;
  }
}
