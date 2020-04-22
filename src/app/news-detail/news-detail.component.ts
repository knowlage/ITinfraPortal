import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  news = ''

  constructor(private newsService:NewsService, private router:Router) { }

  ngOnInit() {
    this.getNewsDetail()
  }

  getNewsDetail(){
    this.news = JSON.parse(this.newsService.getNewsDetail())      
    // console.log(this.news) 
    if(this.news == null){
      this.router.navigate(['/news'])
    }
    
  }

}
