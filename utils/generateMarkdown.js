// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
//   if('license' === ' ') {
//     return`[![License](https)]`
//   }
//   if('license' === ' ') {
//     return('none')
//   }
// };
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Project Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions) 
  * [Licensing](#licensing)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ### License(s)
  ${data.license}
`;
};
module.exports = generateMarkdown;