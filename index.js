const inquirer = require('inquirer');
const fs = require('fs');
const { log } = require('console');
const { resolve } = require('path');

function writeReadmeTemplate(ProjectTitle, githubUserName, license, userEmail, projectDescription, Usage, installation, Contributing, Tests) {
    const licenses = {
        MIT: {
            url: `[MIT](https://choosealicense.com/licenses/mit/)`,
            badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) '
        },
        BSD: {
            url: `[BSD](https://choosealicense.com/licenses/bsd-2-clause/)`,
            badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause) '
        },
        GPL: {
            url: `[GPL](http://choosealicense.com/licenses/gpl-2.0/)`,
            badge: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
        }
    }

    const template =
`# ${ProjectTitle}

${licenses[license].badge}

${projectDescription}


#Table of Contents

1. [Authors](#authors)

2. [Usage/Examples](#usageexamples)
    
3. [Installation](#installation)
    
4. [Features](#features)
    
5. [API Reference](#api-reference)
    
6. [Demo](#demo)
    
7. [Contributing](#contributing)
    
8. [Tests](#tests)


## Authors
    - [@${githubUserName}](https://www.github.com/${githubUserName})
    
## Usage/Examples

${Usage} 


## Installation

${installation} 

## Features

## API Reference

    
## Demo
Insert gif or link to demo
    
## Contributing

${Contributing} 
    
## Questions

Contact me : 
Github: ${githubUserName}
Email: ${userEmail}
    
## Tests
    
${Tests}

## License

${licenses[license].url}`;

    fs.writeFileSync('GeneratedReadme.md', template)

}






inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of the Project?',
            name: 'title',

        },
        {
            type: 'input',
            message: 'Add description of Project?',
            name: 'description',
            default: 'A brief description'

        },
        {
            type: 'input',
            message: 'What is your Github Username?',
            name: 'Username',
            default: 'Sergrojas29'
        },
        {
            type: 'input',
            message: 'What is your email Username?',
            name: 'Email',
            default: 'Sergrojas29@gmail.com'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What licenses do you want to use   ',
            choices: ['MIT', 'BSD', 'GPL',]
        },

        {
            type: 'input',
            message: 'Add description of Usage?',
            name: 'usage',
            default: 'A brief description'

        },
        {
            type: 'input',
            message: 'Add description of installation?',
            name: 'installation',
            default: 'A brief description'

        },
        {
            type: 'input',
            message: 'Add description of contributing?',
            name: 'contributing',
            default: 'A brief description'

        },
        {
            type: 'input',
            message: 'Add description of tests?',
            name: 'tests',
            default: 'A brief description'

        },

    ])
    .then((response) => {
        console.log(response);
        writeReadmeTemplate(response.title, response.Username, response.license, response.Email, response.description, response.usage, response.installation, response.contributing, response.tests)

    }
    )


