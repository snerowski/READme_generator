// Required packages
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a brief description of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please enter installation instructions:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please enter usage information:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please enter contribution guidelines:',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Please enter test instructions:',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'None'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
];

// Function to generate README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log('README file successfully created!');
        }
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            const readmeTemplate = `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This project is licensed under the ${data.license} license.

## Questions
GitHub: https://github.com/${data.github}

For any additional questions, please contact me at ${data.email}.
`
            writeToFile('README.md', readmeTemplate);
        });
}

// Initialize app
init();
