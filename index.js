const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const { async } = require("rxjs/internal/scheduler/async");

const writeFileAsync = util.promisify(fs.writeFile);

// function promptUser() {
    let promptUser = () => {
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

async function init() {
    try {
        const userResponse = await promptUser();
        await writeFileAsync("README.md", generateMarkdown(userResponse));
        console.log("Successfully created README file");

    } catch (err) {
        console.log(err);
    }
};

init();
