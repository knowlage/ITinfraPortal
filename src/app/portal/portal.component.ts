import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DownloadService } from '../services/download.service';
import { NewsService } from '../services/news.service';

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

  searchForm = this.fb.group({
    search:['']
  })

  constructor(private fb:FormBuilder, 
    private downloadService:DownloadService,
    private newsService:NewsService) { }

  ngOnInit() {
    this.getUploadFeature()
    this.getNewsFeature()
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

  get search(){
    return this.searchForm.get('search')
  }

}
