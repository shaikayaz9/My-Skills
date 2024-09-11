import express, { json } from "express";
import path from "path";
const app = express();
const port = 3000;
app.use(express.urlencoded ({extended : true}))
app.use(express.static("./public"))

app.get("/",(req,res)=>{
  res.sendFile(path.join(process.cwd(),"./public/home.html"))
})


app.get("/log",(req,res)=>{
  res.sendFile(path.join(process.cwd(),"./public/log.html"))
})


app.post("/submit", (req,res,next)=>{
  const {name , pass} = req.body
  console.log(req.body)
  res.send(`<h1>${name} : Thanks for Submited your Application </h1><br><br>
    <a href="home.html">Home</a>
    
    `)
  next()
})

app.listen(port, () => {
  console.log(`server started at ${port}`);
});

