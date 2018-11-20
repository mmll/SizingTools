package com.emc.ecs.sizetool;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.emc.ecs.sizetool.controller", "com.emc.ecs.sizetool.dao", "com.emc.ecs.sizetool.service"})
public class SizetoolApplication {

    public static void main(String[] args) {
        SpringApplication.run(SizetoolApplication.class, args);
    }
}
