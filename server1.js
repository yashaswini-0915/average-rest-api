const express = require("express");

const app = express();

app.use(express.json());

let numbers = [];

app.post("/average", (req, res) => {
    const { number } = req.body;

    if (typeof number !== "number" || !Number.isFinite(number)) {
        return res.status(400).json({
            error: "Please provide a valid number"
        });
    }

    numbers.push(number);

    const sum = numbers.reduce((total, n) => total + n, 0);
    const average = sum / numbers.length;

    res.json({
        number: number,
        average: average
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});