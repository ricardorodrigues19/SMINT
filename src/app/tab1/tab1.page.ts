import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  darkMode: boolean = false;

  refreshPage() {
    location.reload();
  }

  toggleTheme(ev: any): void {
    document.body.classList.toggle('dark', ev.detail.checked);
  }
  
  constructor(
    private translateService : TranslateService,
    private toastController : ToastController)  {}

    async changeLanguage(language : string) {
      await Preferences.set({ key: 'user-lang', value: language });
      await this.showToast();
      }

    async showToast() {
      const toast = await this.toastController.create({
      message: this.translateService.instant("language sucessfully changed"),
      duration: 4000,
      });
      await toast.present();
      }
    }