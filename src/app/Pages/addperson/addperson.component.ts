import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Person } from 'src/app/Models/persondetails';
import { map } from 'rxjs/operators';
import { HomeComponent } from '../home/home.component';
import { GetdataService } from 'src/app/Services/getdata.service';
//import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.css'],
})
export class AddpersonComponent implements OnInit {
  myDate = new Date();
  day: string;
  month: string;
  year: string;
  personData:any;
  person:any;
  getUrl = 'https://blooddonationaapi-default-rtdb.asia-southeast1.firebasedatabase.app/person.json/';
  currentUrl = this.router.url;

  constructor(private http: HttpClient, private datepipe: DatePipe,private router:Router,private service:GetdataService) {}

  ngOnInit(): void {}

  SavePerson(personData: {
    name: string;
    age: string;
    address: string;
    bloodgroup: string;
    pincode: string;
    mobile: string;
    donationdate: string;
  },person:NgForm) {

    // this.db.list('/person',ref=>ref.orderByValue().limitToLast(1)).valueChanges().subscribe(Response=>{
    //   this.personData=Response[0];
    //  });

     this.month = (this.myDate.getMonth() + 1).toString();
      this.day = this.myDate.getUTCDate().toString();
      this.year = this.myDate.getFullYear().toString();
      personData.name=personData.name.toLowerCase();
      personData.address=personData.address.toLowerCase();
      personData.donationdate = this.year + this.month + this.day;
  
      this.http
        .post(environment.firebase.databaseURL + '/person.json', personData)
        .subscribe((Response) => {
          //alert("Record added successfully");
          console.log(Response);
          person.resetForm();
      
         this.service.sendMessage('monuseee');
         
        });
  }

  showData(){
    // this.http.get<Person<any>>(this.getUrl).subscribe(person=>{
    //   this.person=person;
    // });

    
  }
}
