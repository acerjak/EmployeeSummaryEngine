//bring in inquirer
const {prompt} = require('inquirer')
const {promisify} = require('util')
const {appendFile, writeFile, readFile} = require('fs')

const af = promisify(appendFile)
const wf = promisify(writeFile)
const rf = promisify(readFile)

//bring in class constructors from other js files
const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')

//define empty array
let employee = []

//write top half of HTML file
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

//start by asking which role, start specific function
let roleQuestions = () => {
    prompt ([
        {
        type: 'list',
        name: 'role',
        message: 'Please choose the role of the employee:',
        choices: ['Manager', 'Engineer', 'Intern', 'Finish Roster']
        }
    ])
        .then(({role}) => {
            switch (role) {
                case 'Manager': 
                    managerQuestions()
                    // console.log("new manager")
                    break
                case 'Engineer':
                    engineerQuestions()
                    // console.log("new engineer")
                    break
                case 'Intern':
                    internQuestions()
                    // console.log("new intern")
                    break
                case 'Finish Roster':
                    break
            }
        })                   
}

roleQuestions()

//function for new manager questions
let managerQuestions = () => {
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
        {
        type: 'input',
        name: 'officeNumber',
        message: "Enter manager's office number:"
        }
    ])
        .then(({name, id, email, officeNumber})=> {
        let newManager = new Manager(name, id, email, officeNumber)
        employee.push(newManager)
        })
        .catch(err => console.log(err))
}

//function for new engineer questions
let engineerQuestions = () =>{ 
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
        {
        type: 'input',
        name: 'github',
        message: "Enter Github username:"
        }
    ])
        .then(({name, id, email, github})=> {
        let newEngineer = new Engineer(name, id, email, github)
        employee.push(newEngineer)
        })
        .catch(err => console.log(err))
}

//function for new intern questions
let internQuestions = () =>{ 
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
        {
        type: 'input',
        name: 'school',
        message: "Enter intern's school:"
        }
    ])
        .then(({name, id, email, school})=> {
        let newIntern = new Intern(name, id, email, school)
        employee.push(newIntern)
        })
        .catch(err => console.log(err))
}

// let employeeQuestions = () => {    
//     prompt ([
// {
//     type: 'input',
//     name: 'name',
//     message: 'Enter the name of the employee:'
// },
// {
//     type: 'input',
//     name: 'id',
//     message: 'Enter the employee ID:'
// },
// {
//     type: 'input',
//     name: 'email',
//     message: 'Enter the employee email:'
// },
// ])
//     .then(({name, id, email}) => {
//     let newEmployee = new Employee(name, id, email)
//     newEmployee.push(employee)
//     })
//     .catch(err => console.log(err))    
    
//     })
//     .catch(err => console.log(err))
// })
// }









    //manager html appendFile
                
    //             af('./output/team.html', `
    // <div class="col s12 m5">
    //   <div class="card-panel teal">
    //     <span class="white-text">
    //         <h2>Name: ${manager.name}</h2>
    //         <h3><i class="material-icons small">supervisor_account</i>Manager</h3>
    //         Email: ${manager.email}
    //         Office Number: ${manager.officeNumber}
    //     </span>
    //   </div>
    // </div>`)})

// engineer html appendfile
    //                 af('./output/team.html', `
    //                     <div class="col s12 m5">
    //   <div class="card-panel teal">
    //     <span class="white-text">
    //         <h2>Name: ${Engineer.responses.name}</h2>
    //         <h3><i class="material-icons small">account_box</i>Engineer</h3>
    //         Email: ${Engineer.responses.email}
    //         GitHub: ${Engineer.responses.github}
    //     </span>
    //   </div>
    // </div>
    // `)

    //intern html appendfile
    //                 af('./output/team.html', `
    //                 <div class="row">
    //                 <div class="col s12 m5">
    //                   <div class="card-panel teal">
    //                     <span class="white-text">
    //                         <h2>Name: ${Intern.responses.name}</h2>
    //                         <h3><i class="material-icons small">school</i>Intern</h3>
    //                         Email: ${Intern.responses.responses.email}
    //                         School: ${Intern.responses.school}
    //                     </span>
    //                   </div>
    //                 </div>
    //             `, err => {
    // if (err) {
    //     console.log(err)
    // }
//     .then(responses => {
//     af('./output/team.html', `
//     </div>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
// </body>
// </html>
//     `, err => {
//         if (err) {
//             console.log(err)
//         }
//     })
// })
