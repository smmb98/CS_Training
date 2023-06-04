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
