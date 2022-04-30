//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// Array of questions 
const questions = [
    {
        
            //question1 - project title will apear at top of read me
            type: 'input',
            name: 'title',
            message: 'What is project title?',
        },
        {
            //question2 - description will appear under title
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project?',
        },
        {
        //question3
        type: 'input',
        name: 'installation',
        message: 'What is your GitHub user name?',
    },
    {
        //question4
        type: 'input',
        name: 'email',
        message: 'What is your email address? ',
    },
    {
        //question5
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
          },
    {
        //question6
        type: 'input',
        name: 'install',
        message: 'What command should I run to install dependecies?',
    },
    {
        //question7
        type: 'input',
        name: 'tests',
        message: 'What command should be run for tests?',
    },
    {
        //question8
        type: 'input',
        name: 'usage',
        message: 'What does your user need to know about using the repository?',
    },
    {
        //question9
        type: 'input',
        name: 'contributions',
        message: 'Who contributed to the repo?',
    },
];

//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err)}
    })
};
// Create a function to initialize app
 function init() { 
     inquirer.prompt(questions)
     .then((inquirerResponses) => {
    writeToFile("readMe.md", generateMarkdown({...inquirerResponses}) 
    )}
    )};
// Function call to initialize app
init();