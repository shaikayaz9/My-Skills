// this will allows us to use that function from 
// that ("index.js") file. and we can use it right here.

// Getting that function right here.
const great = require("./index2")
const people = require("./people")
great("ayaz")
great("fayaz")
great("ayan")

console.log(people.user1)
console.log(people.user2)
console.log(people.user3)

great(people.user3)
great(people.user2)
great(people.user1)
// in common js we can use filename & dirname functions
console.log(__filename)
console.log(__dirname)