import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  insertContact(contactForm){
    // console.log(contactForm)
    return this.http.post('http://localhost:8000/contacts/insertQuestion',
      {"question_text":contactForm.questionText,"question_from":contactForm.email})
  }
}
