const prompt = require('inquirer')

//function for member info
class Employee {
    constructor (name, id, title) {
        this.name = name
        this.id = id
        this.title = title
        this.getName = () => {
            
        }
        this.getId = () => {

        }
        this.getEmail = () => {

        }
        this.getRole = () => {
            return 'Employee'
        }
    }
}
// variable for manager test
let employee = new Employee('Amanda','12345','engineer')


//function for manager w/member info
class Manager extends Employee {
    constructor (name, id, title, officeNumber) {
        super(name, id, title)
        this.officeNumber = officeNumber
        this.getRole = () => {
            return 'Manager'
        }
    }
}

//function for engineer w/member info
class Engineer extends Employee {
    constructor (name, id, title, github) {
        super(name, id, title)
        this.github = github
        this.getGithub = () => {

        }
        this.getRole = () => {
            return 'Engineer'
        }
    }
}

//function for intern w/member info
class Intern extends Employee {
    constructor (name, id, title, school) {
        super(name, id, title)
        this.school = school
        this.getSchool = () => {

        }
        this.getRole = () => {
            return 'Intern'
        }
    }
}

module.exports = Employee
module.exports = Manager
module.exports = Engineer
module.exports = Intern

