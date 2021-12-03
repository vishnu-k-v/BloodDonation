import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/Services/getdata.service';

@Component({
  selector: 'app-personfilter',
  templateUrl: './personfilter.component.html',
  styleUrls: ['./personfilter.component.css']
})
export class PersonfilterComponent implements OnInit {

  constructor(private service: GetdataService) { }

  ngOnInit(): void {
  }

  SearchPerson(search: any) {
    if (search.personname !== "" && search.personmobile !== "") {
      alert("Please search with either name or mobile");
    }
    else if(search.personname == "" && search.personmobile == ""){
      alert("Please enter either name or mobile");
    }
    else {
      this.service.sendMessageSearchPerson(search);
    }
    //alert(search.personname);
  }

  ClearFilter() {
    this.service.sendMessageToChangeText('Save');
    this.service.sendMessagePopulateData('getData');
  }

}
