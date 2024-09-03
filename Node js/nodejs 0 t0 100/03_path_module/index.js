import path from "path";
console.log(path.basename("c:\\nodejs\\path-module\\app.js"))
console.log(path.basename("c:\\nodejs\\path-module\\index.js", ".js"))
console.log(path.dirname("c:\\nodejs\\path-module\\index.js"))

//c:\\nodejs\\path-module\\index.js"

console.log(path.extname("c:\\nodejs\\path-module\\index.js"))
console.log(path.join("c:", "ayaz-dev", "cousre", "index.java"))
//go up level

console.log(path.join("c:", "ayaz-dev", "cousre", "index.java", ".."))


console.log(path.parse("c:\\nodejs\\courses\\app.js"))