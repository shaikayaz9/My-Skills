import fs from "fs";

// 6 make folder
fs.mkdir("baba",()=>{
    console.log("folder created..")
})

// create file
fs.writeFile("baba/data.txt", "hi from node.js", () => {
    console.log("file created in baba folder");
  });


// //2 append new dadta into file
fs.appendFile("baba/data.txt", "ph :7587874875", () => {
  console.log("append data...");
});


// // 3 read file data
fs.readFile("baba/data.txt", "utf8", (err, data) => {
  console.log(data);
});

// // 4 Copy file
// // fs.copyFile("msg.txt", "baba.txt",()=>{
// //     console.log("copy....."); 
// // })


// // 5 delete file
// // fs.unlink("msg.txt", ()=>{
// //     console.log("delete the file")
// // })

// // fs.unlink("data.txt", ()=>{
// //     console.log("delete the file")
// // })

