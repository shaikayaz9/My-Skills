const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  console.log(`new request..`);
  const log = `${Date.now()}: ${req.url}new request recived\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    res.end("hello from node.js by ayaz");
  });
});

myServer.listen(8000, () => {
  console.log("server started....");
});
