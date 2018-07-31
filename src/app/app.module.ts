import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from './auth.guard.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminpenalComponent } from './adminpenal/adminpenal.component';
import { MainComponent } from './main/main.component';

import { SharedService } from './shared.service';
import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { LoginAdminComponent } from './login-admin/login-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminpenalComponent,
    MainComponent,
    LoginAdminComponent
  ],
  imports: [
    BrowserModule,
     HttpModule,
    FormsModule, 
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'main',
        component: MainComponent
      },
      { path: 'adminpenal', component: AdminpenalComponent, canActivate: [AuthGuardService] }
    ])
  ],
  providers: [SharedService, ApiService, CookieService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
