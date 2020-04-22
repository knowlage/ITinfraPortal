import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DownloadService } from '../services/download.service';
import { NewsService } from '../services/news.service';
import { CarouselService } from '../services/carousel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  uploadFeature=[
    // {"upload_title":"title","upload_filename":"filename","updateAT":"date"}
  ]

  newsFeature=[
    // {'id':'id','news_title':'title','news_text':'news text','updateAt':'date'}
  ]

  carousels=[
    // {'carousel_name':'name','news_id':'id of news','carousel_image_file':'filename','id':'id news','news_title','title','news_text','text','updateAt':'date'}
  ]

  searchForm = this.fb.group({
    search:['']
  })

  constructor(private fb:FormBuilder, 
    private downloadService:DownloadService,
    private newsService:NewsService,
    private router:Router,
    private carouselService:CarouselService) { }

  ngOnInit() {
    this.getUploadFeature()
    this.getNewsFeature()
    this.getCarousel()
  }

  getUploadFeature(){
    this.downloadService.getUploadFeature().subscribe(rs => {
      this.uploadFeature = rs['data']
    })
  }

  getNewsFeature(){
    this.newsService.getNewsFeature().subscribe(rs => {
      this.newsFeature = rs['data']
    })
  }

  getCarousel(){
    this.carouselService.getCarousels().subscribe(rs => {      
      if(rs['code'] == 1){
        this.carousels = rs['data']
      }
      
    })
  }

  newsDetail(news){
    this.newsService.newsDetail(news)
    this.router.navigate(['/newsDetail'])
  }

  get search(){
    return this.searchForm.get('search')
  }



}
