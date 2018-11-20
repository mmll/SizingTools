package com.emc.ecs.sizetool.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepostiory extends CrudRepository<Person, Integer> {
    public List<Person> findByAge(Integer age);
}
