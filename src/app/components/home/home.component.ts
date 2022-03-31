import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: MsalService,private router:Router) { }

  ngOnInit(): void {
    // this.authService.instance.handleRedirectPromise().then( res => {
    //   if (res != null && res.account != null) {
    //     this.authService.instance.setActiveAccount(res.account)
    //   }
    // })
    // if(this.isLoggedIn()){
    //   this.router.navigateByUrl("dashboard")

    // }
  }

  isLoggedIn(): boolean {
    let value = this.authService.instance.getActiveAccount()
    console.log(value);
    
    return this.authService.instance.getActiveAccount() != null
  }

  login() {
    debugger
    this.authService.loginPopup()
      .subscribe((response: AuthenticationResult) => {
        debugger
        this.authService.instance.setActiveAccount(response.account);
        this.router.navigateByUrl("/dashboard")

      });
      
  }
  logout() {
    this.authService.logout()
  }

}
