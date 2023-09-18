import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { this.initInactivityTimer(); }

  private inactivityTimeout: number = 10 * 60 * 1000;
  private inactivityTimer: any;
  private resetInactivityTimer() {
    clearTimeout(this.inactivityTimer);
    this.initInactivityTimer();
  }

  private initInactivityTimer() {
    this.inactivityTimer = setTimeout(() => {

      localStorage.removeItem('userToken');
      location.href = '/login';
    }, this.inactivityTimeout);
  }

  logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
  userActivity() {
    this.resetInactivityTimer();
  }

  API = "http://localhost:8082/Login";

  public Register(auth: any) {
    return this.http.post(this.API + "/signup", auth);

  }

  public login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.API}/authenticate`, body);
  }

}