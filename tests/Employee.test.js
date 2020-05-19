//bring in Employee.js
const Employee = require('../lib/Employee.js')

//test to confirm what data type Employee is
test("Can instantiate Employee instance", () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object");
});

//test to return name of employee
test("Can set name via constructor arguments", () => {
  const name = "Amanda";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

//test to get id of employee
test("Can set id via constructor argument", () => {
  const idValue = 100;
  const employee = new Employee("Amanda", idValue);
  expect(employee.id).toBe(idValue);
});

//test to get email of employee
test("Can set email via constructor argument", () => {
  const emailValue = "test@test.com";
  const employee = new Employee("Foo", 1, emailValue);
  expect(employee.email).toBe(emailValue);
});

//test function for retrieving name
test("Can get name via getName()", () => {
  const nameValue = "Amanda";
  const employee = new Employee(nameValue);
  expect(employee.getName()).toBe(nameValue);
});

//test function for retrieving id
test("Can get id via getId()", () => {
  const idValue = 100;
  const employee = new Employee("Foo", idValue);
  expect(employee.getId()).toBe(idValue);
});

//test function for retrieving email
test("Can get email via getEmail()", () => {
  const emailValue = "test@test.com";
  const employee = new Employee("Foo", 1, emailValue);
  expect(employee.getEmail()).toBe(emailValue);
});

//test for role: Employee
test("Run getRole and return specific role", () => {
    const title = "Employee"
    const employee = new Employee('Amanda', 1, 'email@email.com')
    expect(employee.getRole()).toBe(title)
});














