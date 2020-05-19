//tie in Employee.js
const Employee = require('../lib/Employee.js')
//tie in Intern.js
const Intern = require('../lib/Intern.js')

//test for specific role: Intern
test("Run getRole and return specific role", () => {
    const title = 'Intern'
    const intern = new Intern('Amanda', '23456', 'email@email.com')
    expect(intern.getRole()).toBe(title)
})

