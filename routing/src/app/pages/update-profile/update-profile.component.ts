import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  @ViewChild("updateForm", { read: NgForm, static: true }) 
  updateForm: any;

  list = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Register",
      link: "/register"
    },
    {
      name: "Login",
      link: "/login"
    }
  ]
  imagesFile: any;
  userProfile = {
    email: "",
    first_name: "",
    last_name: "",
    gender: "",
    mobile_number: "",
    dob: "",
    role: "",
    profile_image: ''

  };


  constructor(
    public apiService: ApiService,
    public commonService: CommonService,
    public router: Router,
    public snackBar: MatSnackBar,
  ) { }



  ngOnInit() {
    let value = localStorage.getItem("keys");
    let data = JSON.parse(value);
    this.userProfile.email = data;
    localStorage.clear();
  }


  selectImage(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      console.log("🚀 ~ file: update-profile.component.ts ~ line 66 ~ UpdateProfileComponent ~ selectImage ~ file", file)
      this.userProfile.profile_image = file;
    }
  }



  onSubmit() {
    const formData = new FormData();
    formData.append('image', this.imagesFile);
    if (this.updateForm.valid) {
      this.apiService.postProfile(this.userProfile, 
        'user/edit_profile')
        .subscribe((res: any) => {
          console.log("🚀 ~ file: update-profile.component.ts ~ line 75 ~ UpdateProfileComponent ~ .subscribe ~ res", res)
          this.commonService.
            openAlert(res.message, res.status)
        })
    }
    this.updateForm.reset()
  }
}
