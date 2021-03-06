//bring in Employee.js
const Employee = require('../lib/Employee.js')
//bring in Engineer.js
const Engineer = require('../lib/Engineer.js')

//test to get gitHub username
test("Can set GitHub account via constructor", () => {
    const gitHubValue = "GitHubUser";
    const employee = new Engineer("Foo", 1, "test@test.com", gitHubValue);
    expect(employee.github).toBe(gitHubValue);
  });

//test function to retrieve GitHub username
  test("Can get GitHub username via getGithub()", () => {
    const gitHubValue = "GitHubUser";
    const employee = new Engineer("Foo", 1, "test@test.com", gitHubValue);
    expect(employee.getGithub()).toBe(gitHubValue);
  });

//test for specific role: Engineer
test("Run getRole and return specific role", () => {
    const title = "Engineer"
    const engineer = new Engineer('Amanda', 1, 'email@email.com')
    expect(engineer.getRole()).toBe(title)
})



 
  

  