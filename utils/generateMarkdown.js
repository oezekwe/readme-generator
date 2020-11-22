// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
      ${data.description}


  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contribute)
  
  
  ## Installation
      ${data.installation}


  ## Usage
      ${data.usage}


  ## License
      ${data.license}


  ## Contributing
      ${data.contribute}


  ## Tests
      ${data.tests}


  ## Questions
  Github profile: [${data.gitName}](https://github.com/${data.gitName})
  
  Contact: ${data.email}
`;
}

module.exports = generateMarkdown;
