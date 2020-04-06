import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn:Observable<boolean>;
  isProfileName:Observable<String>;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.isProfileName = this.authService.isProfileName;
  }

  onLogout(){
    this.authService.logout()
  }

}
