import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { DarkmodeService } from '../services/darkmode/darkmode.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage implements OnInit {
  
  darkMode: boolean = false;

  refreshPage() {
    location.reload();
  }

  async toggleTheme(ev: any): Promise<void> {
    const darkMode = ev.detail.checked;
    await Preferences.set({ key: 'darkMode', value: darkMode });
    document.body.classList.toggle('dark', darkMode);
  }
  
  constructor(
    private translateService : TranslateService,
    private toastController : ToastController,
    private darkmodeService: DarkmodeService)  {}

    async changeLanguage(language : string) {
      await Preferences.set({ key: 'user-lang', value: language });
      await this.showToast();
      }

    async showToast() {
      const toast = await this.toastController.create({
      message: this.translateService.instant("Language Changed!"),
      duration: 4000,
      icon: 'language-sharp'
      });
      await toast.present();
      }

    async ngOnInit() {
      const { value } = await Preferences.get({ key: 'darkMode' });
      if (value) {
          document.body.classList.toggle('dark', JSON.parse(value));
          this.darkmodeService.setState(value as any);
      }
      this.darkMode = this.darkmodeService.getState();
    }
  }