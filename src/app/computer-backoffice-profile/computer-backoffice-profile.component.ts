import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-computer-backoffice-profile',
  templateUrl: './computer-backoffice-profile.component.html',
  styleUrls: ['./computer-backoffice-profile.component.scss']
})
export class ComputerBackofficeProfileComponent implements OnInit {

  private stepper:Stepper

  constructor() { }

  ngOnInit() {

    this.stepper = new Stepper(document.querySelector('.bs-stepper'),{
      linear:false,
      animation:true
    })

  }

  next() {
    this.stepper.next()
  }

}
