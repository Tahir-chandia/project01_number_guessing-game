#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Number Guessing Game");
const randomNumber = Math.floor((Math.random() * 6 + 1));
const answere = await inquirer.prompt([{
        name: "userNumber",
        type: "number",
        message: "Enter your number between 1-6:",
    }]);
if (randomNumber === answere.userNumber) {
    console.log(`Congratulations! "You Won" `);
}
else {
    console.log("You loose");
}
;
console.log("Game over");
