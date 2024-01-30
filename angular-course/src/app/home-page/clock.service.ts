import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClockService {
  tick = 0;

  constructor() {
    setInterval(() => this.tick++, 1000);
  }
}
