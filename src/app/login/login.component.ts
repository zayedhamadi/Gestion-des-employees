import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';

import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aa = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";

  constructor(private router: Router, private FormBuilder: FormBuilder, private service: AuthService) { }
  ngOnInit(): void { }

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  visible: boolean = true;
  changetype: boolean = true;

  view() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
  form: any;
  login() {
    let response = this.service.login(this.email, this.password);
    response.subscribe(
      (user) => {
        console.log(this.email);
        console.log(this.password);
        alert("login done successfully !");
        console.log(user);
        localStorage.setItem('email', this.email);
        localStorage.setItem('password', this.password);
        this.router.navigate(['/Employee']);
      },
      (error) => {
        console.log(this.email);
        console.log(this.password);
        alert(" login failed successfully !")
        this.router.navigate(['/Login']);
        console.log(error);
        this.errorMessage = 'Invalid credentials. Please try again !.';
      }
    );
  }
}