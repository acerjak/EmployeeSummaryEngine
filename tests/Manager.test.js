//tie in Employee.js
const Employee = require('../lib/Employee.js')
//tie in Manager.js
const Manager = require('../lib/Manager.js')

//test to get officeNumber
test("Can set office number via constructor argument", () => {
    const officeNumValue = 100;
    const employee = new Manager("Foo", 1, "test@test.com", officeNumValue);
    expect(employee.officeNumber).toBe(officeNumValue);
  });

//test for specific role: Manager
test("Run getRole and return specific role", () => {
    const title = "Manager"
    const manager = new Manager('Amanda', 1, 'email@email.com')
    expect(manager.getRole()).toBe(title)
})

//test function to retrieve officeNumber
  test("Can get office number via getOffice()", () => {
    const officeNumValue = 100;
    const employee = new Manager("Foo", 1, "test@test.com", officeNumValue);
    expect(employee.getOfficeNumber()).toBe(officeNumValue);
  });
  