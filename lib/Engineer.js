//tie in Employee.js
const Employee = require('../lib/Employee.js')

// function for engineer w/member info
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email)
        this.github = github
        this.getGithub = () => {
            return github
        }
        this.getRole = () => {
            return 'Engineer'
        }
    }
}

//export Engineer for testing and functionality
module.exports = Engineer