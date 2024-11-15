// Prototypes in javascript

// 1 javascript object is an entity having state and behavior (properties and method)
// 2 js objects have a special property called prototype.
// 3 we can set prototype using  __proto__

// if object & prototype have same method , objects method will be used.


const student = {
    name : "ayaz",
    age:23,
    marks : 98,
    isFollow:true,
    me: function i(){
        console.log("marks :", this.marks)
    }
}
console.log(student)