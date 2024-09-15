import express from "express";

const app = express();
const port = 3000;

let bowl = ["apple","banana", "pears","kiwi"];

app.get("/", (req, res) => {
  res.render("index.ejs",{frut: bowl});
});

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
