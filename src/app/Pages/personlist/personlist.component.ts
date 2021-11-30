import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Person } from 'src/app/Models/persondetails';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {

  @Input() person:any;
  constructor() { }

  ngOnInit(): void {
  }

}
