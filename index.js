// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',

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



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err)}
    })
};


// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();