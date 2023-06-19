// Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that
// allows one class to inherit properties and methods from another class.
// TypeScript supports class-based inheritance, where a derived class (subclass)
// can inherit and extend the functionality of a base class (superclass).
// Let's explore inheritance in TypeScript with code examples,
// discuss its importance, use cases, and pros and cons.

// Code Example:

class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  bark(): void {
    console.log(`${this.name} barked!`);
  }
}

const dog = new Dog("Buddy");
dog.move(10); // Output: Buddy moved 10 meters.
dog.bark(); // Output: Buddy barked!

// Explanation:
// In the above example, we have a base class Animal with a constructor that
// initializes the name property and a move method that logs the movement distance
// of an animal.The Dog class extends the Animal class using the extends keyword
// and adds a bark method specific to dogs.The Dog class calls the super keyword
// within its constructor to invoke the parent class constructor.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Importance of Inheritance in OOP:

// Code Reusability: Inheritance allows you to reuse code by inheriting properties and
// methods from a base class. It promotes code reuse, reduces duplication, and improves
// productivity.

// Code Organization: Inheritance helps in organizing code by creating a hierarchy of
// classes that represent different levels of abstraction.It provides a structured way
// to model real - world relationships between entities.

// Polymorphism: Inheritance facilitates polymorphism, where objects of
// different classes can be treated uniformly based on their shared base class.
// This promotes flexibility and extensibility in code design.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Use Cases of Inheritance in OOP:

// Specialization: Inheritance is useful when you want to create specialized classes
// that inherit common behavior and add additional specific behavior.
// For example, in a vehicle hierarchy, you can have base classes like Vehicle,
// Car, and Motorcycle, each inheriting and extending functionality as needed.

// Framework Development: Inheritance is commonly used in framework development to
// provide a base set of features that can be extended or customized by users.
// Frameworks often define abstract base classes that users can inherit from to
// implement their own functionality.

// Code Reusability: Inheritance facilitates reusing code across different parts
// of an application.By defining common behavior in a base class, you can inherit
// and reuse that functionality in multiple derived classes.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Pros of Inheritance in OOP:

// Code Reusability: Inheritance promotes code reuse, reducing duplication and
// improving productivity.Common behavior and properties can be defined in a base
// class and inherited by multiple derived classes.

// Modularity and Organization: Inheritance provides a structured way to organize
// code by creating class hierarchies. It allows you to define shared behavior at
// higher levels and specialized behavior at lower levels.

// Polymorphism: Inheritance enables polymorphism, allowing objects of different
// classes to be treated uniformly based on their shared base class.
// This promotes flexibility and extensibility in code design.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Cons of Inheritance in OOP:

// Inheritance Hierarchy Complexity: Excessive use of inheritance can lead to complex
// class hierarchies, making the code more difficult to understand and maintain.
// Care should be taken to keep the hierarchy simple and avoid deep inheritance chains.

// Inflexible Structure: Inheritance creates a tight coupling between the base class
// and its derived classes. Modifying the base class can have implications for all the
// derived classes, which can limit flexibility and make code changes more challenging.

// Inheritance vs. Composition: In some cases, composition (favoring object composition
// over class inheritance) might be a more suitable approach. Composition allows for more
// flexibility and avoids some of the limitations and complexities associated with inheritance.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Inheritance is a powerful mechanism in OOP that allows for code reuse, organization,
// and flexibility.When used appropriately, it can improve productivity and promote
// clean and maintainable code.However, careful consideration should be given to the
// class hierarchy structure and the potential trade - offs involved.
