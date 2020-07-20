-- // remove if existing
DROP DATABASE IF EXISTS burger_db;

-- // create & use db
CREATE DATABASE burger_db;

-- // use db
USE burger_db;

-- // define table
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(40) NOT NULL,
  eaten BOOLEAN DEFAULT FALSE NOT NULL, 
  PRIMARY KEY (id)
);