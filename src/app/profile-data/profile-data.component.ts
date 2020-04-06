import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent implements OnInit {

  requestLogs = [
    {"requestTitle":"ขอเปลี่ยนชื่อผู้ครอบครอง","requestStatus":"ได้รับคำขอ","statusDate":"2020-02-14"},
    {"requestTitle":"ขอเปลี่ยนชื่อผู้ครอบครอง","requestStatus":"ได้รับคำขอ","statusDate":"2020-02-14"},
  ]

  constructor() { }

  ngOnInit() {
    
  }
  

}
