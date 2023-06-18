// Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects,
// which encapsulate data and behavior.TypeScript, being an object - oriented language, supports
// OOP concepts and provides additional static typing features.Let's explore OOP in TypeScript with
// code examples, discuss its importance, use cases, and pros and cons.

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
// In the above example, we define a base class Animal with a constructor that initializes the name property.
// The move method logs the movement distance of an animal.The Dog class extends the Animal class and adds
// a bark method specific to dogs.The Dog class calls the super keyword within its constructor to
// invoke the parent class constructor.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Importance of OOP in TypeScript:

// Modularity: OOP allows breaking code into reusable and independent modules (classes).
// It promotes a modular design, making code easier to understand, maintain, and extend.

// Encapsulation: OOP encapsulates data and behavior within objects, hiding internal details
// and providing a clean interface to interact with.This improves code organization, security,
// and reduces dependencies.

// Inheritance: TypeScript supports class inheritance, allowing classes to inherit properties
// and methods from a parent class. Inheritance promotes code reuse and facilitates creating
// specialized classes from a base class.

// Polymorphism: OOP enables polymorphism, where objects of different classes can be
// treated uniformly based on their shared interfaces or base class.
// This promotes flexibility and extensibility in code design.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Use Cases of OOP in TypeScript:

// Application Development: OOP is beneficial when developing large-scale applications where
// code organization, modularity, and maintainability are essential.It helps in managing
// complex business logic and facilitates collaboration among developers.

// Framework and Library Development: OOP is commonly used in building frameworks and libraries
// to provide reusable and extensible components.It allows users to extend and customize
// functionality through inheritance and polymorphism.

// Game Development: OOP is well-suited for game development as it helps in modeling game entities,
// behaviors, and interactions.It provides an efficient way to manage game objects,
// animations, physics, and game logic.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Pros of OOP in TypeScript:

// Code Reusability: OOP promotes reusable code components through encapsulation, inheritance,
// and polymorphism.This reduces duplication and improves productivity.

// Maintainability: OOP encourages modular and organized code, making it easier to understand
// and maintain.Changes made to one part of the codebase have minimal impact on other parts.

// Flexibility and Extensibility: OOP allows for flexible and extensible code design.
// New features and functionality can be added by creating new classes or extending
// existing ones without modifying the existing codebase.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Cons of OOP in TypeScript:

// Learning Curve: OOP concepts can be complex, especially for beginners.
// Understanding inheritance, polymorphism, and design patterns requires effort and practice.

// Performance Overhead: OOP can introduce performance overhead due to dynamic dispatch and
// indirection caused by inheritance and polymorphism.However, modern programming languages
// and runtime optimizations mitigate these concerns in most cases.

// Potential Overuse: OOP might be overused when not appropriate, leading to unnecessary c
// omplexity and bloated code.It's important to apply OOP principles judiciously based on
// the specific needs of the project.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Overall, OOP in TypeScript provides a powerful way to organize and structure code,
// promote reusability, and improve maintainability.It's important to understand OOP
// concepts and use them effectively to leverage the benefits it offers.
