// setting up the path to use mysql, inquirer, then the db.js.
const mysql = require("mysql");
const inquirer = require("inquirer");
const db = require("../db")

// a function to propmpt the user with the choices to either add, view or update either a Department, role, or emplyee.
function firstQuestion() {
    inquirer.prompt([
        {
            type: "list",
            message: "add, view, update information?",
            name: "firstQustionChoices",
            choices: ["add", "view", "update"],
        }
    ]).then(function(deptAnswers){
        console.log(deptAnswers.firstQuestionChoices);
        if(deptAnswers.firstQuestionChoices === "add") {
            addWhat(deptAnswers)
        } else if (deptAnswers.firstQuestionChoices === "view") {
            viewWhat(deptAnswers)
        } else if (deptAnswers.firstQuestionChoices === "update") {
            updateWhat(deptAnswers)
        }
    })
}

// a function to add information to either the department, role, or employee side of the db.
function addWhat() {
    inquirer.prompt([
        {
            type: "list",
            message: "Okay, What do you wish to add?",
            name: "addWhatChoices",
            choices: ["Deptartment", "Roles", "Employees"],
        }
    ]).then(function(addWhatAnswers){
        if(addWhatAnswers.addWhatChoices === "Department") {
            addDept()
        } else if (addWhatAnswers.addWhatChoices === "Roles") {
            addRoles()
        } else {
            addEmplyees();
        }
    })
}

// a function to view information to either the department, role, or employee side of the db.
function viewWhat() {
    inquirer.prompt([
        {
            type: "list",
            message: "Okay, What do you wish to view?",
            name: "viewWhatChoices",
            choices: ["Deptartment", "Roles", "Employees"],
        }
    ]).then(function(viewWhatAnswers){
        if(viewWhatAnswers.viewWhatChoices === "Department") {
            viewDept()
        } else if (viewWhatAnswers.viewWhatChoices === "Roles") {
            viewRoles()
        } else {
            viewEmplyees();
        }
    })
}

// a function to update information to either the department, role, or employee side of the db.
function updateWhat() {
    inquirer.prompt([
        {
            type: "list",
            message: "Okay, What do you wish to update?",
            name: "updateWhatChoices",
            choices: ["Deptartment", "Roles", "Employees"],
        }
    ]).then(function(updateWhatAnswers){
        if(updateWhatAnswers.updateWhatChoices === "Department") {
            updateDept()
        } else if (updateWhatAnswers.updateWhatChoices === "Roles") {
            updateRoles()
        } else {
            updateEmplyees();
        }
    })
}

// function if "View Department, get the records and to display the information.
function viewDept() {
    db.connection.query("SELECT + FROM departments", function(err, res){
        if (err) throw err;
        const deptArr = []
        for (var i = 0; i < res.length; i++) {
            deptArr.push(res[i])
        }
        console.table(deptArr);
    });
}

// function if "View Roles", get the records and to display the information.
function viewRoles() {
    db.connection.query("SELECT + FROM roles", function(err, res){
        if (err) throw err;
        const rolesArr = []
        for (var i = 0; i < res.length; i++) {
            rolesArr.push(res[i])
        }
        console.table(rolesArr);
    });
}

// function if "View Roles", get the records and to display the information.
function viewEmplyees() {
    db.connection.query("SELECT + FROM employees", function(err, res){
        if (err) throw err;
        const employeesArr = []
        for (var i = 0; i < res.length; i++) {
            employeesArr.push(res[i])
        }
        console.table(employeesArr);
    });
}