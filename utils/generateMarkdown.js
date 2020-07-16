function generateMarkdown(data) {

  return `
  # ${data.title}

  ![Badge](https://img.shields.io/badge/project-${data.title}-green)
  ![Badge](https://img.shields.io/badge/Github-${data.installation}-blue) 

  ## Description
  ${data.description}

  ![Image Alt Text](/assets/video.gif)

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
  ${data.usage}

  ## License
  ${data.license}

  ## Contributors
  ${data.contributer}

  ## Tests
  ${data.tests}


  ## Contact
  \n![Badge](https://img.shields.io/badge/Github-${data.github}-green) 
  \nGitHub Username: https://github.com/${data.github}
  \n![Profile Image](https://github.com/${data.github}.png?size=150)
  \nGitHub Project link: ${data.url}
  \nContact email: ${data.email}
  `

}

module.exports = generateMarkdown;
