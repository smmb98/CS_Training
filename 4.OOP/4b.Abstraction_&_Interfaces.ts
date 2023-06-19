// Abstraction and interfaces are two important concepts in Object-Oriented Programming (OOP)
// that promote code organization, modularity, and flexibility.While they have similarities,
// they serve distinct purposes.Let's explore abstraction and interfaces in TypeScript with
// code examples, discuss their importance, use cases, pros and cons, and highlight their differences.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Abstraction:
// Abstraction is a concept that allows you to represent complex real-world entities or systems
// in a simplified and generalized manner.It involves hiding unnecessary details and exposing
// only the essential features and behavior.In TypeScript, abstraction is typically achieved 
// through abstract classes.

// Code Example:

abstract class Animals {
  protected Name: string;

  constructor(Name: string) {
    this.Name = Name;
  }

  abstract makeSounds(): void;
}

class Dog1 extends Animals {
  makeSounds(): void {
    console.log(`${this.Name} barks!`);
  }
}

const dog1 = new Dog1("Buddy");
dog1.makeSounds(); // Output: Buddy barks!

// Explanation:
// In the above example, we define an abstract class Animal that represents a generic animal.
// It has an abstract method makeSound() that must be implemented by any derived class.
// The Dog class extends Animal and provides an implementation for the makeSound() method.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Importance of Abstraction:

// Code Organization: Abstraction helps in organizing code by providing a high-level,
// generalized representation of entities.It allows you to focus on essential features
// while hiding implementation details.

// Simplification: Abstraction simplifies complex systems or entities by providing a
// clean and concise interface.It reduces cognitive load and makes code more understandable
// and maintainable.

// Flexibility: Abstraction promotes flexibility by allowing different implementations
// of the abstract class. Derived classes can provide specific implementations while
// adhering to the common interface defined by the abstract class.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Use Cases of Abstraction:

// Frameworks and Libraries: Abstraction is commonly used in the development of frameworks
// and libraries, where abstract classes provide a foundation for users to build upon.
// Users can extend abstract classes to implement specific behavior while leveraging
// common functionality.

// Modular Design: Abstraction is useful for breaking down complex systems into modular components.
// Each component can have an abstract class that defines a common interface, allowing for
// interchangeable implementations.

// Plugin Architecture: Abstraction is employed in plugin architectures, where abstract classes
// define hooks or extension points that plugins can implement.This allows for the
// dynamic extension of functionality.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Pros of Abstraction:

// Code Reusability: Abstract classes provide a reusable foundation for derived classes.
// Common behavior can be defined in the abstract class and inherited by multiple derived classes.

// Encapsulation: Abstraction encapsulates implementation details, making code more
// maintainable and resistant to changes in underlying implementations.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Cons of Abstraction:

// Increased Complexity: Abstraction can introduce additional complexity, especially when
// dealing with complex hierarchies and multiple levels of abstraction.It requires careful
// design and understanding to maintain a balance between abstraction and simplicity.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Interfaces:
// Interfaces define a contract or a set of rules that classes must adhere to.
// They specify the structure and behavior that a class should implement.In TypeScript,
// interfaces are used to define the shape of an object.

// Code Example:

interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} barks!`);
  }
}

const dog: Animal = new Dog("Buddy");
dog.makeSound(); // Output: Buddy barks!

// Explanation:
// In the above example, we define an interface Animal that specifies the structure
// of an animal object, including the name property and the makeSound() method.
// The Dog class implements the Animal interface by providing the required properties and methods.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Importance of Interfaces:

// Contract Enforcement: Interfaces ensure that classes implementing them adhere to a
// specific structure and behavior.They define a contract that must be fulfilled, promoting
// consistency and preventing errors.

// Polymorphism: Interfaces enable polymorphism, where objects of different classes that
// implement the same interface can be treated uniformly based on the shared interface.
// This promotes code flexibility and extensibility.

// Code Collaboration: Interfaces facilitate collaboration between developers by providing
// a clear and agreed - upon contract.Interfaces serve as a communication tool, allowing
// different teams or individuals to work independently on implementing specific classes.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Use Cases of Interfaces:

// Dependency Injection: Interfaces are commonly used in dependency injection scenarios.
// By defining interfaces, you can decouple code dependencies and easily swap implementations during runtime.

// API Design: Interfaces play a crucial role in designing APIs. They define the expected
// behavior and structure of objects that are used by external consumers.Interfaces provide
// a clear contract for how the API should be utilized.

// Testing and Mocking: Interfaces simplify testing and mocking by allowing you to define
// mock implementations that conform to the interface.This facilitates unit testing and
// enables the creation of test doubles.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Pros of Interfaces:

// Flexibility and Extensibility: Interfaces promote flexibility in code design by allowing different
// classes to implement the same interface.This enables polymorphism and facilitates the creation
// of interchangeable components.

// Code Collaboration: Interfaces serve as a clear contract between developers, enabling them to work
// independently on different parts of the codebase.Interfaces provide a common understanding and
// facilitate collaboration.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Cons of Interfaces:

// Duplication of Code: If multiple classes implement the same interface, there may be duplication of
// code for implementing the interface's methods across those classes. This can lead to maintenance
// challenges if the interface changes.

// Limited Implementation Details: Interfaces only define the structure and behavior of an object,
// not the implementation details.They do not allow for the inclusion of concrete
// implementation code, which may be desired in certain scenarios.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Differences between Abstraction and Interfaces:

// Purpose: Abstraction focuses on simplifying and generalizing complex systems or entities,
// whereas interfaces define a contract that specifies the structure and behavior of classes.

// Implementation: Abstraction is implemented using abstract classes, while interfaces
// are implemented using TypeScript interfaces.

// Inheritance vs. Contract: Abstraction involves inheritance, where derived classes inherit
// and extend functionality from a base class.Interfaces, on the other hand, define a contract
// that classes must adhere to, without providing any implementation details.

// Code Reusability: Abstraction promotes code reusability through inheritance, while interfaces
// facilitate code collaboration and polymorphism by allowing different classes to implement
// the same interface.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// In summary, abstraction and interfaces are complementary concepts in OOP. Abstraction
// simplifies complex systems, while interfaces define contracts for classes to adhere to.
// They both contribute to code organization, modularity, and flexibility.Abstraction focuses
// on code structure and reuse through inheritance, while interfaces provide a
// contract - based approach for code collaboration and polymorphism.
