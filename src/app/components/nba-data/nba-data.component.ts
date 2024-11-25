import { Component, OnInit } from '@angular/core';
import { NbaServiceService } from '../../services/nba-service.service';
import { NgFor, NgIf } from '@angular/common';
import * as moment from 'moment-timezone';


@Component({
  selector: 'app-nba-data',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './nba-data.component.html',
  styleUrl: './nba-data.component.css'
})
export class NbaDataComponent implements OnInit {
  data: any[] = [];

  constructor(private apiService: NbaServiceService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe(
      (response) => {
        
        const now = new Date();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(now.getDate()).padStart(2, '0');
        const year = now.getFullYear();
        const hours = '00';
        const minutes = '00';
        const seconds = '00';
        var todaysDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
        var gamesToday = response['leagueSchedule']['gameDates'].filter((x: { [x: string]: string; }) => x['gameDate'] == todaysDate)
        console.log(gamesToday[0]['games']);
        var games = gamesToday[0]['games'];
        games.forEach((element: { [x: string]: any; }) => {
          let utcTime = element['gameDateTimeUTC'];
          var local_date= moment.utc(utcTime).local().format('YYYY-MM-DD HH:mm:ss');
          element['gameDateTimeUTC'] = local_date;
        });
        this.data = games;
        console.log(games);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
