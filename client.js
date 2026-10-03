const axios = require("axios");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sendNumber(number) {
    axios.post("http://localhost:3000/average", {
        number: number
    })
    .then(response => {
        console.log("Number:", number);
        console.log("Average:", response.data.average);
        askNumber();
    })
    .catch(error => {
        console.log("Error:", error.message);
        askNumber();
    });
}

function askNumber() {
    rl.question("Enter a number: ", (input) => {
        const number = Number(input);

        if (isNaN(number)) {
            console.log("Please enter a valid number.");
            askNumber();
        } else {
            sendNumber(number);
        }
    });
}

askNumber();