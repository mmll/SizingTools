package com.emc.ecs.sizetool.controller;

import com.emc.ecs.sizetool.dao.Person;
import com.emc.ecs.sizetool.service.PersonSerice;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

@Controller
public class MainController {
    private static final Logger logger = LoggerFactory.getLogger(MainController.class);

    @Autowired
    private PersonSerice personSerice;

    @GetMapping("/index")
    public String index(Model model) {
        logger.info("Process the get request: /index");
        model.addAttribute("personList", personSerice.findByAge(20));
        model.addAttribute("person", new Person());
        return "index";
    }

    @PostMapping("/addPerson")
    public RedirectView addPerson(@ModelAttribute Person person) {
        logger.info("Process the post request, the form data: {}", person.toString());
        personSerice.save(person);
        return new RedirectView("/index");
    }
}
