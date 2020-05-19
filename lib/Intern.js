//tie in Employee.js
const Employee = require('../lib/Employee.js')

//function for intern w/member info
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)
        this.school = school
        this.getSchool = () => {
            return school
        }
        this.getRole = () => {
            return 'Intern'
        }
    }
}

//export Intern for testing and functionality
module.exports = Intern