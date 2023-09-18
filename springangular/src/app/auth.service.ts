import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
``

API = "http://localhost:8082/Login/";
  public Register(auth: any) {
  return this.http.post(this.API + "signup", auth);
}



}
