function generateMarkdown(data) {

  return `
  # ${data.title}

  ![Badge](https://img.shields.io/badge/project-${data.title}-green)
      
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

  ![Image Alt Text](/assets/video.webm)

  ## License
  ${data.license}

  ## Contributors
  ${data.contributer}

  ## Tests
  To test, run the following command: ${data.tests}


  ## Contact
  \n![Badge](https://img.shields.io/badge/Github-${data.github}-green) 
  \n![GitHub profile](https://github.com/${data.github})
  \n![Profile Image](https://github.com/${data.github}.png?size=150)
  \nGitHub Project link: ${data.url}
  \nContact email: ${data.email}
  `

}

module.exports = generateMarkdown;
