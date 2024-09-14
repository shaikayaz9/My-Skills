import express, { json } from "express";
import path from "path";
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

function passwordCheck(req, res, next) {
  const password = req.body["password"];
  if (password === "7979") {
    res.sendFile(path.join(process.cwd(), "./public/secret.html"));
    console.log(true);
  } else {
    console.log(false);
    res.sendFile(path.join(process.cwd(), "./public/log.html"));
  }
  next();
}

app.use(passwordCheck);

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "./public/log.html"));
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
