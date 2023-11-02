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
            choices: ["Deptartment", "Role", "Employees"],
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
            choices: ["Deptartment", "Role", "Employees"],
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
            choices: ["Deptartment", "Role", "Employees"],
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

