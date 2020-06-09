// require
const mysql = require("mysql");
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");



const init = async () => {
    await inquirer.prompt(actions)
}

// calling the init function so the app runs
init()