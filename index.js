// setting up the path to use mysql, inquirer, then the db.js.
const db = require("./lib/db.js");
const inquirer = require('inquirer');

// Use an asynchronous IIFE to handle top-level await
(async () => {
    // a function to prompt the user with the choices to either add, view, or update either a Department, role, or employee.
    function firstQuestion() {
        inquirer.prompt([
            {
                type: "list",
                message: "add, view, update information?",
                name: "firstQuestionChoices",
                choices: ["add", "view", "update"],
            }
        ]).then(function (deptAnswers) {
            console.log(deptAnswers.firstQuestionChoices);
            if (deptAnswers.firstQuestionChoices === "add") {
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
        ]).then(function (addWhatAnswers) {
            if (addWhatAnswers.addWhatChoices === "Department") {
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
                choices: ["Department", "Roles", "Employees"],
            }
        ]).then(function (viewWhatAnswers) {
            if (viewWhatAnswers.viewWhatChoices === "Department") {
                viewDept()
            } else if (viewWhatAnswers.viewWhatChoices === "Roles") {
                viewRoles()
            } else {
                viewEmployees();
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
        ]).then(function (updateWhatAnswers) {
            if (updateWhatAnswers.updateWhatChoices === "Department") {
                updateDept()
            } else if (updateWhatAnswers.updateWhatChoices === "Roles") {
                updateRoles()
            } else {
                updateEmplyees();
            }
        })
    }

    // function to "View Department, get the records and to display the information.
    function viewDept() {
        db.query("SELECT * FROM department", function (err, res) {
            if (err) throw err;
            const deptArr = []
            for (var i = 0; i < res.length; i++) {
                deptArr.push(res[i])
            }
            console.table(deptArr);
            continueOption();
        });
    }

    // function to "View Roles", get the records and to display the information.
    function viewRoles() {
        db.connection.query("SELECT * FROM role", function (err, res) {
            if (err) throw err;
            const rolesArr = []
            for (var i = 0; i < res.length; i++) {
                rolesArr.push(res[i])
            }
            console.table(rolesArr);
            continueOption();
        });
    }

    // function to "View Roles", get the records and to display the information.
    function viewEmployees() {
        db.connection.query("SELECT * FROM employee", function (err, res) {
            if (err) throw err;
            const employeesArr = []
            for (var i = 0; i < res.length; i++) {
                employeesArr.push(res[i])
            }
            console.table(employeesArr);
            continueOption();
        });
    }

    // function to "add Department", get the records and to display the information.
    function addDept() {
        db.connection.query("SELECT * FROM department", function (err, res) {
            if (err) throw err;
            const deptArr = []
            for (var i = 0; i < res.length; i++) {
                deptArr.push(res[i])
            }
            console.table(deptArr);
            continueOption();
        });
    }

    // function to "add Role", get the records and to display the information.
    function addRole() {
        db.connection.query("SELECT * FROM roles", function (err, res) {
            if (err) throw err;
            const rolesArr = []
            for (var i = 0; i < res.length; i++) {
                rolesArr.push(res[i])
            }
            console.table(rolesArr);
            continueOption();
        });
    }

    // function to "add employee", get the records and to display the information.
    function addEmployee() {
        db.connection.query("SELECT * FROM employee", function (err, res) {
            if (err) throw err;
            const employeesArr = []
            for (var i = 0; i < res.length; i++) {
                employeesArr.push(res[i])
            }
            console.table(employeesArr);
            continueOption();
        });
    }

    // function to "update departments", get the records and to display the information.
    function updateDept() {
        db.connection.query("SELECT + FROM department", function (err, res) {
            if (err) throw err;
            const deptArr = []
            for (var i = 0; i < res.length; i++) {
                deptArr.push(res[i])
            }
            console.table(deptArr);
            continueOption();
        });
    }

    // function to "update roles", get the records and to display the information.
    function updateRoles() {
        db.connection.query("SELECT * FROM roles", function (err, res) {
            if (err) throw err;
            const rolesArr = []
            for (var i = 0; i < res.length; i++) {
                rolesArr.push(res[i])
            }
            console.table(rolesArr);
            continueOption();
        });
    }

    // function to "update employees", get the records and to display the information.
    function updateEmplyees() {
        db.connection.query("SELECT * FROM employees", function (err, res) {
            if (err) throw err;
            const employeesArr = []
            for (var i = 0; i < res.length; i++) {
                employeesArr.push(res[i])
            }
            console.table(employeesArr);
            continueOption();
        });
    }
    // keeps the script repeating until "NO" is chosen.
    function continueOption() {
        inquirer.prompt([
            {
                type: "list",
                message: "Would you like to do something else?",
                name: "loopAnswer",
                choices: ["YES", "NO"]
            }
        ]).then(function (answer) {
            if (answer.loopAnswer === "YES") {
                firstQuestion();
            } else {
                console.log("completed!!");
                db.connection.end();
            }
        });
    }

    // Start your application logic here, e.g., calling your first function
    firstQuestion();
})();

// module.exports = {
//     firstQuestion: firstQuestion
// };
