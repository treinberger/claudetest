package com.allianz.raffle.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Arrays;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping
    public List<Map<String, Object>> getUsers() {
        // Mock data for demonstration
        return Arrays.asList(
            Map.of("id", 1, "username", "user1", "email", "user1@example.com"),
            Map.of("id", 2, "username", "user2", "email", "user2@example.com"),
            Map.of("id", 3, "username", "user3", "email", "user3@example.com")
        );
    }
}