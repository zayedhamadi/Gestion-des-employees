package com.example.zayed.Employee.Controller;


import com.example.zayed.Employee.Entity.Employee;
import com.example.zayed.Employee.Service.EmployeeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;


@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

    @Autowired
    private EmployeeServiceImpl EmployeeServiceImpl;


    //add
    @PostMapping(path = "/add")
    public Employee saveEmployee(@RequestBody Employee Employee) {
        return EmployeeServiceImpl.saveEmployee(Employee);

    }

    //update
    @PutMapping("/UpdateEmployee")
    public Employee UpdateEmployee(@RequestBody Employee Employee) {
        return EmployeeServiceImpl.UpdateEmployee(Employee);
    }

    ///ListEmployee
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "/ListEmployee")
    public List<Employee> ListEmployee() {
        return EmployeeServiceImpl.ListEmployee();
    }


    @GetMapping(path = "/ListEmployee/{ID}")
    public ResponseEntity<Employee> specefic_Employee(@PathVariable Integer ID) {
        return EmployeeServiceImpl.SpeceficEmployee(ID);
    }

    @DeleteMapping(path = "/Delete/{ID}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Integer ID) {
        return EmployeeServiceImpl.DeleteEmployee(ID);
    }


}
