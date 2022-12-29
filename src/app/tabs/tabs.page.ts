import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  
  darkMode: boolean = false;
  constructor() {}
  
  toggleTheme(ev: any): void {
    document.body.classList.toggle('dark', ev.detail.checked);
  }
}
