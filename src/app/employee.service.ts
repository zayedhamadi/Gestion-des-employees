import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }


  API = "http://localhost:8082/";
  public getEmployee() {
    return this.http.get<any[]>(this.API + "ListEmployee");
  }

  public DeleteEmployee(id: number) {
    return this.http.delete(this.API + "Delete/" + id);
  }

  public RegisterEmployee(employeedata: any) {
    return this.http.post(this.API + "add", employeedata);
  }


  public getEmployeeByID(id: number): Observable<any> {
    return this.http.get<any>(this.API + "ListEmployee/" + id);
  }
  public updateEmployee(Employee: any) {
    return this.http.put(this.API + 'UpdateEmployee', Employee);
  }

  public searchUserByCIN(cin: number): Observable<any> {
    return this.http.get<any>(this.API + "searchByCin/" + cin);
  }

}
