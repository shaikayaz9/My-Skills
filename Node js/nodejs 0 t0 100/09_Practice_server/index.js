import http from "http";

const server = http.createServer((req, res) => {
  console.log(req.url)
  if (req.url === "/") {
    res.writeHead(202 , "good Boy", { "Content-type": "text/html" });
    res.end("<h1>hello node.js</h1>");
  } else if (req.url === "/about") {
    res.writeHead(202, "good Boy", { "Content-type": "text/html" });
    res.end("<h2>About page</h2>");
  } else if (req.url === "/contact") {
    res.writeHead(202, "good Boy", { "Content-type": "text/html" });
    res.end("<h2>contact page</h2>");
  } else {
    res.writeHead(404, "Bad Boy", { "Content-type": "text/html" });
    res.end("<h2>404 Page not found :( </h2>");
  }
});

server.listen(9000, () => console.log("server up...."));
