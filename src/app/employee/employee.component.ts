
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {



  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router, private service: EmployeeService) {
    this.getStudentsDetails();
    window.addEventListener('mousemove', this.userActivity.bind(this));
    window.addEventListener('keydown', this.userActivity.bind(this));
  }
  private userActivity() {
    this.authService.userActivity();
  }


  performLogout() {
    this.authService.logout();
  }

  employee: any[] = [];
  getEmployees() {
    let response = this.service.getEmployee();
    response.subscribe((data) => {
      this.employee = data;
    },
      (Error) => {
        alert("can t get Employee !")
        console.error(Error);
      })
  }


  deleteEmployee(id: number) {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      let response = this.service.DeleteEmployee(id);
      response.subscribe(
        (data) => {
          console.log(data);
          alert("Employee deleted succesffully !");
          this.getEmployees();

        },
        (Error) => {
          alert("can t delete !")
          console.error(Error);
        }
      );
    }
  }
  errorMessage = '';
  id: any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getEmployees();
    });
  }


  studentDetails = null as any;
  EmployeeToUpdate = {
    id: "",
    name: "",
    email: ""
  }

  edit(Employee: any) {
    this.EmployeeToUpdate = Employee;
  }
  getStudentsDetails() {
    this.service.getEmployee().subscribe(
      (resp) => {
        console.log(resp);
        this.studentDetails = resp;
      },
      (err) => {
        console.log(err);
        alert(" can t update ");
        this.errorMessage = 'Invalid credentials. Please try again !.';
      }
    );
  }
  aa = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
  updateEmployee() {
    this.service.updateEmployee(this.EmployeeToUpdate).subscribe(
      (resp) => {
        console.log(resp);
        alert("update succesffully  ")
      },
      (err) => {
        alert("can t update !")
        console.log(err);
      }
    );
  }


  searchText: string = '';
  participant: any;



  searchParticipant() {
    if (this.searchText) {
      const id = parseInt(this.searchText, 10);
      this.service.getEmployeeByID(id).subscribe(
        (res) => {
          this.employee = res ? [res] : [];
        },
        (error) => {

          console.error('Error:', error);
        }
      );

    } else {
      this.getEmployees();
    }
  }

}