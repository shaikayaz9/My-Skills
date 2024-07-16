
import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from "path";
import fs from "fs";
import { fileURLToPath } from 'url';
let user = false;

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


function passcheck(req, res, next) {
    const password = req.body["password"];
    if (password == 'aaaa') {
        user = true;
    }
    next();
}

app.use(passcheck);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/in.html")
});




app.post("/login", (req, res) => {
    console.log(req.body);
    if (user) {
        res.sendFile(__dirname + "/secret.html");
        fs.writeFile("log.txt", req.body["password"], () => {
            console.log("created", user)
        })
    } else {
        res.sendFile(__dirname + "/in.html")
    };

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})