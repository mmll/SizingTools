package com.emc.ecs.sizetool.service;

import com.emc.ecs.sizetool.dao.Person;

import java.util.List;

public interface PersonSerice {
    public List<Person> findByAge(Integer age);
    public void save(Person person);
}
