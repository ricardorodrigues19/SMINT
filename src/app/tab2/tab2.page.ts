import { Component } from '@angular/core';

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
}