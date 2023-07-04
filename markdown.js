const generateMarkdown = ({Title, Description, Installation, Usage, Contributing, Tests, Licenses, GitHub, Email}) =>

`
- [Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)

# ${Title}

## Description
${Description}

## Installation
${Installation}

## Usage
${Usage}

## Contributing
${Contributing}

## Tests
${Tests}

## License
${Licenses}

## Questions? Contact me here:

$https://github.com/${GitHub}

${Email}
`

module.exports = generateMarkdown;