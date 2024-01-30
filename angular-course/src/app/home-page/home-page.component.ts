import { Component } from '@angular/core';
import { ClockService } from './clock.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(public cs: ClockService) { }
}
