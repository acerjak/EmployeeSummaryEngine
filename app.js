//bring in inquirer
const prompt = require('inquirer')

//bring in class constructors from other js files
const Employee = require('../lib/Employee.js')
const Manager = require('../lib/Manager.js')
const Engineer = require('../lib/Engineer.js')
const Intern = require('../lib/Intern.js')

prompt ({
    type: 'list',
    name: 'buildTeam',
    message: 'Please choose the type of employee:',
    choices: 
})

