import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedCategoryId: string = "";
  notificationMessage: string ="";

  constructor(private notificationService: NotificationsService) { }

  ngOnInit(): void {
    this.notificationService.initWebSocket();
    this.notificationService.notificationSubject.subscribe(hasNotifications => 
      this.notificationMessage = hasNotifications ? "New notifications, please refresh the page" : "");
  }

  receiveCategory(id: string) {
    this.selectedCategoryId = id;
  }
}
