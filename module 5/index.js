import inquirer from 'inquirer';
import fs from 'fs';
import markdown from './utils/generateMarkdown.js';

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.info("Written to file.")
    });
}

const questions = [
    {
        message: 'What is your title?',
        name: 'title',
        type: 'input',
        default: 'Project Title'
    },
    {
        message: 'Please provide a description',
        name: 'description',
        type: 'input',
        default: 'Description'
    },
    {
        message: 'Please provide installation instructions',
        name: 'installation',
        type: 'input',
    },
    {
        message: 'Please provide usage information of the application',
        name: 'usage',
        type: 'input',
    },
    {
        message: 'Please provide contribution guidelines',
        name: 'contribution',
        type: 'input',
    },
    {
        message: 'Please provide test instructions',
        name: 'tests',
        type: 'input',
    },
    {
        message: 'What license would you like?',
        name: 'license',
        type: 'list',
        choices: [
            {
                name: 'MIT',
                value: "mit"
            },
            {
                name: 'Apache 2.0 License',
                value: "apache"
            },
        ]
    },
    {
        message: 'Please enter your github name',
        name: 'gitHubName',
        type: 'input',
    },
    {
        message: 'Please enter your email address',
        name: 'email',
        type: 'input',
    },
];


// TODO: Create a function to initialize app
function init(questions) {

    inquirer.prompt(questions)
    .then((data) => {

        const myFileContent = markdown.generateMarkdown(data)
        writeToFile(`README.md`, myFileContent);
    })
    .catch(console.error); // using a named function as a callback

}

// Function call to initialize app
init(questions);
