import http from 'http';

//create our server
const server = http.createServer((req,res)=>{
    console.log(req.url)
    // res.setHeader("Content-Type", "text/html")
    // res.statusCode = 404
    // res.statusMessage = "BAD Connetion"

    // shorthand for status (code , message , & header)
    res.writeHead(404, "bad", {"Content-Type" : "text/html"} )
    res.write("<h1>hello node.js by ayaz</h1>")
})

//listening on port 8000
server.listen(8000, ()=>console.log("server started at 8000"))