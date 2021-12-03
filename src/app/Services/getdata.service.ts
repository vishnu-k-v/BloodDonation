import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Person } from '../Models/persondetails';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'

  })
}

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  //private apiUrl="https://blooddonationaapi-default-rtdb.asia-southeast1.firebasedatabase.app/person.json"
  private apiUrl = 'http://www.mocky.io/v2/5ea172973100002d001eeada';
  result: string;
  mess: string;
  private subject = new Subject<any>();
  private subject2 = new Subject<any>();
  private subject3 = new Subject<any>();
  private subject4 = new Subject<any>();

  constructor(private http: HttpClient) { }

  sendMessage(message: any) {
    this.subject.next(message);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  sendMessageToChangeText(message: any) {
    this.subject3.next(message);
  }
  getMessageToChangeText(): Observable<any> {
    return this.subject3.asObservable();
  }

  sendMessagePopulateData(message: any) {
    this.subject2.next(message);
  }

  getMessagePopulateData(): Observable<any> {
    return this.subject2.asObservable();
  }

  sendMessageSearchPerson(message: any) {
    this.subject4.next(message);
  }

  getMessageSearchPerson(): Observable<any> {
    return this.subject4.asObservable();
  }
 
  getPersons() {
    return this.http.get('https://blooddonationaapi-default-rtdb.asia-southeast1.firebasedatabase.app/person.json').subscribe(Response => {
      console.log(Response);
    });

  }


}
