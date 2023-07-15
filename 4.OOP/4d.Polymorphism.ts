// Polymorphism is a key concept in Object-Oriented Programming (OOP) that allows objects
// of different classes to be treated as objects of a common superclass.
// It enables code to be written in a more generic and flexible manner, promoting code reuse
// and extensibility.TypeScript supports both runtime polymorphism(method overriding)
// and compile - time polymorphism(method overloading).Let's explore polymorphism in
// TypeScript with code examples, discuss its importance, use cases, pros and cons.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Runtime Polymorphism (Method Overriding):
// Runtime polymorphism occurs when a subclass provides its own implementation of a method defined
// in its superclass.It allows objects of different classes to be treated uniformly based on their
// shared interface or base class. Method overriding is a form of runtime polymorphism.

// Code Example:

class Shape {
  protected color: string;

  constructor(color: string) {
    this.color = color;
  }

  getInfo(): string {
    return `This shape is ${this.color}.`;
  }
}

class Circle extends Shape {
  private radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  getInfo(): string {
    return `${super.getInfo()} It is a circle with a radius of ${
      this.radius
    } units.`;
  }
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(color: string, width: number, height: number) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getInfo(): string {
    return `${super.getInfo()} It is a rectangle with width ${
      this.width
    } units and height ${this.height} units.`;
  }
}

const circle = new Circle("red", 5);
const rectangle = new Rectangle("blue", 8, 4);

console.log(circle.getInfo()); // Output: This shape is red. It is a circle with a radius of 5 units.
console.log(rectangle.getInfo()); // Output: This shape is blue. It is a rectangle with width 8 units and height 4 units.

// Explanation:
// In the above example, we have a Shape base class with a color property and an getInfo() method
// that provides general information about the shape.The Circle and Rectangle classes extend Shape
// and override the getInfo() method with their specific implementation.
// When calling getInfo() on objects of Circle and Rectangle, the overridden method in
// each respective class is executed.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Importance of Runtime Polymorphism:

// Code Flexibility: Runtime polymorphism allows objects of different classes to be treated
// uniformly based on their shared base class or interface.This promotes code flexibility,
// as you can write code that operates on the base class/interface without being concerned
// about specific implementations.

// Code Extensibility: Runtime polymorphism enables adding new classes and behaviors without
// modifying existing code.You can create new subclasses that inherit from a common base class
// and override methods to provide specialized behavior.

// Code Reusability: By using runtime polymorphism, you can write reusable code that can work
// with objects of different classes as long as they adhere to a common interface.
// This promotes code reusability and reduces duplication.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Use Cases of Runtime Polymorphism:

// Framework Development: Frameworks often define abstract base classes or interfaces,
// allowing users to create their own concrete implementations.The framework can work
// with these implementations uniformly, enabling extensibility and customization.

// Plugin Architecture: Runtime polymorphism is useful in plugin architectures,
// where different plugins can provide their own implementations of methods defined
// in a common interface.This allows the system to dynamically load and utilize plugins
// based on their implementations.

// Code Modularization: Runtime polymorphism facilitates code modularization by defining
// base classes or interfaces that represent common behaviors.Derived classes can provide
// specialized implementations while adhering to the common interface, making the code more
// organized and modular.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Pros of Runtime Polymorphism:

// Flexibility and Extensibility: Runtime polymorphism allows for flexibility and
// extensibility in code design.New classes can be added without modifying existing code,
// and objects of different classes can be treated uniformly based on their shared interface.

// Code Reusability: Runtime polymorphism promotes code reusability by enabling the
// development of code that operates on a common interface.It reduces duplication
// and improves productivity.

// Simplified Code: Runtime polymorphism simplifies code by abstracting away specific
// implementations and focusing on the common behavior defined by the base class or interface.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Cons of Runtime Polymorphism:

// Performance Overhead: Dynamic dispatch, which occurs in runtime polymorphism, can introduce
// a slight performance overhead compared to static method calls.However, modern language
// implementations optimize dynamic dispatch to minimize this impact.

// Complexity: Runtime polymorphism can introduce complexity, especially in large class hierarchies.
// Understanding the flow of overridden methods and the inheritance structure is important
// to avoid unexpected behaviors.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Compile-Time Polymorphism (Method Overloading):
// Compile-time polymorphism occurs when multiple methods with the same name but different
// parameter types or a different number of parameters are defined in a class.
// Method overloading is a form of compile - time polymorphism.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Code Example:
// Note: TypeScript does not support method overloading with different parameter lists in
// the same class, so the code below will not work, it is only for learning purpose.

// class MathUtils {
//   static add(a: number, b: number): number {
//     return a + b;
//   }

//   static add(a: number, b: number, c: number): number {
//     return a + b + c;
//   }
// }

// console.log(MathUtils.add(2, 3)); // Output: 5
// console.log(MathUtils.add(2, 3, 4)); // Output: 9

// To achieve the desired behavior, you can use optional parameters :
class MathUtils {
  static add(a: number, b: number, c?: number): number {
    if (c !== undefined) {
      return a + b + c;
    }
    return a + b;
  }
}

console.log(MathUtils.add(2, 3)); // Output: 5
console.log(MathUtils.add(2, 3, 4));

// Explanation:
// In the above example, we have a MathUtils class with two overloaded add() methods.
// The first add() method takes two parameters, and the second add() method takes
// three parameters.Depending on the number of arguments passed, the appropriate
// method is invoked.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Importance of Compile-Time Polymorphism:

// Method Overloading: Compile-time polymorphism allows you to define multiple methods
// with the same name but different parameter lists.This improves code readability and
// reduces the need for different method names for similar functionalities.

// Code Clarity: By overloading methods, you can provide multiple ways to invoke the
// same functionality based on different argument combinations.This enhances code clarity
// and expressiveness.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Use Cases of Compile-Time Polymorphism:

// Flexible Method Invocations: Compile-time polymorphism allows for flexible method
// invocations by providing overloaded methods that accept different parameter combinations.
// This accommodates various use cases and provides a clear API.

// Code Reusability: By overloading methods, you can reuse common functionality while
// allowing different argument combinations.This eliminates the need to create separate
// methods for each specific parameter list.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Pros of Compile-Time Polymorphism:

// Code Clarity: Compile-time polymorphism improves code readability by allowing the use of
// the same method name for similar functionalities with different parameter lists.
// This makes the code more expressive and understandable.

// Simplified API: By overloading methods, you can provide a single method name that handles
// different argument combinations, simplifying the API and reducing the number of method
// names required.

// Cons of Compile-Time Polymorphism:

// Ambiguity: If the overloaded methods have similar parameter types or if the parameter
// types can be implicitly converted, it can lead to ambiguity in method resolution.
// Care should be taken to ensure that the overloaded methods are unambiguous and do
// not confuse the compiler.

// Complexity: Overloading methods can increase the complexity of the codebase,
// especially when dealing with a large number of overloaded methods.
// Understanding the specific method being invoked based on the arguments passed
// requires careful consideration.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Difference between Runtime Polymorphism and Compile-Time Polymorphism:

// Time of Resolution: Runtime polymorphism is resolved at runtime based on the actual
// type of the object, while compile - time polymorphism is resolved at compile - time based
// on the number and type of arguments.

// Inheritance vs. Method Overloading: Runtime polymorphism is achieved through inheritance,
// where a subclass overrides a method of its superclass.
// Compile - time polymorphism is achieved through method overloading,
// where multiple methods with the same name but different parameters are defined within a class.

// Dynamic vs. Static Binding: Runtime polymorphism involves dynamic binding, where the appropriate
// method implementation is determined at runtime based on the object's type.
// Compile - time polymorphism involves static binding, where the appropriate method
// implementation is determined at compile - time based on the method signature.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// In summary, polymorphism is a powerful concept in OOP that promotes code flexibility,
// extensibility, and code reuse.Runtime polymorphism allows objects of different classes
// to be treated uniformly based on their shared interface or base class. Method overriding
// enables runtime polymorphism.Compile - time polymorphism, achieved through method overloading,
// allows multiple methods with the same name but different parameters to be defined within a class,
// providing different ways to invoke the same functionality.Both forms of polymorphism have their
// importance and use cases, allowing developers to write more flexible and expressive code.
