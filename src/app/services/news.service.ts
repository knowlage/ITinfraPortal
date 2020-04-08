import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getNews(){
    return this.http.get('http://localhost:8000/news/getnews')
  }

  getNewsSearch(search){
    return this.http.get('http://localhost:8000/news/getnewssearch/'+search)
  }

  getNewsFeature(){
    return this.http.get('http://localhost:8000/news/getnewsfeature')
  }
}
