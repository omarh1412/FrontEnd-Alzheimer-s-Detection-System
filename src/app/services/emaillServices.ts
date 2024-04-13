// email.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private emailApi = 'https://your-backend-api.com/send-email'; // Replace with your backend API endpoint

  constructor(private http: HttpClient) { }

  sendEmail(formData: any) {
    console.log(formData)
    return this.http.post(this.emailApi, formData);
  }
}
