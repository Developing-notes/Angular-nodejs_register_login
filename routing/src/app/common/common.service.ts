import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(
    public snackBar: MatSnackBar
  ) { }
  pattern = {
    email: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
    password: "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}"
  }

  // toastSuccess(value: any) {
  //   this.snackBar.open(value, "X", {
  //     duration: 3000,
  //     panelClass: ["mycsssnack-bartest"],
  //   });
  // }

  // toastFailure(value: any) {
  //   this.snackBar.open(value, "X", {
  //     duration: 3000,
  //     panelClass: ["invalid-record"],
  //   });
  // }

  openAlert(value: any, status: boolean, duration?: number) {
    if (!duration) {
      duration = 2000
    }
    let className = status ? "mycsssnack-bartest" : "invalid-record"
    this.snackBar.open(value, "X", {
      duration,
      panelClass: [className],
    });
  }


}
