import { Component, OnInit, Input } from '@angular/core';
//import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Person } from 'src/app/Models/persondetails';
import { GetdataService } from 'src/app/Services/getdata.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';

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

  user: string = '';
  result: string;
  getUrl = 'https://blooddonationaapi-default-rtdb.asia-southeast1.firebasedatabase.app/person.json/';
  person: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('user') != "ben") {
      alert("unauthorized");

      this.router.navigate(['']);
    }
    else {
      this.onLoad();
    }
  }

  onLoad(){
    this.http.get<Person<any>>(this.getUrl)
    .pipe(map(resData=>{
      const personArray=[];
      for(const key in resData){
        personArray.push({id:key,...resData[key]});
      }
      return personArray;
    }))
      .subscribe(person => {
        this.person = person;
        console.log(person);
      });
  }
}
