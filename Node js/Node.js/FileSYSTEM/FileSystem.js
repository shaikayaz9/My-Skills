const fs = require("fs");

// sync... writefile (blocking ... )
let a = fs.writeFileSync("contact.txt","\n name:ayaz shaik \nage:21");
console.log(a)


// async...  write file (non-blocking....)
fs.writeFile("./text.txt","its node js",()=>{
    console.log("file was created");
});


// sync read file 
// if you want to use it then, u want to store the data in new veriable.
// use (utf8) for understand to node , our data is String formet.

// let a = fs.readFileSync("contact.txt", "utf8");
// console.log(a);


// readfile 
// async readFile need a callback for finding error.
fs.readFile("contact.txt","utf8",(err,data)=>{
    console.log(data);
})

//append file

fs.appendFile("contact.txt","\nnumber :98989 89899",()=>{
    console.log("append data to contact");
    //run 5 times .
});


// copy the file with new name.
fs.copyFile("contact.txt", "copy.txt",()=>{
    console.log("copying data...");
    
})


// delete file (test.txt)
//run after all code
// fs.unlink("text.txt",()=>{
//     console.log("file was Delete");
    
// })

const os = require("os");

console.log(os.cpus().length);
