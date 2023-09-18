package com.example.zayed.Employee.Service;

import com.example.zayed.Employee.Constants.EmployeeConstant;
import com.example.zayed.Employee.Entity.Employee;
import com.example.zayed.Employee.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import java.util.*;



@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository EmployeeRepository;


    @Override
    public Employee saveEmployee(Employee Employee) {
        this.EmployeeRepository.save(Employee);
        return Employee;
    }

    @Override
    public Employee UpdateEmployee(Employee updatedEmployee) {
        Optional<Employee> optionalEmployee = EmployeeRepository.findById(updatedEmployee.getId());
        try {
            if (optionalEmployee.isPresent()) {
                Employee existingEmployee = optionalEmployee.get();
                existingEmployee.setName(updatedEmployee.getName());
                existingEmployee.setEmail(updatedEmployee.getEmail());

                return EmployeeRepository.save(existingEmployee);
            } else {
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Employee> ListEmployee() {

        return this.EmployeeRepository.findAll();

    }

    @Override
    public ResponseEntity<Employee> SpeceficEmployee(Integer ID) {
        Optional<Employee> optionalEmployee = this.EmployeeRepository.findById(ID);

        return optionalEmployee.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Override
    public ResponseEntity<String> DeleteEmployee(Integer ID) {
        try {
            Optional<Employee> optionalEmployee = this.EmployeeRepository.findById(ID);
            if (optionalEmployee.isPresent()) {
                Employee e = optionalEmployee.get();
                this.EmployeeRepository.delete(e);
                return ResponseEntity.noContent().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            String errorMessage = EmployeeConstant.Error_Delete + " " + e.getMessage();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorMessage);
        }
    }


}
