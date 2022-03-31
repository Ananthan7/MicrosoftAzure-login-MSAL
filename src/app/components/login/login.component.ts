import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentUser:any = 'ananthan';
  currentPswd:any = '1234';
// reactive form
  loginForm=this.fb.group({
    userName: [''],
    password: ['']
  })
  constructor(private router:Router ,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  
  handleLogin(){
    let user = this.loginForm.value.userName;
    let pswd = this.loginForm.value.password;
    if(this.currentUser == user && this.currentPswd ==pswd){
      this.router.navigateByUrl("studentlist")
    }else{
      alert("Invalid Credentials")
    }
  }

}
