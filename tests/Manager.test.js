//tie in Employee.js
const Employee = require('../lib/Employee.js')
//tie in Manager.js
const Manager = require('../lib/Manager.js')

//test for specific role: Manager
test("Run getRole and return specific role", () => {
    const title = "Manager"
    const manager = new Manager('Amanda', '23456', 'email@email.com')
    expect(manager.getRole()).toBe(title)
})