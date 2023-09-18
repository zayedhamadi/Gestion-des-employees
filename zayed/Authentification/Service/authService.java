package com.example.zayed.Authentification.Service;

import com.example.zayed.Authentification.Entity.*;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface authService {

    Auth signUp(Auth auth);

    Auth login(String email, String password);


}
