import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/Models/persondetails';
import { GetdataService } from 'src/app/Services/getdata.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import { AngularFireDatabase } from '@angular/fire/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyBYf3BuD9hLhP8DLHgz73-Jl-qCCamPQDA",
  authDomain: "blooddonationaapi.firebaseapp.com",
  databaseURL: "https://blooddonationaapi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blooddonationaapi",
  storageBucket: "blooddonationaapi.appspot.com",
  messagingSenderId: "485408541197",
  appId: "1:485408541197:web:5df1f707ddd224452a6344",
  measurementId: "G-E8773ECT2P"
};



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

user:string='';
result:string;
person:any[];


  constructor(public router:Router,private getdata:GetdataService,private http:HttpClient,public db:AngularFireDatabase) {}

  ngOnInit(): void {
    if(sessionStorage.getItem('user')!="ben"){
      alert("unauthorized");

      this.router.navigate(['']);
    }
    else{
      this.db.list('/person').valueChanges().subscribe(person=>{this.person=person;
      console.log(this.person);
      });

      
    }
  }
}
