// function to generate markdown for README
function generateMarkdown(data) {
  let badge= data.license.replace(/ /g,'_');
  return `# ${data.title} &ensp;&ensp;&ensp;&ensp;![GitHub license](https://img.shields.io/badge/license-${badge}-blue.svg)

  ## Description
      ${data.description}


  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  
  
  ## Installation
      ${data.installation}


  ## Usage
      ${data.usage}


  ## License
      Application is under by the ${data.license} license.


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
