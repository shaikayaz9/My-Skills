class person {
  constructor() {
    this.species = "homo sapiens";
  }
  eat() {
    console.log("eat");
  }
}

class Employee extends person {
    constructor(branch){
        super(); // to invoke parent class constructor
        this.branch = branch
    }
  work() {
    console.log("solve problem  working person");
  }
}

let ayazobg = new Employee("It Brance from HYD");
console.log("ayazobg :", ayazobg);
