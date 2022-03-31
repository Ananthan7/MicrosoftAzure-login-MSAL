import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentPopupComponent } from './components/student-popup/student-popup.component';
import { AuthInterceptor } from './auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MsalInterceptor, MsalInterceptorConfiguration, MsalModule, MsalService, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { environment } from 'src/environments/environment';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    // auth: {
    //   clientId: '92c6d604-1db3-4ed6-8692-572ef5b54cf9',
    //   authority: 'https://login.microsoftonline.com/0141470b-deba-47d9-a707-00007cca2b28 TENANT_ID',
    //   redirectUri: 'http://localhost:4200/'
    // }
    auth: {
      clientId: environment.CLIENT_ID,
      authority: 'https://login.microsoftonline.com/'+environment.TENANT_ID,
      redirectUri: 'http://localhost:4200/'
    }
    // clientId: '9069596d-b6a2-4cc1-808c-518daa064131',
    //   authority: 'https://login.microsoftonline.com/86d799ab-5d23-4627-a3df-6d08ec16b8e8',
    //   redirectUri: 'http://localhost:4201/'
  });
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    StudentListComponent,
    StudentDetailComponent,
    StudentPopupComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MsalModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
