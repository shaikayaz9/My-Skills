class toyota {
  constructor(brand, milage) {
    console.log("creating constructor");
    this.brand = brand;
    this.milage = milage;
  }

  start() {
    console.log("Car Started ...");
  }

  Stop() {
    console.log("Car Stoped...");
  }
}

let fortuner = new toyota("fortuner", 22); //constructor
console.log(fortuner);

let BMW = new toyota("BMW", 28); //constructor
console.log(BMW);
