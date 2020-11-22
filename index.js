const fs = require('fs');
const inquirer= require('inquirer');
const path= require('path');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'gitName',
        message: "What's your Github username?",
    },
    
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address'
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your application?'
    },
    
    {
        type: 'input',
        name: 'description',
        message: 'How do you describe this application?'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What are the uses for your application?'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the application?'
    },

    {
        type: 'input',
        name: 'contribute',
        message: 'What are the contributions?'
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Type out test runs: '
    },

    {
        type: 'list',
        name: 'license',
        message: 'Select one of the type of licenses: ',
        choices: ['GNU GPLv2', 'GNU GPLv3', 'Apache', 'MIT', 'ISC']
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((replies) => {
        writeToFile('createReadMe.md', generateMarkdown({...replies}))
    });
}

// function call to initialize program
init();
