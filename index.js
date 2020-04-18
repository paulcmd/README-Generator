const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {

    return inquirer.prompt( [
        {

            type: "input",
            name: "title",
            message: "What is the title of your ReadMe?"
        },
        {
            type: "input",
            name: "description",
            message: "Write a description"
        },
        // {
        //     type: "input",
        //     name: "github",
        //     message: "Enter your GitHub Username"
        // },
        // {
        //     type: "input",
        //     name: "linkedin",
        //     message: "Enter your LinkedIn URL."
        // }
    ]);
}


promptUser()
    .then(function (data) {
        const readmeData = generateMarkdown(data);

        return writeFileAsync("ReadMe.md", readmeData);
    })
    .then(function () {
        console.log("Successfully wrote to readme");
    })
    .catch(function (err) {
        console.log(err);
    });


// fs.writeFile("ReadMe.md", generateMarkdown, function (err) {
//     if (err) {
//         throw err;
//     }

  //  console.log(`Saved ${data.title} of the README`);


// });

// function writeToFile(fileName, data) {
// }
//
// async function init() {
//
// }
//
// init();

//module.exports = index;

// 1. get answers from inquirer
// 2. write answers to readme.md file