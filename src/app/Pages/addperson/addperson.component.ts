import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DatePipe } from '@angular/common';

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
  constructor(private http: HttpClient, private datepipe: DatePipe) {}

  ngOnInit(): void {}


  SavePerson(personData:{name:string;
  age:string;
  address:string;
  bloodgroup:string;
  pincode:string;
  mobile:string;
  donationdate:string;
  }){
    
     this.month=(this.myDate.getMonth()+1).toString();
     this.day=this.myDate.getUTCDate().toString();
     this.year=this.myDate.getFullYear().toString();
     personData.name=personData.name.toLowerCase();
    personData.donationdate=this.day+"-"+this.month+"-"+this.year;
    
    this.http.post(environment.firebase.databaseURL+"/person.json",personData).subscribe(Response=>{
      alert("Record added successfully");
console.log(Response);
    });
  }
}
