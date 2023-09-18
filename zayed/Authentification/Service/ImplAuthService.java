package com.example.zayed.Authentification.Service;

import com.example.zayed.Authentification.Entity.Auth;
import com.example.zayed.Authentification.Repository.authRepository;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;


@AllArgsConstructor
@Service
public class ImplAuthService implements authService {


    @Autowired
    private authRepository authRepository;

    @Override
    public Auth signUp(Auth request) {
        return authRepository.save(request);
    }

    @Override
    public Auth login(String email, String password) {
        return authRepository.findByEmailAndPassword(email, password);
    }


    public Optional<Auth> findById(int id) {
        return this.authRepository.findByCin(id);
    }


}

