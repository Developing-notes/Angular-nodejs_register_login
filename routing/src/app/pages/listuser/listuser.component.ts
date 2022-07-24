import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})

export class ListuserComponent implements OnInit {
  searchText: any
  arr: any

  constructor(public apiService: ApiService,
    public commonService: CommonService, public route: Router) { }
  ngOnInit() {
  }

  getUser() {
    this.apiService.getData('user/list').subscribe((success: any) => {
      this.arr = success.success
      console.log("🚀 ~ file: template.component.ts ~ line 33 ~ TemplateComponent ~ this.apiService.getUserData ~ this.arr", this.arr)
    })
  }

  viewProfile(value) {
    this.route.navigate(['/page/user_profile', value])
  }


}
