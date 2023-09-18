package com.example.zayed.Employee.Service;

import com.example.zayed.Employee.Entity.Employee;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import java.util.*;


@Service
public interface EmployeeService {


    Employee saveEmployee(@RequestBody Employee Employee);

    Employee UpdateEmployee(@RequestBody Employee Employee);

    List<Employee> ListEmployee();

    ResponseEntity<Employee> SpeceficEmployee(@PathVariable Integer ID);

    ResponseEntity<String> DeleteEmployee(@PathVariable Integer ID);

}
