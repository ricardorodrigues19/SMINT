import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { AlertController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  darkMode: boolean = false;

  refreshPage() {
    location.reload();
  }

  toggleTheme(ev: any): void {
    document.body.classList.toggle('dark', ev.detail.checked);
  }
  
  constructor(
    private translateService : TranslateService,
    private toastController : ToastController,
    private alertController: AlertController,
    private translate: TranslateService)  {}

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

      async presentAlert() {
        const header = this.translate.instant('alert');
        const message = this.translate.instant('ms');
        const ok = this.translate.instant('ok');
        
        const alert = await this.alertController.create({
          header: header,
          message: message,
          buttons: [ok],
        });
    
        await alert.present();
      }
    }