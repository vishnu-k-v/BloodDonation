import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/Models/persondetails';
import { GetdataService } from 'src/app/Services/getdata.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

user:string='';
result:string;
persons:Person[]=[];

  constructor(public router:Router,private getdata:GetdataService,private http:HttpClient) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('user')!="ben"){
      alert("unauthorized");

      this.router.navigate(['']);
    }
    else{
      //alert(this.getdata.getPersons());

console.log("Yes yes yes");
//console.log();
this.getdata.getPersons()
    }
  }
}
