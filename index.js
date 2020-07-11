const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const { async } = require("rxjs/internal/scheduler/async");

const writeFileAsync = util.promisify(fs.writeFile);

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
    const profilePic = `https://github.com/${data.username}.png?size=50`;
    const gitHub = `https://img.shields.io/badge/Github-${data.username}-green`;
  
    return `
    # ${data.title} 
    
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
  
    ## License
    ${data.license}
    
    ## Contributors
    ${data.contributer}
  
    ## Tests
    To test, run the following command: ${data.tests}
  
  
    ## Contact
    \n![Badge](${gitHub}) 
    \n![Profile Image](${profilePic})
    \nView the project in GitHub at: ${data.url}
    \nIf you have any questions, contact the author directly at ${data.email}.`
     
  }

// write the answers to a new README file
function writetoFile(fileName, data) {
    // const writetoFile = (filename, data) => {
    fs.writeFile(fileName, data, "utf8", function (err) {
      if (err) {
        throw err;
      }
      console.log("You have successfully written your README file");
    });
  };
  
  // write the answers to a new README file
  
  async function init() {
    // let init = async() => {
    try {
      const userResponse = await promptUser();
      generateReadME(userResponse);
      writetoFile("README.md", generateReadME(userResponse));
  
      } catch (err) {
        console.log(err);
      }
  };
  
  init();
  