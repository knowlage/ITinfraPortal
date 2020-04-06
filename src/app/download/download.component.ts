import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DownloadService } from '../services/download.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  downloadList = [
    // {'id':1,'upload_title':'รายชื่อพนักงาน Eary Retire 2016','upload_filename':'retire2016.xlsx','upload_filetype':'pdf','updateAT':'2020-03-23'},
  ]

  searchForm = this.fb.group({
    search:['']
  })

  constructor(private fb:FormBuilder, private downloadService:DownloadService) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.getUpload()
  }

  getUpload(){
    this.downloadService.getUpload().subscribe(rs => {
      this.downloadList = rs['data']
      console.log(rs['data'])
    })
  }

  getDownload(filename){
    this.downloadService.getDownload(filename)
  }

  get search(){
    return this.searchForm.get('search')
  }

  onSubmit(){
    console.log('submit')
  }

}
