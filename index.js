const inquirer = require('inquirer');
const fs = require('fs');
const { log } = require('console');
const { resolve } = require('path');

let ProjectTitle = ''
let githubUserName = ''

function writeReadmeTemplate (Project, Username){
    let ProjectTitle = Project
    let githubUserName = Username
    
    const template = `# ${ProjectTitle}
        A brief description of what this project does and who it's for
        ## Authors
           - [@${githubUserName}](https://www.github.com/${githubUserName})
        ## Usage/Examples
        ## Features
        ## API Reference
           | Parameter | Type     | Description                |
           | :-------- | :------- | :------------------------- |
           | api_key | string | **Required**. Your API key |
        ## Demo
           Insert gif or link to demo
        ## License
           [MIT](https://choosealicense.com/licenses/mit/)`;

    fs.writeFileSync('testreadme.md',template)

}






inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of the Project?',
            name: 'name',
            
        },
        {
            type: 'input',
            message: 'What is your Github Username?',
            name: 'Username',
            default: 'Sergrojas29'
        },
        {
            type: 'checkbox',
            name: 'sections',
            message: 'What Section do you want to add ("a" to select all)',
            choices: ['test', 'this' , 'is',]
        },
    ])
    .then((response) =>{
        console.log(response.sections);
        writeReadmeTemplate(response.name, response.Username,)

    }
    )
    

