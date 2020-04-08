import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  
  newsLists = [
    // {'id':'id','news_title':'title','news_text':'news text','updateAt':'date'},    
  ]
  errorSearch:boolean = false
  page:number = 1

  searchForm = this.fb.group({
    search:['',Validators.required]
  })

  constructor(private fb:FormBuilder,
    private newsService:NewsService) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.getNews()
  }

  getNews(){
    this.newsService.getNews().subscribe(rs => {
      this.newsLists = rs['data']
      this.onAlertClear()
      this.searchForm.reset()
      this.page = 1
    })
  }

 

  get search() {
    return this.searchForm.get('search')
  }

  onSubmit(){
      this.newsService.getNewsSearch(this.searchForm.get('search').value).subscribe(rs => {
      if(rs['code'] == 0){
        this.errorSearch = true
      }else{
        this.newsLists = rs['data']
        this.onAlertClear()
        this.page = 1
      }
    })
    this.searchForm.reset()
  }

  onAlertClear(){
    this.errorSearch = false
  }
}
