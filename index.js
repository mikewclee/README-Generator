const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const { async } = require("rxjs/internal/scheduler/async");

// const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "github"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is URL of your project in GitHub?",
            name: "url"
        },
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Please provide a description of your project.",
            name: "description"
        },
        {
            type: "input",
            message: "What packages need to be installed to run your project.",
            name: "installation"
        },
        {
            type: "input",
            message: "What technologies were used to create your project.",
            name: "technology"
        },
        {
            type: "input",
            message: "Please provide an example of how your project can be used.",
            name: "usage"
        },
        {
            type: "list",
            message: "Please select license name?",
            name: "license",
            choices: ["MIT", "APACHE 2.0", "GPL v3", "BSD 3", "None"]
        },
        {
            type: "input",
            message: "Please list all contributors",
            name: "contributer"
        },
        {
            type: "input",
            message: "What command is used to run a test",
            name: "tests",
        }

    ]);
};

function generateReadME(data) {
    const gitHub = `https://img.shields.io/badge/Github-${data.github}-green`;

    return `
    # ${data.title}

    \n![Badge](https://img.shields.io/badge/project-${data.title}-green)
    A command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command:

    '''sh
    node index.js
    '''

    ## Description
      ${data.description}
  
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributors](#contributors)
    - [Tests](#tests)
    - [Questions](#Questions)
  
    ## Installation
    Packages required to run this program are: ${data.installation}
    
    ## Usage
    Examples of how to use this program: ${data.usage}
  
    ![Image Alt Text](/assets/video.gif)

    ## License
    ${data.license}
    
    ## Contributors
    ${data.contributer}
  
    ## Tests
    To test, run the following command: ${data.tests}
  
  
    ## Contact
    \n![Badge](${gitHub}) 
    \n![GitHub profile](https://github.com/${data.github})
    \n![Profile Image](https://github.com/${data.github}.png?size=150)
    \n!Deployed site on GitHub: ${data.url}
    \n!Contact email: ${data.email}.`

}

// write the answers to a new README file
function writetoFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err) {
        if (err) {
            throw err;
        }
        console.log("Successfully created README file");
    });
};

let init = async () => {
    try {
        const userResponse = await promptUser();
        generateReadME(userResponse);
        writetoFile("README.md", generateReadME(userResponse));

    } catch (err) {
        console.log(err);
    }
};

init();
