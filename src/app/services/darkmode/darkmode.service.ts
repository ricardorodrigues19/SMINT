import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  darkMode: boolean = false;

  constructor() { }

  getState(): boolean {
    return this.darkMode;;
  }

  setState(state: boolean) {
    this.darkMode = state;
  }
}