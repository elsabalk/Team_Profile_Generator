 const inquirer = require('inquirer');
 const Manager = require("./src/Manager");
 const Engineer = require("./src/Engineer");
 const Intern = require("./src/Intern");

// const fs = require('fs');

// const generateMarkdown = require('./utils/generateMarkdown');

// const fileName = 'README.md';

const teamMembers = [];

// Questions
const questions = () => {
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
    ]).then(answers => {
        const managerDetails = new Manager( answers.id, answers.name, answers.email, answers.officeNumber);
        console.log(managerDetails);
        teamMembers.push(managerDetails);
        createATeamMember();

    }).catch((err) => console.error(err));
}


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
    ]).then(answer => {
        const engineerDetails = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engGithubName);
        console.log(engineerDetails);
        teamMembers.push(engineerDetails);
        createATeamMember();
    })
};


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
       
    ]).then(answer => {
        const internDetails = new Intern( answer.internId,answer.internName, answer.internEmail, answer.internSchool);
        console.log(internDetails);
        teamMembers.push(internDetails);
        createATeamMember();
    })
};














function createATeamMember() {
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
        
        }
    })
}




// Function to initialize app
function init() {
    questions();
}


// Function call to initialize app
init();
