package com.example.zayed.Authentification.Entity;

import lombok.*;


    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public class RegisterRequest {
        private String email;
        private String password;
        private int cin;
    }


