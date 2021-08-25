// Import require lib
const inquirer = require('inquirer');
const fs = require('fs');

// Import classes
const Manager = require("./src/Manager");
const Engineer = require("./src/Engineer");
const Intern = require("./src/Intern");

// Array for team member data to be stored
const teamMembers = [];

// Manager Questions start
const managerQuestions = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team manager\'s ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager\'s email address?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team manager\'s office number?',
        }

    // Call manager class/ constructor which entends Employee and pushes to teamMember array and create team member
    ]).then(answers => {
        const managerDetails = new Manager(answers.id, answers.name, answers.email, answers.officeNumber);
        console.log(managerDetails);
        teamMembers.push(managerDetails);
        createTeamMember(managerDetails);
        updateHtml(managerDetails);

    }).catch((err) => console.error(err));
}

// Engineer question start
function engineerQuestions() {
    inquirer.prompt([{

            type: 'input',
            name: 'engineerName',
            message: 'What is the engineer\'s name?',
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the engineer\'s ID?',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineer\'s email address?',
        },
        {
            type: 'input',
            name: 'engGithubName',
            message: 'What is the engineer\'s Github username?',
        },

    // Call Engineer class/ constructor which entends Employee and pushes to teamMember array and create team member. Update html with user input
]).then(answer => {
        const engineerDetails = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engGithubName);
        console.log(engineerDetails);
        teamMembers.push(engineerDetails);
        createTeamMember();
        updateHtml(engineerDetails);
    })
};


// Intern question start
function InternQuestions() {
    inquirer.prompt([{
            type: 'input',
            name: 'internName',
            message: 'What is the intern\'s name?',
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the intern\'s ID?',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the intern\'s email address?',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the intern\'s school?',
        },

    // Call Intern class/ constructor which entends Employee and pushes to teamMember array and create team member. Update html with user input
    ]).then(answer => {
        internDetails = new Intern(answer.internId, answer.internName, answer.internEmail, answer.internSchool);
        console.log(internDetails);
        teamMembers.push(internDetails);
        createTeamMember();
        updateHtml(internDetails);
    })
};

// Create Team member based on team role and wrap up html
function createTeamMember() {
    inquirer.prompt([{
        type: 'checkbox',
        message: 'What type of team member would you like to add?',
        name: 'teamRole',
        choices: [
            'Engineer',
            'Intern',
            'I don\'t want to add any more team members'
        ],
    }]).then(answers => {

        if (answers.teamRole == "Engineer") {
            engineerQuestions();
        } else if (answers.teamRole == "Intern") {
            InternQuestions();
        } else {

            finalizeHtml();

        }
    })
}


// Start html to be inline with more of a OOP model
function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
         <link rel="stylesheet" href="./assets/css/custom.css">
        <title>Team Profile</title>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
            <h1 class="col-12 jumbotron jumbotron-fluid bg-success text-center">Team Profile</h1>
            </div>
        </div>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./output/TeamProfile.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

// Update html based on param class/ constructor
function updateHtml(teamMember) {
    return new Promise(function(resolve, reject) {
        const name = teamMember.getByName();
        const role = teamMember.title;
        const id = teamMember.getById();
        const email = teamMember.getByEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = teamMember.getGithubUsername();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item" >Email: <a href="mailto:">${email}</a></li>
                <li class="list-group-item" >GitHub: <a href="${gitHub}" target="_blank">${gitHub}</a></li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = teamMember.getSchoolName();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-title text-center">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item" >Email: <a href = "mailto:">${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officePhone = teamMember.getByOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-title text-center">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item" >Email: <a href = "mailto:">${email}</a></li>
                <li class="list-group-item">Office Phone:<a href = "tel:">${officePhone}</a></li>

            </ul>
            </div>
        </div>`
        }
        console.log("adding team member");
        fs.appendFile("./output/TeamProfile.html", data, function(err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}


// Wrap up html structure
function finalizeHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./output/TeamProfile.html", html, function(err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}


// Function to initialize app and start html
function init() {
    managerQuestions();
    startHtml();
}


// Function call to initialize app
init();