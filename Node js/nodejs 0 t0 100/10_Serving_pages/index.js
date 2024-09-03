import http from "http";
import fs from "fs";
import { error } from "console";

const server = http.createServer((req, res) => {
    console.log(req.url)
  if (req.url === "/") {
    res.writeHead(200, "ok", {"Content": "text/html"})
    fs.readFile("./public/home.html",(error , data)=>{
        if(error)throw error;
        res.end(data)
    })
  } else if (req.url === "/about") {
    res.writeHead(200, "ok", {"Content": "text/html"})
    fs.readFile("./public/about.html",(error,data)=>{
        if (error)throw error;
        res.end(data)
    })
  } else {
    res.writeHead(404, "bad", {"Content": "text/html"})
    res.end("<h2> 404 Page not found :(  </h2>")
  }
});

server.listen(3000, () =>
  console.log(` server strated at www.localhost:9000/`)
);
