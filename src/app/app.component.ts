import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbaDataComponent } from './components/nba-data/nba-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NbaDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nba-time';
}
