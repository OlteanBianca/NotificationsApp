import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from '../announcement';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})

export class AnnouncementService {

  readonly baseUrl = "https://localhost:44391/Announcement";

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
    return this.httpClient.get<Announcement>(this.baseUrl + '/' + id, this.httpOptions);
  }

  getFiltredAnnouncements(categoryId: string): Observable<Announcement[]> {
    return this.httpClient.get<Announcement[]>(this.baseUrl + '/GetByCategoryId/' + categoryId, this.httpOptions);
  }

  addAnnouncement(newAnnouncement: Announcement) {
    return this.httpClient.post(this.baseUrl, newAnnouncement, this.httpOptions);
  }

  editAnnouncement(announcement: Announcement) {
    return this.httpClient.put<Announcement>(this.baseUrl + '/' + announcement.id, announcement, this.httpOptions);
  }

  deleteAnnouncement(id: string) {
    return this.httpClient.delete(this.baseUrl + '/' + id, this.httpOptions);
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl + '/Category/GetAll', this.httpOptions);
  }
}
