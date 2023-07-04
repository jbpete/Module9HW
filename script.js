const inquirer = require('inquirer')
const fs = require('fs')
const createMarkdown = require('./markdown')





function loadApp() {
    console.log('Answer the questions to create the readme file for your project')
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'Title',
        },
        {
            type: 'input',
            message: 'What is a description of your project?',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'How do you install your project?',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'What is the usage information of your project?',
            name: 'Usage',
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines of your project?',
            name: 'Contributing',
        },
        {
            type: 'input',
            message: 'How do you test your project?',
            name: 'Tests',
        },
        {
            type: 'list',
            message: 'Select which license you project falls under',
            name: 'Licenses',
            choices: ['MIT', 'Mozilla Public License 2.0', 'GNU v3.0']
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'GitHub',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'Email',
        }
    ])
    .then((response) => {
    
    const readMeContent = createMarkdown(response)

    fs.writeFile("README.md", readMeContent, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
    });
}

loadApp()