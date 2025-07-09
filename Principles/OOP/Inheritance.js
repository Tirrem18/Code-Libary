// Inheritance

// Inheritance allows a class (child) to acquire properties and methods from another class (parent).
// This promotes code reuse and creates a logical relationship between classes.

// Inheritance Example: Vehicle and Car

class Vehicle {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }

    start() {
        console.log(`${this.brand} vehicle started.`);
    }

    stop() {
        console.log(`${this.brand} vehicle stopped.`);
    }
}

// Car inherits from Vehicle
class Car extends Vehicle {
    constructor(brand, wheels, model) {
        super(brand, wheels); // call the parent constructor
        this.model = model;
    }

    playMusic() {
        console.log(`${this.model} is playing music.`);
    }

    // Overriding the start method
    start() {
        console.log(`${this.model} car is starting`);
    }
}

// Usage
const myCar = new Car("Toyota", 4, "Corolla");

myCar.start();         // Calls overridden method in Car
myCar.playMusic();     // Unique to Car
myCar.stop();          // Inherited from Vehicle
console.log(myCar.brand);  // Inherited property
console.log(myCar.wheels); // Inherited property
console.log(myCar.model);  // Car’s own property
