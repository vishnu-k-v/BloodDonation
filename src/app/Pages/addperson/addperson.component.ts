import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Person } from 'src/app/Models/persondetails';
import { map } from 'rxjs/operators';
import { HomeComponent } from '../home/home.component';
import { GetdataService } from 'src/app/Services/getdata.service';

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
  id:string;
  personData: any;
  person: any;
  getUrl = 'https://blooddonationaapi-default-rtdb.asia-southeast1.firebasedatabase.app/person.json/';
  saveButtonText: string;
  @ViewChild('person') form: NgForm;

  constructor(private http: HttpClient, private datepipe: DatePipe, private router: Router, private service: GetdataService) { }

  ngOnInit(): void {
    this.saveButtonText = "Save";
    this.service.getMessage().subscribe(message => {
      console.log("items recieved");
      console.log(message.name);
      console.log("items recieved");
      this.form.controls['name'].setValue(message.name);
      this.form.controls['address'].setValue(message.address);
      this.form.controls['pincode'].setValue(message.pincode);
      this.form.controls['age'].setValue(message.age);
      this.form.controls['bloodgroup'].setValue(message.bloodgroup);
      this.form.controls['mobile'].setValue(message.mobile);
      this.form.controls['lblId'].setValue(message.id);
      this.saveButtonText = "Update";
    });

    this.service.getMessageToChangeText().subscribe(message=>{
      this.ClearFormValues();
      this.saveButtonText=message;
    });
  }

  SavePerson(personData: {
    name: string;
    age: string;
    address: string;
    bloodgroup: string;
    pincode: string;
    mobile: string;
    donationdate: string;
  }, person: NgForm) {

    this.id=this.form.controls['lblId'].value;
    //alert("Id:"+this.id);
    if (this.saveButtonText == "Save") {
      this.month = (this.myDate.getMonth() + 1).toString();
      this.day = this.myDate.getUTCDate().toString();
      this.year = this.myDate.getFullYear().toString();
      personData.name = personData.name.toLowerCase();
      personData.address = personData.address.toLowerCase();
      personData.donationdate = this.year + this.month + this.day;

      this.http
        .post(environment.firebase.databaseURL + '/person.json', personData)
        .subscribe((Response) => {
          //alert("Record added successfully");
          console.log(Response);
          person.resetForm();

          this.service.sendMessagePopulateData('getData');//calling service to populate data

        });
    }
    else if (this.saveButtonText == "Update") {
      this.month = (this.myDate.getMonth() + 1).toString();
      this.day = this.myDate.getUTCDate().toString();
      this.year = this.myDate.getFullYear().toString();
      personData.name = personData.name.toLowerCase();
      personData.address = personData.address.toLowerCase();
      personData.donationdate = this.year + this.month + this.day;

      this.http
        .put(environment.firebase.databaseURL + '/person/'+this.id+'.json', personData)
        .subscribe((Response) => {
          alert("Record updated successfully");
          console.log(Response);
          this.saveButtonText="Save";//set button text as save
          person.resetForm();
          
          this.service.sendMessagePopulateData('getData');//calling service to populate data

        });
    }
  }

  ClearFormValues(){
    this.form.controls['name'].setValue('');
    this.form.controls['address'].setValue('');
    this.form.controls['pincode'].setValue('');
    this.form.controls['age'].setValue('');
    this.form.controls['bloodgroup'].setValue('');
    this.form.controls['mobile'].setValue('');
    this.form.controls['lblId'].setValue('');
    this.saveButtonText="Save";
  }
}
