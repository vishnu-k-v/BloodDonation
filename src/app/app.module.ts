import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from 'src/environments/environment';

import { Component } from '@angular/core';
import { AngularFireModule} from '@angular/fire/compat'
//import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { PersonlistComponent } from './Pages/personlist/personlist.component';
import { AddpersonComponent } from './Pages/addperson/addperson.component';
import { DatePipe } from '@angular/common';
import { PersonfilterComponent } from './pages/personfilter/personfilter.component';



const appRoutes:Routes=[
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PersonlistComponent,
    AddpersonComponent,
    PersonfilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
