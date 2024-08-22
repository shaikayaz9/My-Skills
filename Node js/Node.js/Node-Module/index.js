// MODULE in NODE.JS (1)

// const add = require("./Module");
// console.log("hi", add(5,10));

// (2)method 

// const {add,sub } = require("./Module");
// console.log("hi", add(5,10), sub(5,10));

// (3) Method
const math = require("./Module");
console.log("hi", math.add(5,10), math.sub(5,10));

