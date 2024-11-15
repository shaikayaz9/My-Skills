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

class Admin extends User{
    constructor(name, email){
        super(name, email)
    }
    editData(){
        super.viewData()
    }
}

let student = new User("ayaz","shaikayaz0564@gamil.com")
let student2 = new User("fayaz", "xyz@gmail.com")
let adStudent = new Admin("admin", "hacker@mail")