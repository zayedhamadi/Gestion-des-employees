package com.example.zayed.Employee.Entity;


import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Setter
@Getter
public class EmployeeUpdated {

    private String name;

    private String email;
}
