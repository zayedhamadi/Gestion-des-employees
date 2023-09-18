    package com.example.zayed.Authentification.Repository;

    import com.example.zayed.Authentification.Entity.*;
    import org.springframework.data.jpa.repository.JpaRepository;
    import org.springframework.stereotype.Repository;
    import java.util.*;


    @Repository
    public interface authRepository extends JpaRepository<Auth, Integer> {

        Auth findByEmailAndPassword(String email, String password);

        Optional<Auth> findByCin(int cin);

    }
