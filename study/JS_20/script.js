// OOP in JavaScript

// 1. Classes and Objects

// Define a class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Create an object (instance of Animal)
const dog = new Animal('Dog');
dog.speak(); // Output: Dog makes a noise.

// 2. Inheritance

// Define a class that extends another class
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the constructor of the parent class
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Create an instance of Dog
const myDog = new Dog('Rex', 'German Shepherd');
myDog.speak(); // Output: Rex barks.

// 3. Encapsulation

// Define a class with private fields
class Person {
    #age; // Private field

    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    getAge() {
        return this.#age;
    }

    setAge(age) {
        if (age > 0) {
            this.#age = age;
        } else {
            console.log('Age must be positive.');
        }
    }
}

// Create an instance of Person
const person = new Person('Alice', 30);
console.log(person.getAge()); // Output: 30
person.setAge(31);
console.log(person.getAge()); // Output: 31

// 4. Polymorphism

// Define more subclasses
class Cat extends Animal {
    speak() {
        console.log('Cat meows.');
    }
}

// Create an array of Animal instances
const animals = [new Dog('Rex', 'German Shepherd'), new Cat('Whiskers')];

// Iterate over the array and call speak method
animals.forEach(animal => {
    animal.speak(); // Output: Rex barks. Cat meows.
});
