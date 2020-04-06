import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogginError:Observable<boolean>;  

  loginForm = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })

  constructor(
    private fb:FormBuilder,
    private authService:AuthService,    
    ) { }

  ngOnInit() { 
    this.isLogginError = this.authService.isLoginError;    
  }

  get username() {
    return this.loginForm.get('username')
  }

  get password() {
    return this.loginForm.get('password')
  }

  onSubmit() {    
    this.authService.login(this.loginForm.value)
    this.loginForm.reset()
  }

}
