const prompt = require('inquirer')

const addManager = () => {
    
}

class Member {
    constructor (Name, Email) {
        this.Name = Name
        this.Email = Email
    }
}

class Manager extends Member {
    constructor (Name, Email, GitHub) {
        super(Name, Email)
        this.GitHub = GitHub
    }
}

class Engineer extends Member {
    constructor (Name, Email, GitHub) {
        super(Name, Email)
        this.GitHub = GitHub
    }
}

class Intern extends Member {
    constructor (Name, Email, School) {
        super(Name, Email)
        this.School = School
    }
}

const addEngineer = () => {

}

const addIntern = () => {

}








module.exports = addManager

//to be added at the top when prompted
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Team</title>
//     <!-- Compiled and minified CSS -->
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
//     <!-- Compiled and minified for icons -->
//     <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> 
// </head>


//manager icon name in materialize
//<i class="material-icons small">supervisor_account</i>

//engineer icon name in materialize
// <i class="material-icons small">account_box</i>

//intern icon name in materlialize
//<i class="material-icons small">school</i>


//to be added at bottom of page when all is rendered
// <body>
//     <!-- Compiled and minified JavaScript -->
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
// </body>
// </html>