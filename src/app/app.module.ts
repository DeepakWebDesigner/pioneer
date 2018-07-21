import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserDetailsComponent } from './dashboard/user-details/user-details.component';
import { HeaderDashboardComponent } from './dashboard/header-dashboard/header-dashboard.component';
import { FooterDashboardComponent } from './dashboard/footer-dashboard/footer-dashboard.component';
import { LeftnavDashboardComponent } from './dashboard/leftnav-dashboard/leftnav-dashboard.component';

const appRoutes: Routes = [
  { path:'login', component:LoginComponent},
	{ path:'register', component:RegisterComponent},
  { path:'home', component:HomeComponent},
  { path:'dashboard/user-details', component:UserDetailsComponent},
  { path:'', redirectTo:"/home", pathMatch:"full"}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserDetailsComponent,
    HeaderComponent,
    FooterComponent,
    HeaderDashboardComponent,
    FooterDashboardComponent,
    LeftnavDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
