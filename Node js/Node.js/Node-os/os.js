console.log("node.js")
const os = require("os");

//check free memory
console.log(os.freemem());

//check cpu length
console.log(os.cpus().length);

//check up time
console.log(os.uptime());

//check home directory
console.log(os.homedir());

//check device hostname
console.log(os.hostname());