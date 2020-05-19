//tie in Employee.js
const Employee = require('../lib/Employee.js')

// function for manager w/member info
class Manager extends Employee {
    constructor (name, id, email, title, officeNumber) {
        super(name, id, email, title)
        this.officeNumber = officeNumber
        this.getRole = () => {
            return 'Manager'
        }
    }
}

//exports Manager for testing and functionality
module.exports = Manager