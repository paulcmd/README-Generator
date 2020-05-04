// function generateMarkdown(user, userAnswers) {
//   return `# ${userAnswers.title}
//   ![GitHub repo size](https://img.shields.io/github/repo-size/${userAnswers.username}/${userAnswers.repoName}?style=for-the-badge)
//   ![GitHub code size](https://img.shields.io/github/languages/code-size/${userAnswers.username}/${userAnswers.repoName}?color=gold&style=for-the-badge)
//    ![GitHub language count](https://img.shields.io/github/languages/count/${userAnswers.username}/${userAnswers.repoName}?color=green&style=for-the-badge)
//     ![GitHub top language](https://img.shields.io/github/languages/top/${userAnswers.username}/${userAnswers.repoName}?color=red&style=for-the-badge)
//
// ---
//
// ## Description:
// ${userAnswers.description}
//
// ---
//
//
// ![](${user.avatar_url})
//
// ${user.email}
//
// ## Table of Contents:
// ## Installation
// ${answers.installation}
// ## Usage
// ${answers.usage}
// * [License](#license)
// * [Contributing](#contributing)
// * [Resources](#resources)
// * [Tests](#tests)
// * [Questions](#questions)
//
// ---
//
// ## Installation:
//
// ---
//
// ## Usage:
//
// ---
//
// ## License:
// [MIT License](https://opensource.org/licenses/MIT)
//
// Copyright © ${userAnswers.year} ${userAnswers.owner}
//
//
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
// ---
//
// ## Contributing:
// Contributor Covenant Code of Conduct
// Our Pledge
// We as members, contributors, and leaders pledge to make participation in our
// community a harassment-free experience for everyone, regardless of age, body
// size, visible or invisible disability, ethnicity, sex characteristics, gender
// identity and expression, level of experience, education, socio-economic status,
// nationality, personal appearance, race, religion, or sexual identity
// and orientation.
// We pledge to act and interact in ways that contribute to an open, welcoming,
// diverse, inclusive, and healthy community.
// Our Standards
//
//
// Attribution
// This Code of Conduct is adapted from the Contributor Covenant,
// version 2.0, available at
// https://www.contributor-covenant.org/version/2/0/code_of_conduct.html.
// Community Impact Guidelines were inspired by Mozilla’s code of conduct
// enforcement ladder.
// For answers to common questions about this code of conduct, see the FAQ at
// https://www.contributor-covenant.org/faq. Translations are available at
// https://www.contributor-covenant.org/translations.
//
// ---
//
// ## Resources:
//
// ---
//
// ## Tests:
//
// ---
//
// ## Questions:
// for any questions, please contact:
//
// ![${userAnswers.username}] (${response.data.avatar_url})
//
// __[${userAnswers.username}](https://github.com/${userAnswers.username})__ at ${response.data.email}`;
// }

function generateMarkdown(userProfile, userAnswers) {

  return `
# ${userAnswers.title}  ![badge](https://img.shields.io/static/v1?label=HelloWorld&message=${userAnswers.badgeLabel}&color=green)

![](${userProfile.avatar_url})



## Description 
${userAnswers.description}

---

## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Resources](#resources)
* [Tests](#tests)
* [Questions](#questions)

---

## Installation
${userAnswers.installation}

## Usage
${userAnswers.usage}

## Contributors
${userAnswers.contributors}

${userProfile.email}

## License
ISC License

Copyright (c)  ${userProfile.name}

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

`;
}



module.exports = generateMarkdown;