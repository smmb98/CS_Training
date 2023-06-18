// Classes are an essential part of object-oriented programming (OOP) and serve as
// blueprints for creating objects. They provide a way to define custom data types,
// encapsulate data and behavior, and create multiple instances of the same type.

// Let's dive into the different aspects of TypeScript classes and instances:

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Custom Data Types: Classes allow you to define your own custom data types
// by encapsulating related data and behavior into a single entity.
// This abstraction helps in organizing and structuring your code.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Instances: An instance is a specific occurrence or realization of a class.
// It is created using the new keyword, which invokes the class constructor.
// Each instance has its own set of properties and can execute methods defined in the class.

// Instances as Non-Primitive Data Instances are non-primitive data types in TypeScript.
// This means they can store and represent complex data structures and behavior,
// unlike primitive data types(e.g., numbers, strings) that hold simple values.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Constructors: A constructor is a special method within a class that is automatically
// called when creating a new instance.It is responsible for initializing the object's
// state and defining initial values for its properties.

// Here's an example of a class with a constructor:

class Persons {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
// In this example, the Person class has two properties: name and age.
// The constructor takes two parameters, name and age, and assigns their values
// to the respective properties of the instance being created.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Destructors: In TypeScript, there is no explicit destructor concept.
// Instead, the garbage collector automatically handles memory management by
// freeing resources when they are no longer in use.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Properties: Properties are variables associated with a class.
// They define the state of an object and allow you to store and access data.
// Class properties can have different access modifiers like public, private, or protected,
// which control their visibility and accessibility.

// Here's an example of a class with properties:

class Circle {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  get circumference(): number {
    return 2 * Math.PI * this.radius;
  }
}
// In this example, the Circle class has a private radius property,
// which can only be accessed within the class.
// The circumference property is a getter that calculates and returns the
// circumference of the circle based on its radius.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// "this" keyword: this keyword refers to the current instance of a class or
// object within class methods or member functions.It allows you to access
// and manipulate the properties and methods of the current object.
// Let's explore the usage of this with code examples, discuss its importance,
// use cases, and pros and cons.

// Code Example:

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person = new Person("John");
person.greet(); // Output: Hello, my name is John.

// Explanation:
// In the above example, we define a Person class with a name property
// and a greet method.The greet method uses the this keyword to access the
// name property of the current object and logs a greeting message.

// Importance of this in Classes:

// Referencing Object State: The this keyword allows you to refer to the properties
// and methods of the current object.It enables you to access and manipulate
// the object's state within its own methods.

// Method Chaining: By using this in class methods, you can chain method calls
// on the same object, which can lead to more concise and readable code.

// Dynamic Context: The value of this is dynamically determined at runtime
// based on how the method is invoked.It provides flexibility in terms of
// which object is the context for method execution.

// Use Cases of this in Classes:

// Accessing Object Properties: The this keyword is commonly used to access
// and modify the properties of the current object within class methods.

// Event Handlers: In scenarios where class methods serve as event handlers,
// this is used to reference the object that triggered the event.
// It allows you to interact with the relevant object's properties and behavior.

// Method Chaining: When designing fluent interfaces or APIs that support
// method chaining, this enables sequential method calls on the same object,
// enhancing readability and expressiveness.

// Pros of this in Classes:

// Object State Access: The this keyword enables easy access to the current
// object's properties and methods, promoting encapsulation and code organization.

// Method Flexibility: The dynamic nature of this allows methods to be reused
// and called in different object contexts, offering flexibility and extensibility.

// Cons of this in Classes:

// Context Confusion: The behavior of this can be confusing, especially when
// dealing with nested functions or callback functions that have their own context.
// It requires careful understanding and handling to avoid unexpected results.

// Lexical Scope Limitations: TypeScript arrow functions (() => {}) provide
// lexical scoping, which means they don't have their own this context.
// In such cases, this may refer to the enclosing scope, which can lead to
// unexpected behavior if not handled correctly.

// It's important to understand the usage of this in classes to effectively
// work with object - oriented code in TypeScript.Proper usage of this ensures
// correct access to object properties and methods, enabling clean and reusable code.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Static Members: Static members belong to the class itself, rather
// than instances of the class. They are accessible without creating an
// instance and are useful for defining utility methods or properties that
// are not tied to a specific instance.

// Here's an example of a class with a static method:

class MathUtils {
  static multiply(a: number, b: number): number {
    return a * b;
  }
}
// In this example, the multiply method of the MathUtils class is
// declared as static.You can directly call it using the class name,
// without creating an instance of the class.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Methods: Methods are functions defined within a class. They represent the behavior
// of the objects created from the class. These methods can access and modify the
// object's properties.

// Here's an example of a class with methods:

class Counter {
  private count: number;

  constructor() {
    this.count = 0;
  }

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  getCount(): number {
    return this.count;
  }
}
// In this example, the Counter class has three methods: increment, decrement,
// and getCount.The increment and decrement methods modify the count property,
// while the getCount method returns its current value.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Use cases for classes and instances:

// Modeling Real-World Entities: Classes are used to represent real-world entities
// as objects.For example, you could have a Car class that encapsulates properties
// and methods related to cars, such as start, stop, or accelerate.

// Code Organization and Reusability: Classes provide a way to organize
// code into logical units and promote reusability.You can define a class once and
// create multiple instances of it, each with its own state.

// Encapsulation and Data Abstraction: Classes allow you to encapsulate related
// data and behavior into a single entity, hiding implementation details and
// exposing only necessary methods and properties.This helps in achieving data
// abstraction and reducing code complexity.

// Inheritance and Polymorphism: Classes support inheritance, enabling you to
// create hierarchies of related classes.Inheritance allows subclasses to inherit
// properties and methods from their parent class, facilitating code reuse and polymorphism.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Overall, classes and instances are fundamental concepts in object-oriented
// programming, providing a powerful way to model, organize, and manipulate data
// in a structured manner.They promote code reusability, maintainability, and
// encapsulation, making your code easier to understand and maintain.
