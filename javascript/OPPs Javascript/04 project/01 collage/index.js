class User{
    constructor(name, email){
        console.log("student of my clg")
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(`${this.name} ${this.email}`)
    }
}



let student = new User("ayaz","shaikayaz0564@gamil.com")
console.log(student)

let student2 = new User("fayaz", "xyz@gmail.com")
console.log(student2)