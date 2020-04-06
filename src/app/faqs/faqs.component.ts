import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { FaqsService } from '../services/faqs.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  searchForm = this.fb.group({
    search:['',Validators.required]
  })

  
  datas = [
    // {'faqs_question':'What your name','faqs_answer':'my name mojojojoh ','updateAt':'2020-03-23'},
   
  ]

  errorSearch:boolean = false

  constructor(private fb:FormBuilder, private faqsService:FaqsService) { }

  ngOnInit() {
    this.getFaqs()
  }

  getFaqs(){
    this.faqsService.getFaqs().subscribe(rs => {
      this.datas = rs['data']
      this.onAlertClear()
      this.searchForm.reset()
    })
  }

  get search() {
    return this.searchForm.get('search')
  }

  onSubmit() {    
    
    this.faqsService.getFaqsSearch(this.searchForm.get('search').value).subscribe(rs => {
      console.log(rs['code'])
      if(rs['code'] == 0){
        this.errorSearch = true
      }else{
        this.datas = rs['data']
        this.onAlertClear()
      }      
    })

    this.searchForm.reset()
    
    
  }

  onAlertClear(){
    this.errorSearch = false
  }

}
