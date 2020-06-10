-- // remove if existing
DROP DATABASE IF EXISTS burger_db;

-- // create & use database 
CREATE DATABASE burger_db;
USE burger_db;

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