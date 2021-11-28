import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable,observable } from 'rxjs';
import { Person } from '../Models/persondetails';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'

  })
}

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  //private apiUrl="https://blooddonationaapi-default-rtdb.asia-southeast1.firebasedatabase.app/person.json"
  private apiUrl='http://www.mocky.io/v2/5ea172973100002d001eeada';
result:string;
  constructor(private http:HttpClient) { }

  // getPersons():Observable<Person[]>{
  //   return this.http.get<Person[]>(this.apiUrl)
   
  // }

  getPersons(){
    return this.http.get('https://blooddonationaapi-default-rtdb.asia-southeast1.firebasedatabase.app/person.json').subscribe(Response=>{
      console.log(Response);
    });
   
  }

 
}
