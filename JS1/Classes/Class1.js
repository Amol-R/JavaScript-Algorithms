//    Class :=>  a class is a another way of creating objects
                //  It allows you to define properties and methods that multiple objects can share.

// classes are a template for creating objects => it have properties and methods

// class name must start with an uppercase
// class have fildes/veriables, constructor function and methods
// class can extend another class for inheriting properties and methods

//Inheritance in JavaScript
// Inheritance is a fundamental concept in object-oriented programming (OOP) that allows 
// one class (child) to inherit properties and methods from another class (parent). 
// This promotes code reuse and maintainability.

// In JavaScript, inheritance is implemented using the "extends" keyword. 
// It allows a subclass to derive from a superclass and inherit its behavior.

// A constructor can use the 'super' keyword to call the constructor of the super class

//////// A constructor in JavaScript is a special method inside a class 
// that initializes object properties when an instance of the class is created. 
// It runs automatically when the new keyword is used.

// The constructor is automatically called when a new object is created using new.
// It initializes object properties (this.name and this.age in this example).
// A class can have only one constructor method. If you define multiple, an error occurs.

class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Calls the parent class constructor
      this.breed = breed;
    }
  }
  
  const myDog = new Dog("Buddy", "Golden Retriever");
  console.log(myDog.name);  // Buddy
  console.log(myDog.breed); // Golden Retriever
  