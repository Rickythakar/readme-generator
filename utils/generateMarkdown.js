// TODO: Create a function that returns a license badge based on which license is passed in
// `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if(license === 'Apache 2.0') {
    return`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if(license === 'GPL 3.0') {
    return`[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
  }
  if(license === 'BSD 3') {
    return`[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
// If there is no license, return an empty string
  if(license === 'None') {
    return`![License]($('license'))`
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge();
  return `# ${data.title}

  ## Project Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions) 
  * [Licensing](#licensing)
  * [Questions](#questions)
  
  ## Installation
  ### Find me on GitHub
  ${data.installation}


  ### Required Dependencies
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## License
  ${data.license}
  ${renderLicenseBadge(data.license)}

  ---
  ## Questions
  ### Please contact me at the email below for any further questions
  ${data.email}

`;
};
module.exports = generateMarkdown;