// Primtive Types
// Primitive types hold data inside their body when assigned
// These are numbers and strings

let a: number = 1; // Number
let b: string = "a"; // String

// When assigning one variable to another, it copies the data of that variable.
// Even if change varB we can see varA still holds varB's old value
let varA: number = 1;
let varB: number = 2;

varA = varB;
varB = 5;
console.log("(Primitive) Value of varA: ", varA);

// Non-Primtive Types
// Non-Primitive types hold memories inside their body when assigned
// These are objects and arrays

let c: Array<number> = [1, 23, 2, 3, 4, 1]; // Number
let d: object = {}; // String

// When assigning one variable to another, it copies the memory of that variable.
// Even if change varD we can see varA also changes its value
let varC: Array<number> = [1, 2, 3, 4, 5];
let varD: Array<number> = [12, 22, 23, 24];

varC = varD;
varD.push(90);
console.log("(Non-Primitive) Value of varC: ", varC);
console.log("(Non-Primitive) Value of varD: ", varD);

// If we re-assign varC with different non-primitive value, it will no longer represent the varD's memory.
// It will hold a new memory pointing to a different location

varC = [9, 8, 7, 6];
console.log("(Non-Primitive) Value of varC: ");
console.log("(Non-Primitive) Value of varD: ");

// Note: Non-Primitive also includes instances and methods etc.

// Question what will be the logged value of varC?
varC = [9, 8, 7, 6];
const functionA = (paramA: Array<number>) => {
  paramA.pop();
  console.log(paramA);
};

functionA(varC);
console.log(varC);

// Question what will be the logged value of varA?
varA = 19;
const functionB = (paramB: number) => {
  paramB = paramB - 9;
  console.log(paramB);
};

functionB(varA);
console.log(varA);

// ########################################################################################################
// ########################################################################################################
// ########################################  AI Generated  ################################################
// ########################################################################################################
// ########################################################################################################
console.log(
  "########################################  AI Generated  ################################################"
);

// Primitive Data Types

// String
const userName: string = "John Doe";

// Number
const age: number = 25;

// Boolean
const isStudent: boolean = true;

// Null
const nullValue: null = null;

// Undefined
let undefinedValue: undefined = undefined;

// Symbol
const id: symbol = Symbol("uniqueId");

// Non-Primitive Data Types

interface PersonObject {
  name: string;
  age: number;
  isStudent: boolean;
}

// Object
const person: PersonObject = {
  name: "Jane Smith",
  age: 30,
  isStudent: false,
};

// Array
const numbers: number[] = [1, 2, 3, 4, 5];

// Function
const greet: () => void = () => {
  console.log("Hello!");
};

// Differences between Primitive and Non-Primitive Data Types

// Mutation
let x: number = 5;
let y: number = x;
x = 10;
console.log(y); // Output: 5 (y is not affected by the change in x)

interface AnObject {
  value: number;
}

let obj1: AnObject = { value: 1 };
let obj2: AnObject = obj1;
obj1.value = 2;
console.log(obj2); // Output: { value: 2 } (obj2 is a reference to obj1)

// Comparison
const str1: string = "Hello";
const str2: string = "Hello";
console.log(str1 === str2); // Output: true (values are compared)

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [1, 2, 3];
console.log(arr1 === arr2); // Output: false (references are compared)

// Memory Allocation
console.log(typeof userName); // Output: string (primitive type)
console.log(typeof person); // Output: object (non-primitive type)

// Usage of Methods
console.log(userName.toUpperCase()); // Output: "JOHN DOE" (string method)
console.log(numbers.length); // Output: 5 (array property)

// Summary
// Primitive types include strings, numbers, booleans, null, undefined, and symbols.
// Non-primitive types include objects, arrays, and functions.
// Primitive types are compared by value, while non-primitive types are compared by reference.
// Primitive types have a fixed memory size, while non-primitive types can vary in size.
// Primitive types have limited methods and properties, while non-primitive types have more extensive built-in methods and properties.

// End of the "primitive_nonPrimitive.ts" file.
