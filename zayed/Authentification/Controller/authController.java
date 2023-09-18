package com.example.zayed.Authentification.Controller;



import com.example.zayed.Authentification.Entity.*;
import com.example.zayed.Authentification.Service.ImplAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/Login")
public class authController {


    @Autowired
    private ImplAuthService implAuthService;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(path = "/signup")
    public Auth signUp(@RequestBody Auth auth) {

        return implAuthService.signUp(auth);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/authenticate")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            Auth user = implAuthService.login(loginRequest.getEmail(), loginRequest.getPassword());

            if (user != null) {
                Map<String, Object> response = new HashMap<>();
                response.put("user", user);
                response.put("message", "Login successful!");
                return ResponseEntity.ok(response);

            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials     !");
            }
        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error !");
        }
    }

    @GetMapping("/searchByCin/{cin}")
    public ResponseEntity<?> searchByCin(@PathVariable int cin) {
        try {
            Optional<Auth> user = implAuthService.findById(cin);

            if (user.isPresent()) {
                return ResponseEntity.ok(user.get());
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with CIN " + cin + " not found.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error !");
        }
    }

}






