import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.render("index.ejs");
});


app.post("/submit",(req,res)=>{
  const {fname, lname}= req.body
  let str = fname.length + lname.length
  console.log(fname, lname, str)
  res.render("log.ejs",{fname:fname, lname:lname, str:str})

})

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
