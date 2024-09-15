import express from "express";
const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/log", (req, res) => {
  const {name} = req.body;
  console.log(`${name}, Thanks For Submit`);
  res.send(`<h1>${name}, Thanks For Submit</h1>`);
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.listen(port, () => {
  console.log(`server started at ${port}`);
});
