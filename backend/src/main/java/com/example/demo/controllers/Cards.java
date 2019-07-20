package com.example.demo.controllers;

import com.example.demo.model.Card;
import com.example.demo.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Cards {

    @Autowired
    CardRepository card;

    @RequestMapping(method = RequestMethod.GET, path = "/listArquivos")
    public List<Card> listAll() {
        return card.findAll();
    }

    @PostMapping("/save")
    public void save(@RequestBody Card card) {
        this.card.save(card);
    }
}
