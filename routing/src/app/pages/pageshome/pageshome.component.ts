import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pageshome',
  templateUrl: './pageshome.component.html',
  styleUrls: ['./pageshome.component.scss']
})
export class PageshomeComponent implements OnInit {
  userMenu = [
    {
      name: "Register",
      link: "/register"
    },
    {
      name: "Login",
      link: "/login"
    },

  ]
  constructor(private route: Router) { }
  ngOnInit() {
  }
  viewRecord() {
    this.route.navigate(['/user_list'])
  }


}
