// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


  if('license' === ' ') {
    return`[![License](https)]`
  }

  if('license' === ' ') {
    return`[![License](https)]`
  }

  if('license' === ' ') {
    return`[![License](https)]`
  }

  if('license' === ' ') {
    return`[![License](https)]`
  }
  if('license' === ' '){
    return('none')
  }
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ##Description,
  ${data.description}
  ##Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [License](#license)
  * 
  * 
  * 
  * 
`;
};

module.exports = generateMarkdown;