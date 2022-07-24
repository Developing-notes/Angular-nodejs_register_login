import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api/api.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-kyc-profile',
  templateUrl: './kyc-profile.component.html',
  styleUrls: ['./kyc-profile.component.scss']
})
export class KycProfileComponent implements OnInit {
  @ViewChild("kycForm", { read: NgForm, static: true })
  kycForm: any;

  multipleImages = [];

  userProfile = {
    email: "",

  };

  constructor(public httpClient: HttpClient,
    public commonService: CommonService,
    public apiService: ApiService) { }

  ngOnInit() {
  }

  selectMultipleImage(event) {
    console.log("🚀 ~ file: kyc-profile.component.ts ~ line 31 ~ KycProfileComponent ~ selectMultipleImage ~ event", event)
    for (let i = 0; i < event.target.files.length; i++) {
      this.multipleImages.push(event.target.files[i]);
    }

  }

  onMultipleSubmit() {
    const formData = new FormData();
    for (let i = 0; i < this.multipleImages.length; i++)
      formData.append('image', this.multipleImages[i]);
    formData.append('email', this.userProfile.email)
    if (this.kycForm.valid) {
      this.apiService.postKyc(formData,
        'user/kyc_status')
        .subscribe((res: any) => {
          console.log("🚀 ~ file: update-profile.component.ts ~ line 75 ~ UpdateProfileComponent ~ .subscribe ~ res", res)
          this.commonService.
            openAlert(res.message, res.status)
        })
    }

  }
}
