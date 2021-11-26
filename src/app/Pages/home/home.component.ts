import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { HostListener } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

user:string='';

// @HostListener('window:unload', ['$event'])
//     unloadHandler() {
//         window.sessionStorage.clear();
//     }

  constructor(public router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('user')!="ben"){
      alert("unauthorized");
      this.router.navigate(['']);
    }
  }

}
