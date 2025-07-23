// create an object representing a car with properties like make, model and year .add a method to the car object to start the engine


class car {
    constructor(model,year){
        this.model = model
        this.year = year
    }
    start(){
        console.log(`${this.model} (${this.year}) car started`);
    }
}

let toyotaCar = new car("fortuner",2024)

console.log(toyotaCar);
toyotaCar.start();

// object

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    
    startEngine: function() {
      console.log(`${this.make} ${this.model} engine started!`);
    }
  };
  
  // Call the method
  car.startEngine(); // Output: Toyota Camry engine started!
  

