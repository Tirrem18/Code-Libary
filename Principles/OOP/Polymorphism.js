// Polymorphism

// Polymorphism means "many forms" – the same method name can behave differently based on the object calling it.
// It allows us to write flexible and reusable code by treating different objects in the same way.

// This usually works through method overriding (in child classes) or shared interfaces.


// Polymorphism Example: Animal and Dog/Cat

class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}

// Usage
const animals = [new Dog(), new Cat(), new Animal()];

animals.forEach(animal => {
    animal.makeSound(); // Each object responds in its own way
});
