
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router, private service: EmployeeService) {

    window.addEventListener('mousemove', this.userActivity.bind(this));
    window.addEventListener('keydown', this.userActivity.bind(this));
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  private userActivity() {
    this.authService.userActivity();
  }


  performLogout() {
    this.authService.logout();
  }
}
