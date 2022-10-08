import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  constructor(public apiService: ApiService,
    public commonService: CommonService, public route: Router,
    public activatedRoute: ActivatedRoute,
  ) { }
  user_profile = {
    username: "",
    email: "",
    user_status: ""
  }; 
  id: any;
  ngOnInit() {
    console.log("Enter++++++++++++++++");
    this.id = this.activatedRoute.snapshot.params["id"];
    this.apiService.postData({ id: this.id }, "user/profile").subscribe((result: any) => {
      this.user_profile.username = result.success.username;
      this.user_profile.email = result.success.email;
      this.user_profile.user_status = result.success.user_status
      let value = JSON.stringify(this.user_profile.email);
      localStorage.setItem("keys", value);
    });
  }
  updateProfile() {
    this.route.navigate(['/page/update_profile'])
  }
}
