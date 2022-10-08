import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ApiService } from './api/api.service';

@Component({   
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing';
 

  constructor(private route: Router,
    public apiService: ApiService, private httpClient: HttpClient,
    public snackBar: MatSnackBar) { }

  ngOnInit() {  
  }
  setRegister() {  
    console.log("Register++++++++++++++++");
    console.log("oninit+++++++++++++++++++");
     this.route.navigate(['/auth/register'])
  }
  viewRecord() {
    this.route.navigate(['/auth/login'])
  }

}
