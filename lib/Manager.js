//tie in Employee.js
const Employee = require('../lib/Employee.js')

// function for manager w/member info
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
        this.getRole = () => {
            return 'Manager'
        }
        this.getOfficeNumber = () => {
            return officeNumber
        }
    }
}

//exports Manager for testing and functionality
module.exports = Manager