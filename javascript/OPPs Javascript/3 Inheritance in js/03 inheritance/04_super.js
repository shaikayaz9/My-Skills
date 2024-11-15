class person {
    constructor(name) {
      this.species = "homo sapiens";
      this.name = name;
    }
    eat() {
      console.log("eat");
    }
  }
  
  class Employee extends person {
      constructor(name){
          super(name); // to invoke parent class constructor
      }
    work() {
      console.log("solve problem  working person");
    }
  }
  
  let ayazobg = new Employee("Ayaz");
  console.log("ayazobg :", ayazobg);
  