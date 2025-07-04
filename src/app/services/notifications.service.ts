import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NotificationsService {

  private connection!: signalR.HubConnection;
  public notificationSubject: BehaviorSubject<boolean>;

  constructor() {
    this.notificationSubject = new BehaviorSubject(false);
  }

  initWebSocket() {
    this.connection = new HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl('https://localhost:44391/hub/notifications')
      .build();

    this.connection.on('message_received', (body: any) => {
      //This code will be executed upon receiving a message with the name 'message_received' from the server.
      console.log(body);
      this.notificationSubject.next(true);
    });

    this.connection.start().then( result => { 
      console.log("SignalR is now connected")
    }).catch(function (e) {
    });
  }

  sendMessage(methodName: string, parameters?: any[]) {
    this.connection.send(methodName, parameters);
  }
}
