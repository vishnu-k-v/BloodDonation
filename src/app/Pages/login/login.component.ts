import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Login } from 'src/app/login';
import { Router } from '@angular/router';
//import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputEmail: string;
  inputPassword: string;

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.inputEmail == "b@n.com" && this.inputPassword == "p") {
        sessionStorage.setItem('user','ben');
        this.router.navigate(['home']);
    }
    else{
      alert("Failed");
    }
  }
}
