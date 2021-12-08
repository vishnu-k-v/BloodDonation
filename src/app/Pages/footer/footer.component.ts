import { Component, OnInit } from '@angular/core';
import {
  faCoffee,
  faHome,
  faUsers,
  faUserPlus,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  faCoffee = faCoffee;
  faHome = faHome;
  faUsers = faUsers;
  faUserPlus = faUserPlus;
  faInfoCircle = faInfoCircle;
  constructor() {}

  ngOnInit(): void {}
}
