// Encapsulation is a fundamental concept in Object-Oriented Programming (OOP) that
// involves bundling data and methods within a class and controlling access to them.
// It allows you to hide internal implementation details and expose a
// well - defined interface for interacting with objects. In TypeScript,
// encapsulation is achieved through the use of access modifiers and
// getter / setter methods.Let's explore encapsulation in TypeScript with code examples,
// discuss its importance, use cases, pros and cons.

// Code Example:

class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(age: number): void {
    this.age = age;
  }
}

const person = new Person("John", 25);
console.log(person.getName()); // Output: John
person.setName("Jane");
console.log(person.getName()); // Output: Jane

// Explanation:
// In the above example, we have a Person class with private name and age properties.
// The class provides public getter and setter methods(getName(), setName(), getAge(),
// setAge()) to access and modify these private properties.By encapsulating the
// properties and exposing them through methods, we control the access and
// manipulation of the object's data.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Importance of Encapsulation:

// Data Protection: Encapsulation helps protect data integrity by preventing direct access
// to the internal state of an object.By making properties private or using access modifiers,
// we ensure that data can only be accessed or modified through controlled methods.

// Abstraction and Information Hiding: Encapsulation allows for abstraction, where the
// internal implementation details of a class are hidden.It provides a well - defined
// interface that exposes essential functionality while hiding unnecessary complexities.

// Code Maintainability: Encapsulation promotes code maintainability by encapsulating
// related data and behavior within a class. It reduces the impact of changes in the
// internal implementation, as the interface remains consistent for external code.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Use Cases of Encapsulation:

// Class Libraries: Encapsulation is essential in class libraries and APIs, where
// the internal implementation details should be hidden from users.By encapsulating
// data and methods, libraries can provide a clean and consistent interface for
// external consumption.

// Security and Access Control: Encapsulation helps in enforcing security and access
// control by defining the appropriate access modifiers for properties and methods.
// Sensitive data or critical operations can be encapsulated and restricted to
// authorized code.

// Information Hiding: Encapsulation facilitates information hiding, allowing developers
// to expose only the necessary information to other parts of the codebase. It helps
// manage complexity and reduces dependencies on implementation details.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Pros of Encapsulation:

// Data Protection: Encapsulation prevents direct access to internal data, maintaining
// data integrity and ensuring proper validation and manipulation of data.

// Code Maintainability: Encapsulation reduces the impact of changes in the internal
// implementation by providing a stable interface.It improves code maintainability
// and modularity.

// Abstraction and Information Hiding: Encapsulation promotes abstraction and
// information hiding, allowing developers to work with simplified interfaces and
// shield complexity from external code.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Cons of Encapsulation:

// Indirection: Encapsulation can introduce some indirection, as accessing data
// requires invoking getter and setter methods instead of direct property access.
// This can add a slight performance overhead.

// Increased Complexity: Proper encapsulation requires careful design and consideration.
// It can add complexity, especially when dealing with complex class hierarchies or
// managing access modifiers.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// In summary, encapsulation is a crucial concept in OOP that promotes data protection,
// abstraction, and code maintainability.By encapsulating data and methods within a class
// and controlling access through getters and setters, we ensure proper data manipulation
// and hide internal implementation details.Encapsulation is vital in creating robust and
// maintainable code, especially in scenarios where security, information hiding, and code
// reuse are important considerations.
