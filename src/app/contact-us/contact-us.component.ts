import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, Form} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm = this.fb.group({
    tel:['',Validators.required],
    questionText:['',Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get questionText() {
    return this.contactForm.get('questionText')
  }

  get tel() {
    return this.contactForm.get('tel')
  }

  onSubmit(){
    console.log("submit")
  }

}
