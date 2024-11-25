import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NbaServiceService {
  private apiUrl = 'https://cdn.nba.com/static/json/staticData/scheduleLeagueV2.json';
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    return this.http.jsonp<any>(this.apiUrl,'callback');
  }
}
