// In TypeScript, access specifiers are used to control the visibility and accessibility of class members
// (properties and methods) from outside the class. There are three access specifiers available:

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Public: Public members are accessible from anywhere, both within the class and outside the class.

// Code Example:
class MyClass_Public {
  public publicProperty: string;

  public publicMethod(): void {
    // Code here
  }
}

const instance_public = new MyClass_Public();
instance_public.publicProperty = "Hello";
instance_public.publicMethod();

// Use case:
// - Public members are typically used when you want the properties and methods to be accessible and
//   modifiable from anywhere in the codebase.

// Pros:
// - Provides flexibility in accessing and modifying class members.
// - Allows easy integration and usage of class instances.

// Cons:
// - Can lead to less encapsulation and potential misuse if not used carefully.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Private: Private members are only accessible from within the class where they are defined.
//    They cannot be accessed or modified from outside the class.

// Code Example:
class MyClass_Private {
  private privateProperty: string;

  private privateMethod(): void {
    // Code here
  }
}

const instance_private = new MyClass_Private();
instance_private.privateProperty = "Hello"; // Error: 'privateProperty' is private and only accessible within the class 'MyClass'
instance_private.privateMethod(); // Error: 'privateMethod' is private and only accessible within the class 'MyClass'

// Use case:
// - Private members are often used when you want to encapsulate certain properties and
//   methods to ensure they can only be accessed and modified internally within the class.

// Pros:
// - Enhances encapsulation and data hiding, preventing unauthorized access.
// - Allows better control over class behavior and implementation details.

// Cons:
// - May require additional methods or properties to expose the private data if necessary.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Protected: Protected members are similar to private members, but they are also accessible within
//    derived classes(subclasses).

// Code Example:
class ParentClass {
  protected protectedProperty: string;

  protected protectedMethod(): void {
    // Code here
  }
}

class ChildClass extends ParentClass {
  public accessProtected(): void {
    this.protectedProperty = "Hello"; // Accessible from the derived class
    this.protectedMethod(); // Accessible from the derived class
  }
}

const instance_protected = new ParentClass();
instance_protected.protectedProperty = "Hello"; // Error: 'protectedProperty' is protected and only accessible within the class 'ParentClass' and its subclasses
instance_protected.protectedMethod(); // Error: 'protectedMethod' is protected and only accessible within the class 'ParentClass' and its subclasses

// Use case:
// - Protected members are useful when you want to provide access to certain properties and methods to derived
//   classes while still preventing access from outside the class hierarchy.

// Pros:
// - Allows sharing of certain members within a class hierarchy.
// - Enables customization and extension of base classes by derived classes.

// Cons:
// - Can potentially lead to a more complex class hierarchy and harder maintenance if overused.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Default (No Access Specifier): When a class member does not have an access specifier explicitly specified,
//    it defaults to the public access specifier.

// Code Example:
class MyClass {
  public publicProperty: string;
  private privateProperty: string;
  protected protectedProperty: string;
  defaultProperty: string;

  public publicMethod(): void {
    // Code here
  }

  private privateMethod(): void {
    // Code here
  }

  protected protectedMethod(): void {
    // Code here
  }

  defaultMethod(): void {
    // Code here
  }
}

const instance = new MyClass();
instance.publicProperty = "Hello";
instance.privateProperty = "World"; // Error: 'privateProperty' is private and only accessible within the class 'MyClass'
instance.protectedProperty = "Bonjour"; // Error: 'protectedProperty' is protected and only accessible within the class 'MyClass' and its subclasses
instance.defaultProperty = "Hola"; // Accessible because it defaults to public

instance.publicMethod();
instance.privateMethod(); // Error: 'privateMethod' is private and only accessible within the class 'MyClass'
instance.protectedMethod(); // Error: 'protectedMethod' is protected and only accessible within the class 'MyClass' and its subclasses
instance.defaultMethod(); // Accessible because it defaults to public

// Use case:
// - Default(public) members are useful when you want the properties and methods to be accessible
//   from anywhere, both within and outside the class.

// Pros:
// - Provides the same benefits as public members in terms of flexibility and integration.
// - Simplifies the code by not explicitly specifying an access specifier for each member.

// Cons:
// - Similar to public members, there is a potential risk of reduced encapsulation if not used carefully.

// Note: It's worth noting that the default access specifier is different from the absence of an access specifier.
//       If a class member does not have an access specifier and is not explicitly declared as a property or method,
//       it is considered an instance variable rather than a member accessible from outside the class.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// In conclusion, access specifiers in TypeScript provide control over the visibility and accessibility of class members,
// promoting encapsulation and data hiding.The appropriate choice of access specifier depends on the desired level of
// visibility and access for each member, balancing encapsulation and flexibility.
