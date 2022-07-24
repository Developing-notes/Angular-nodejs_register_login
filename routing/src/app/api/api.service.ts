import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  authToken = localStorage.getItem('token')
  constructor(private http: HttpClient) { }

  postData(value, url: string) {
    console.log(this.authToken);
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      'Authorization': `Bearer ${this.authToken}`
    })
    return this.http.post(environment.apiUrl + 
      url, JSON.stringify(value),
      { 'headers': headers });
  }

  getData(url: string) {
    console.log(this.authToken);
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      'Authorization': `Bearer ${this.authToken}`
    })
    return this.http.get(environment.apiUrl + url, { 'headers': headers });
  }
  postProfile(value, url: string) {
    
    let formData = new FormData()
    formData.append('email', value.email)
    formData.append('image', value.profile_image)
    formData.append('first_name', value.first_name)
    formData.append('last_name', value.last_name)
    formData.append('mobile_number', value.mobile_number)
    formData.append('gender', value.gender)
    formData.append('role', value.role)
    formData.append('dob', value.dob)
    return this.http.post<any>(environment.apiUrl + url, formData);
  }


  postKyc(value, url: string) {
    return this.http.post<any>(environment.apiUrl + url, value);
  }
}