// PortfolioTask.js

// 1. Accept and display personal information
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your full name: ", (fullName) => {
    rl.question("Enter your Student ID: ", (studentID) => {
        rl.question("Enter your Lab Group Number: ", (labGroup) => {

            // Display personal information
            console.log("\n===== STUDENT PORTFOLIO =====");
            console.log("Full Name: " + fullName);
            console.log("Student ID: " + studentID);
            console.log("Lab Group Number: " + labGroup);

            // 2. Display the current date and time
            const currentDateTime = new Date();
            console.log("\nCurrent Date and Time: " + currentDateTime.toLocaleString());

            // 3. Arrow function to display favourite programming language
            const favouriteLanguage = () => {
                console.log("My favourite programming language is JavaScript.");
            };

            favouriteLanguage();

            // 4. Add together the last four digits of the Student ID
            const lastFourDigits = studentID.slice(-4);

            const uniqueValue = lastFourDigits
                .split("")
                .reduce((total, digit) => total + Number(digit), 0);

            console.log("Last four digits of Student ID: " + lastFourDigits);
            console.log("Unique Value: " + uniqueValue);

            rl.close();
        });
    });
});
