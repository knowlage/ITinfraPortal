import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private http:HttpClient) { }

  getUpload(){
    return this.http.get('http://localhost:8000/uploads/getUploads')
  }

  getDownload(filename){    
    this.http.get('http://localhost:8000/download/'+filename)
  }
}
