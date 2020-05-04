const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api");


const questions = [
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub Username : "
    },

    {
        type: "input",
        name: "title",
        message: "What is the title of your ReadMe?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a short description for your project : "
    },

    {
        type: "input",
        name: "installation",
        message: "How should your project be installed?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide usage instructions : "
    },
    {
        type: "rawlist",
        name: "license",
        message: "What type of license will be used?  ",
        choices: ["ISC License", "MIT License", "FreeBSD"]
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to the Project?"
    },
    {
        type: "input",
        name: "badgeLabel",
        message: "What should be on your badge label?"
    }
];
//Function that's called in init to write to readme
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('Your readme has been generated');
    });
}


async function init() {
    //Saving user's answers in variable
    const userAnswers = await inquirer.prompt(questions);
    console.log('______________User Answers___________________')
    console.log(userAnswers);

    //Saving users github response in variable
    const userProfile = await api.getUser(userAnswers.username);
    console.log('______________User Profile ___________________')
    console.log(userProfile);

    //Populating readme with users answers and github info
    const readmeData = generateMarkdown(userProfile, userAnswers);
    writeToFile("README.md", readmeData);
}

init();
