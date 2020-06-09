-- // remove if existing
DROP DATABASE IF EXISTS db_burger;

-- // create & use database 
CREATE DATABASE db_burger;
USE db_burger;

-- // define tables 
CREATE TABLE  (
    id INT auto_increment NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT auto_increment NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT auto_increment NOT NULL,
    
    PRIMARY KEY (id)
);