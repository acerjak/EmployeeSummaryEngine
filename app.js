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
wf('team.html', `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> 
</head>
    `, err => {
        if (err) {
            console.log(err)
        }
    })

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
        responses.name = name
        responses.id = id
        responses.email = email
        responses = new Employee()
        console.log(responses)
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
                // console.log("new manager")
                responses = new Manager ()
                break
            case 'Engineer':
                prompt ([{
                    type: 'input',
                    name: 'githubUser',
                    messsage: "Enter engineer's GitHub username:"
                }])
                // console.log("new engineer")
                responses = new Engineer ()
                break
            case 'Intern':
                prompt ([{
                    type: 'input',
                    name: 'school',
                    message: "Enter intern's school:"
                }])
                // console.log("new intern")
                responses = new Intern ()
                break
        }
    })
    .catch(err => console.log(err))
})

.then(responses => {
    af('team.html', `
<body>
<div class="row">
    <div class="col s12 m5">
      <div class="card-panel teal">
        <span class="white-text">
            <h2>Name: ${responses.name}</h2>
            <h3><i class="material-icons small">supervisor_account</i>Manager</h3>
            Email: ${responses.email}
            Office Number: ${responses.officeNumber}
        </span>
      </div>
    </div>
    <div class="col s12 m5">
      <div class="card-panel teal">
        <span class="white-text">
            <h2>Name: ${responses.name}</h2>
            <h3><i class="material-icons small">account_box</i>Engineer</h3>
            Email: ${responses.email}
            GitHub: ${responses.github}
        </span>
      </div>
    </div>
    <div class="row">
    <div class="col s12 m5">
      <div class="card-panel teal">
        <span class="white-text">
            <h2>Name: ${responses.name}</h2>
            <h3><i class="material-icons small">school</i>Intern</h3>
            Email: ${responses.email}
            School: ${responses.school}
        </span>
      </div>
    </div>
</div>
`, err => {
    if (err) {
        console.log(err)
    }
})
})
.then(responses => {
    af('team.html', `
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>
    `, err => {
        if (err) {
            console.log(err)
        }
    })
})
