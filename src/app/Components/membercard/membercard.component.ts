import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-membercard',
  templateUrl: './membercard.component.html',
  styleUrls: ['./membercard.component.css'],
})
export class MembercardComponent implements OnInit {
  @Input() person: any;
  constructor() {}

  ngOnInit(): void {}
}
