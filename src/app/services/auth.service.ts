import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken())
  private loginErr = new BehaviorSubject<boolean>(false)
  private profileName = new BehaviorSubject<String>(this.hasProfileName())
  
  redirectURL = '/';
  

  get isLoggedIn():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  get isLoginError():Observable<boolean>{
    return this.loginErr.asObservable();
  }

  get isProfileName():Observable<String>{
    return this.profileName.asObservable();
  }

  constructor(
    private router:Router, 
    private route:ActivatedRoute,
    private http:HttpClient,
    private userService:UserService) { }


  login(credential){   
    let params = this.route.snapshot.queryParams;
    if(params['redirectURL']){
      this.redirectURL = params['redirectURL']
    }

    let url = "http://localhost:8000/auth/login"    
    this.http.post(url,credential).subscribe(
      data => {
        if(data['code'] == 1){
          localStorage.setItem('token',data['token'])      
          this.getProfileName(credential)         
          this.loggedIn.next(true) 
          this.loginErr.next(false)
          this.router.navigateByUrl(this.redirectURL)
        }
      },
      error => {
        this.loginErr.next(true)        
        this.router.navigateByUrl('/login')
      }  
    )    
   
  }

  logout(){
    localStorage.removeItem('token') 
    localStorage.removeItem('profileName')
    // this.profileName.next('Anonymouse')   
    this.loggedIn.next(false)
    this.loginErr.next(false)
    this.router.navigate(['/portal'])
  }
  
  private hasToken():boolean {
    return !!localStorage.getItem('token');
  }

  private hasProfileName():String{
    return localStorage.getItem('profileName');
  }

  private getProfileName(credential):void {    
    this.userService.getUserName(credential.username).subscribe(
      data => {   
        let _profileName = data['data'][0]['GIVENNAME'] + " " + data['data'][0]['SN']     
        localStorage.setItem('profileName',_profileName)
        this.profileName.next(_profileName)
      }
    )   
    
  }
}
