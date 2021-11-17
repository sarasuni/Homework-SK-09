// Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Created an array of questions for user input
const questions = [];
async function userInput(){
     inquirer.prompt([
        {
            name: 'license',
            message:'choose a licence for this project:',
            type:'list',
            choices:[
                    'Apache License 2.0', 
                    'MIT License', 
                  ,]
                    
        },
        {
            name: 'title',
            message: 'What is the title of this application?',
            type: 'input',
        },
        {
            name:'description',
            message:'what does this applicattion do?',
            type:'input',
        },
        {
            name:'install',
            message:'How do i stall this application?',
            type:'input',
        },
        {
            name:'usage',
            message:'How do i use this application?',
            type:'input',
        },
        {
            name:'username',
            message:'What is your Github username?',
            type:'input',
        },
        {
            name:'email',
            message:'What is your E-mail?',
            type:'input',
        },
       


    ]).then (answer => {
        console.log(answer);
        writeToFile(`README`,generateMarkdown(answer));
    })};


// Created a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`,data,
    (err) => err? console.error(err): console.log(`${fileName}.md has been generated.` ))
}

// Created a function to initialize app
function init() {
    userInput();
    }

// Function call to initialize app
init();
