import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list = [
    {
      name: "Register",
      link: "/register"
    },
    {
      name: "Login",
      link: "/login",
    }
  ]
  constructor(public route: Router) { }

  ngOnInit() {
  }

}


