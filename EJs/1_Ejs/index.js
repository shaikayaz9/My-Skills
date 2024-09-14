import express from "express";

const app = express();
const port = 3000;

const toDay = new Date(2020,12,12); //2020,12,12
let day = toDay.getDay();
console.log(day);

let dayt = "A  week day";
let avg = "its time to work hard";

if (day == 6 || day == 0) {
  dayt = "A  weekend";
  avg = "its time to have fun buddy";
}

app.get("/", (req, res) => {
  res.render("index.ejs", {
    daytype: dayt,
    advise: avg,
  });
});

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
