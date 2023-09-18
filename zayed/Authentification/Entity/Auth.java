package com.example.zayed.Authentification.Entity;


import lombok.*;
import jakarta.persistence.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;


@Entity
@Data
@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
@Table(name = "auth")
public class Auth   {

    @Id
    @Column(name = "cin", length = 8, unique = true)
    private int cin;
    @Column(name = "email", length = 30, unique = true)
    private String email;
    @Column(name = "password" ,length = 75)
    private String password;
}
