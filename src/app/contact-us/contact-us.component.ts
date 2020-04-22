import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, Form} from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    questionText:['',Validators.required]
  })

  acceptContact:boolean = false

  constructor(private fb: FormBuilder, private contactServices:ContactService) { }

  ngOnInit() {
  }

  get questionText() {
    return this.contactForm.get('questionText')
  }

  get email() {
    return this.contactForm.get('email')
  }

  onSubmit(){    
    this.contactServices.insertContact(this.contactForm.value).subscribe(rs => {      
      if(rs['code'] == 1){
        this.acceptContact = true
      }
    })
    this.contactForm.reset()
  }

  onAlertClear(){
    this.acceptContact = false
  }

}
