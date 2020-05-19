//tie in Employee.js
const Employee = require('../lib/Employee.js')

//function for intern w/member info
class Intern extends Employee {
    constructor (name, id, email, title, school) {
        super(name, id, email, title)
        this.school = school
        this.getSchool = () => {

        }
        this.getRole = () => {
            return 'Intern'
        }
    }
}

//export Intern for testing and functionality
module.exports = Intern