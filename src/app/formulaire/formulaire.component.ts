import { EmployeeComponent } from './../employee/employee.component';

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  employee: any[] = [];
  constructor(private router: Router, private authService: AuthService, private FormBuilder: FormBuilder, private service: EmployeeService) {
    window.addEventListener('mousemove', this.userActivity.bind(this));
    window.addEventListener('keydown', this.userActivity.bind(this));
  }
  private userActivity() {
    this.authService.userActivity();
  }
  form: any;
  ngOnInit() {

  }

  performLogout() {
    this.authService.logout();
  }


  register(registerform: any) {
    let response = this.service.RegisterEmployee(registerform.value);
    response.subscribe((res) => {
      console.log(res);
      alert(" the form was register successfully")


    }, (err) => {
      alert("failed to register")
      console.log(err);
    })
  }
  aa = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
}
