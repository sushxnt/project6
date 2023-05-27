-- Create database
CREATE DATABASE futsal;

-- Use database
USE futsal;

-- Create table
CREATE TABLE registration (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  team_name VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  contact_no VARCHAR(20) NOT NULL,
  password VARCHAR(100) NOT NULL
);
