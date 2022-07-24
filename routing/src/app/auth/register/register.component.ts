import { Component, OnInit, Output, EventEmitter, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { ApiService } from "src/app/api/api.service";
import { CommonService } from "src/app/common/common.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  // @Output() eventmessage = new EventEmitter()

  @ViewChild("registerForm", { read: NgForm, static: true }) registerForm: any;
  value = 1;
  userObj = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  sucessstatus: any
  successmessage: any;
  invalidmessage: any;
  arr: any;
  constructor(
    public apiService: ApiService,
    public commonService: CommonService,
    public router: Router,
    public matSnackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.apiService.postData(this.userObj,
        'user/register').subscribe((result: any) => {
          this.commonService.openAlert(result.success, result.status)

          console.log("success", result);

          if (result.status) {
            let value = JSON.stringify(this.userObj.email);
            localStorage.setItem("key", value);
            // this.eventmessage.emit(value)
            this.router.navigate(["/login"]);
          }

          else if (!result.status) {
          }

          else {
            console.log("errormessage");
          }
        });
    }
  }


}
