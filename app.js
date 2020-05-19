//bring in inquirer
const {prompt} = require('inquirer')
const {promisify} = require('util')
const {appendFile, writeFile} = require('fs')

const af = promisify(appendFile)
const wf = promisify(writeFile)

//bring in class constructors from other js files
const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')

// buildTeam = []
wf('./output/team.html', `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> 
</head>
<body>
<div class="row">
    `, err => {
        if (err) {
            console.log(err)
        }
    })
new Employee ()
prompt ([
{
    type: 'input',
    name: 'name',
    message: 'Enter the name of the employee:'
},
{
    type: 'input',
    name: 'id',
    message: 'Enter the employee ID:'
},
{
    type: 'input',
    name: 'email',
    message: 'Enter the employee email:'
},
])
    .then(responses => {
        responses.name = Employee(name)
        responses.id = Employee(id)
        responses.email = Employee(email)
    })
    .catch(err => console.log(err))

.then(responses => {
    prompt ([{
    type: 'list',
    name: 'role',
    message: 'Please choose the role of the employee:',
    choices: ['Manager', 'Engineer', 'Intern']
}])
    .then(responses => {
        console.log(responses.role)
        switch (responses.role) {
            case 'Manager': 
                prompt ([{
                    type: 'input',
                    name: 'officeNumber',
                    message: "Enter manager's office number:"
                }])
                .then(responses => {
                responses.officeNumber = Manager(officeNumber)
                af('./output/team.html', `
    <div class="col s12 m5">
      <div class="card-panel teal">
        <span class="white-text">
            <h2>Name: ${Manager.responses.name}</h2>
            <h3><i class="material-icons small">supervisor_account</i>Manager</h3>
            Email: ${Manager.responses.email}
            Office Number: ${Manager.responses.officeNumber}
        </span>
      </div>
    </div>`)})
                // console.log("new manager")
                break
            case 'Engineer':
                prompt ([{
                    type: 'input',
                    name: 'github',
                    message: "Enter Github username:"
                }])
                .then(responses => {
                    responses.github = Engineer(github)
                    af('./output/team.html', `
                        <div class="col s12 m5">
      <div class="card-panel teal">
        <span class="white-text">
            <h2>Name: ${Engineer.responses.name}</h2>
            <h3><i class="material-icons small">account_box</i>Engineer</h3>
            Email: ${Engineer.responses.email}
            GitHub: ${Engineer.responses.github}
        </span>
      </div>
    </div>
    `)
                })
                // console.log("new engineer")
                break
            case 'Intern':
                prompt ([{
                    type: 'input',
                    name: 'school',
                    message: "Enter intern's school:"
                }])
                .then(responses => {
                    responses.school = Intern(school)
                    af('./output/team.html', `
                    <div class="row">
                    <div class="col s12 m5">
                      <div class="card-panel teal">
                        <span class="white-text">
                            <h2>Name: ${Intern.responses.name}</h2>
                            <h3><i class="material-icons small">school</i>Intern</h3>
                            Email: ${Intern.responses.responses.email}
                            School: ${Intern.responses.school}
                        </span>
                      </div>
                    </div>
                `, err => {
    if (err) {
        console.log(err)
    }
})
})
                // console.log("new intern")
                break
        }
    })
    .catch(err => console.log(err))
})




    .then(responses => {
    af('./output/team.html', `
    </div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>
    `, err => {
        if (err) {
            console.log(err)
        }
    })
})
