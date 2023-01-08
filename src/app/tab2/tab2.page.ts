import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  idiomas: any []= [];
  software: any []= [];
  lingprog: any []= [];
  educacao: any []= [];
  projects: any []= [];

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

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log('Api working');
    this.http.get('http://localhost:4242/api/idiomas').subscribe(res => {
      this.idiomas = (res as any).Idiomas;
    }, error => {
      console.error(error);
    });
  
    this.http.get('http://localhost:4242/api/software').subscribe(res => {
      this.software = (res as any).Software;
    }, error => {
      console.error(error);
    });

    this.http.get('http://localhost:4242/api/lingprog').subscribe(res => {
      this.lingprog = (res as any).LingProg;
    }, error => {
      console.error(error);
    });

    this.http.get('http://localhost:4242/api/educacao').subscribe(res => {
      this.educacao = (res as any).Educacao;
    }, error => {
      console.error(error);
    });

    this.http.get('http://localhost:4242/api/project').subscribe(res => {
      this.projects = (res as any).Projects;
    }, error => {
      console.error(error);
    });
  }
}