//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// Array of questions 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        // return if they leave this part blank
        
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please write a short project description',

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is ',

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is ',

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is ',

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is ',

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is ',

    },
];

//create a variable to grab answers from array

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