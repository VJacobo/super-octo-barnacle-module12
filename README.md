
# SQL Employee tracker

## Description 
The employee tracker is is accessed through mysql. You have a database that has departments, employees, and roles

## How to install and run the project
When the code is installed locally, you will open the integrated terminal.

Type the following in order:
npm install mysql
npm install
npm install inquirer
mysql -u root -p -This will be your personalized information

### CREDITS
Learn SQL In 60 Minutes
https://www.youtube.com/watch?v=p3qvj9hO_Bo


MySQL - The Basics // Learn SQL in 23 Easy Steps
https://www.youtube.com/watch?v=Cz3WcZLRaWc

#### LICENSE
MIT License

## TODO
inquirer.prompt to receive additional information that is required 

 createDepartment(department) {
    db.query("INSERT INTO department SET ?", department);
  }