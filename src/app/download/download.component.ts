import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DownloadService } from '../services/download.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  @Input('data') downloadList = [
    // {'id':1,'upload_title':'รายชื่อพนักงาน Eary Retire 2016','upload_filename':'retire2016.xlsx','upload_filetype':'pdf','updateAT':'2020-03-23'},
  ]
  page:number = 1
  errorSearch:boolean = false

  searchForm = this.fb.group({
    search:['',Validators.required]
  })

  constructor(private fb:FormBuilder, private downloadService:DownloadService) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.getUpload()
  }

  getUpload(){
    this.downloadService.getUpload().subscribe(rs => {
      this.downloadList = rs['data']
      this.onAlertClear()
    })
  }

  getDownload(filename){
    this.downloadService.getDownload(filename)
  }

  get search(){
    return this.searchForm.get('search')
  }

  onSubmit(search){
    console.log(this.searchForm.get('search').value)
    this.downloadService.getDownloadSearch(this.searchForm.get('search').value).subscribe(rs => {
      if(rs['code'] == 0){
        this.errorSearch = true
      }else{
        this.downloadList = rs['data']
        this.onAlertClear()
      }
    })
    this.searchForm.reset()
  }
   onAlertClear(){
     this.errorSearch = false
   }

  

 

}
