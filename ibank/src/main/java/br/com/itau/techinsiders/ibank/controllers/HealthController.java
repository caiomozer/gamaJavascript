package br.com.itau.techinsiders.ibank.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HealthController {
    
    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String status() {
        return "{\"satus\": \"running\"}";
    }
}