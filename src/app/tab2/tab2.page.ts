import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  isModalIdiomasOpen = false;
  isModalSoftwareOpen = false;
  isModalLingProgOpen = false;
  isModalEducationOpen = false;
  isModalProjectOpen = false;

  @HostListener('document:keydown.escape', ['$event'])
  handleModal1Keydown(event: KeyboardEvent) {
    this.isModalIdiomasOpen = false;
    this.isModalSoftwareOpen = false;
    this.isModalLingProgOpen = false;
    this.isModalEducationOpen = false;
    this.isModalProjectOpen = false;
  }

  darkMode: boolean = false;

  setOpenIdiomas(isOpen: boolean) {
    this.isModalIdiomasOpen = isOpen;
  }

  setOpenSoftware(isOpen: boolean) {
    this.isModalSoftwareOpen = isOpen;
  }

  setOpenLingProg(isOpen: boolean) {
    this.isModalLingProgOpen = isOpen;
  }

  setOpenEducation(isOpen: boolean) {
    this.isModalEducationOpen = isOpen;
  }
  setOpenProject(isOpen: boolean) {
    this.isModalProjectOpen = isOpen;
  }

  toggleTheme(ev: any): void {
    document.body.classList.toggle('dark', ev.detail.checked);
  }
  
  constructor(private http: HttpClient) {}

  async getIdiomas() {
    try {
      const Idiomas = await this.http.get('http://localhost:4242/api/Idiomas').toPromise();
      console.log(Idiomas);
    } catch(error) {
      console.error(error);
    }
  }
}
  
  
  
  