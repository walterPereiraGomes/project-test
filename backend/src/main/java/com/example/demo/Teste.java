package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Teste {

    @RequestMapping(method = RequestMethod.GET, path = "/list")
    public String listAll() {
        return "oi mundo";
    }

}
