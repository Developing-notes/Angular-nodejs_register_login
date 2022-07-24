import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { ApiService } from "src/app/api/api.service";
import { CommonService } from "src/app/common/common.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  @ViewChild("login", { read: NgForm, static: true }) login: any;
  item: any;
  arr: any;
  adminlogin: any
  userObject = {
    email: "",
    password: "",
  };

  constructor(
    public apiService: ApiService,
    public snackBar: MatSnackBar,
    public commonService: CommonService,
    public router: Router
  ) { }

  ngOnInit() {
    let value = localStorage.getItem("key");
    let emailel = JSON.parse(value);
    this.userObject.email = emailel;
    localStorage.clear();

  }


  onSubmit() {
    if (this.login.valid) {
      this.apiService.postData(this.userObject, "user/login")
        .subscribe((result: any) => {
          this.commonService.openAlert(result.message, result.status)
          console.log("success", result);
          this.apiService.authToken=result.token
          localStorage.setItem('token', result.token)
          result.token
          if (result.adminstatus == 0) {
            this.router.navigate(['/page/user_list'
            ])
          }
          else if (result.userstatus == 1) {
            this.router.navigate(['/page/user_profile',
              result.success._id])
          }
          else if (!result.status) {

          }
          else {
            console.log('Some technical error')
          }
        });
    }

  }
}

