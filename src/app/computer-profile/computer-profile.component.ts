import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-computer-profile',
  templateUrl: './computer-profile.component.html',
  styleUrls: ['./computer-profile.component.scss']
})
export class ComputerProfileComponent implements OnInit {

  private stepper:Stepper;

  constructor() { }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('.bs-stepper'),{
      linear:false,
      animation:true
    })
  }

  next(){
    this.stepper.next();
  }

}
