
class toyota{
    start(){
        console.log("Car Started ...")
    }

    Stop(){
        console.log("Car Stoped...")
    }

    brand(brand){
        this.brand = brand;
    }
}

let fortuner = new toyota();
fortuner.brand("fortuner")
let BMW = new toyota();