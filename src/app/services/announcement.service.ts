import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Announcement } from '../announcement';

@Injectable({
  providedIn: 'root'
})

export class AnnouncementService {

  readonly baseUrl = "https://newsapi20221108120432.azurewebsites.net/api/Announcements";

  constructor(private httpClient: HttpClient) { }

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };


  getAnnouncements(): Observable<Announcement[]> {
    return this.httpClient.get<Announcement[]>(this.baseUrl, this.httpOptions);
  }

  getAnnouncementById(id: string): Observable<Announcement> {
    return this.httpClient.get<Announcement>(this.baseUrl + '/{' + id + '}', this.httpOptions);
  }

  getFiltredAnnouncements(category: string): Observable<Announcement[]> {
    return this.httpClient.get<Announcement[]>(this.baseUrl, this.httpOptions).
      pipe(map((announcements) => announcements.filter((value) => value.category === category)));
  }

  addAnnouncement(newAnnouncement: Announcement) {
    return this.httpClient.post(this.baseUrl, newAnnouncement, this.httpOptions);
  }

  editAnnouncement(announcement: Announcement) {
    return this.httpClient.put<Announcement>(this.baseUrl + '/{' + announcement.id + '}', announcement, this.httpOptions);
  }

  deleteAnnouncement(id: string) {
    return this.httpClient.delete(this.baseUrl + '/{' + id + '}', this.httpOptions);
  }
}
