import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FaqsService {

  constructor(private http:HttpClient) { }

  getFaqs(){
    let url = "http://localhost:8000/faqs/getfaqs"
    return this.http.get(url)
  }

  getFaqsSearch(_search){    
    
    return this.http.get('http://localhost:8000/faqs/getFaqsSearch/'+_search)
 
  }
}
