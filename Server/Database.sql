CREATE DATABASE Test;

CREATE TABLE employee(
    emp_id SERIAL PRIMARY KEY,
    Name VARCHAR(255),
    Department VARCHAR(255), 
    Designation VARCHAR(255), 
    salary int, 
    dob VARCHAR(255), 
    address VARCHAR(255)
);