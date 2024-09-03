import http from "http";

const server = http.createServer((req, res) => {
  //   res.writeHead(202, "GOOD BOY", { "Content-Type": "text/html" });
  // res.write("<h1>hello Node.js</h1>")/
  console.log(req.url);
  if (req.url === "/") {
    res.writeHead(202, "GOOD BOY", { "Content-Type": "text/html" });
    res.end(`<section>
            <h1>home page</h1> 
            <a href='/contact'>contact page</a>
            <a href='/'>Home page</a>
            <a href='/about'>about page</a>
            </section>`);
  } else if (req.url === "/about") {
    res.writeHead(202, "GOOD BOY", { "Content-Type": "text/html" });
    res.end("<h2>About page</h2>");
  } else if (req.url === "/contact") {
    res.writeHead(202, "GOOD BOY", { "Content-Type": "text/html" });
    res.end("<h3>Contact me baby </h3>");
  } else {
    res.writeHead(404, "BAD BRO", { "Content-Type": "text/html" });
    res.end("<h2> 404 page not found :( </h2>");
  }
});

// /homepage
// /about
// /contact

// server port
server.listen(8080, () => console.log("server started 8080....."));
