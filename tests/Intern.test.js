//tie in Employee.js
const Employee = require('../lib/Employee.js')
//tie in Intern.js
const Intern = require('../lib/Intern.js')

//test to get school
test("Can set school via constructor", () => {
    const schoolValue = "UCLA";
    const employee = new Intern("Foo", 1, "test@test.com", schoolValue);
    expect(employee.school).toBe(schoolValue);
  });

//test function to retrieve school
  test("Can get school via getSchool()", () => {
    const schoolValue = "UCI";
    const employee = new Intern("Foo", 1, "test@test.com", schoolValue);
    expect(employee.getSchool()).toBe(schoolValue);
  });

//test for specific role: Intern
test("Run getRole and return specific role", () => {
    const title = 'Intern'
    const intern = new Intern('Amanda', 1, 'email@email.com', 'UCI')
    expect(intern.getRole()).toBe(title)
})

  

  
