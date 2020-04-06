import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  msg = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempore ab, nihil beatae, odio dignissimos reiciendis molestiae voluptatibus accusamus fuga, iste doloremque cum atque similique distinctio. Cupiditate aut cumque voluptate!"
  newsLists = [
    {'title':'Card title','message':this.msg,'category':'ทั่วไป','date':'2020-03-02'},
    {'title':'Card title','message':this.msg,'category':'ทั่วไป','date':'2020-03-02'},
    {'title':'Card title','message':this.msg,'category':'ทั่วไป','date':'2020-03-02'},
    {'title':'Card title','message':this.msg,'category':'ทั่วไป','date':'2020-03-02'},
    {'title':'Card title','message':this.msg,'category':'ทั่วไป','date':'2020-03-02'},
  ]

  searchForm = this.fb.group({
    search:['']
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  get search() {
    return this.searchForm.get('search')
  }

  onSubmit(){
    console.log(this.searchForm.value)
  }
}
