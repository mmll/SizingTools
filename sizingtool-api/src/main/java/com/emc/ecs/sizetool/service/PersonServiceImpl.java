package com.emc.ecs.sizetool.service;

import com.emc.ecs.sizetool.dao.Person;
import com.emc.ecs.sizetool.dao.PersonRepostiory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonServiceImpl implements PersonSerice{
    @Autowired
    private PersonRepostiory personRepostiory;

    @Override
    public List<Person> findByAge(Integer age) {
        return personRepostiory.findByAge(age);
    }

    @Override
    public void save(Person person) {
        personRepostiory.save(person);
    }
}

