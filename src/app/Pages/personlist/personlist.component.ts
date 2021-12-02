import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Person } from 'src/app/Models/persondetails';
import { GetdataService } from 'src/app/Services/getdata.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {

  @Input() person:any;
  getUrl = 'https://blooddonationaapi-default-rtdb.asia-southeast1.firebasedatabase.app/person.json/';
  constructor(private service:GetdataService,private http:HttpClient) { }


  ngOnInit(): void {
  this.service.getMessage().subscribe(message=>{
    // console.log("personlist");
    // console.log(message);
    // console.log("personlist");
    // alert("enter");
    this.onLoad();

  })
  }

  onLoad(){
    this.http.get<Person<any>>(this.getUrl)
    .pipe(map(resData=>{
      const personArray=[];
      for(const key in resData){
          
        personArray.push({id:key,...resData[key]});
      }
      console.log("success");
      console.log(personArray);
      return personArray;
    }))
      .subscribe(person => {
        this.person = person;
        //console.log(persons);
      });
  }

}
