import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    Second: new Date().getSeconds(),
    items: ["apple", "banana", "kiwi", "jamon"],
    htmlContent: "<em>this is a html em tags </em>",
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
