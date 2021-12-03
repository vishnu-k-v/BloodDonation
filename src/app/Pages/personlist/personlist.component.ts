import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/Models/persondetails';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { GetdataService } from 'src/app/Services/getdata.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {

  @Input() person: any;
  getUrl = 'https://blooddonationaapi-default-rtdb.asia-southeast1.firebasedatabase.app/person.json/';
  constructor(private service: GetdataService, private http: HttpClient, private db: AngularFireDatabase) { }


  ngOnInit(): void {
    this.service.getMessageSearchPerson().subscribe(message => {
      this.SearchPerson(message);
    });
    this.service.getMessagePopulateData().subscribe(message => {
      this.onLoad();
    });
  }

  onLoad() {
    this.http.get<Person<any>>(this.getUrl)
      .pipe(map(resData => {
        const personArray = [];
        for (const key in resData) {

          personArray.push({ id: key, ...resData[key] });
        }
        return personArray;
      }))
      .subscribe(person => {
        this.person = person;
      });
  }

  PopulatePerson(item: any) {
    this.service.sendMessage(item);
  }

  DeletePerson(item: any) {

    var result = confirm("Are you sure to delete?");
    if (result) {
      this.http
        .delete(environment.firebase.databaseURL + '/person/' + item.id + '.json')
        .subscribe((Response) => {
          //alert("Record deleted successfully");
          console.log(Response);

          this.service.sendMessagePopulateData('getData');//calling service to populate data
          this.service.sendMessageToChangeText('Save');
        });
    }
  }

  SearchPerson(persondetail: any) {
    //  this.db.list('/person',ref=>ref.orderByChild('name').equalTo(persondetail.personname)).valueChanges().subscribe(person=>{
    //    this.person=person;
    //    console.log("SearchPerson");
    //    console.log(person);
    //    console.log("SearchPerson");
    //  })

    this.http.get<Person<any>>(this.getUrl)
      .pipe(map(resData => {
        const personArray = [];
        for (const key in resData) {
          personArray.push({ id: key, ...resData[key] });
        }
        return personArray;
      }))
      .subscribe(person => {
        if (persondetail.personname == "") {
          var data = person.filter(item => item.mobile == persondetail.personmobile);
          this.person = data;
        }
        else if (persondetail.personmobile == "") {
          var data = person.filter(item => item.name == persondetail.personname);
          this.person = data;
        }
      });

  }
}
