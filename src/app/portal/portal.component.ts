import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  searchForm = this.fb.group({
    search:['']
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  get search(){
    return this.searchForm.get('search')
  }

}
