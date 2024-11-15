class person{
    constructor(){
        this.species = "homo sapiens"
    }
    eat(){
        console.log("eat")
    }

    sleep(){
        console.log("sleep")
    }
}

class Employee extends person{
    work(){
        console.log("solve problem  working person")
    }
}

class Doctor extends Employee{
    work(){
        console.log("at hospital he perform a operation")
    }
}

let ayazobg = new Employee;
console.log("ayazobg :",ayazobg)

let alex = new Doctor;
console.log("alex :",alex)