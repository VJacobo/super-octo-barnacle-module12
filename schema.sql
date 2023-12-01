
-- department table
CREATE TABLE department (
    id INT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

-- roles table
CREATE TABLE role (
    id INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    FOREIGHN KEY (department_id) REFERENCES department(id)
);

 -- emplyee table
 CREATE TABLE employee (
    id iNT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
 );
