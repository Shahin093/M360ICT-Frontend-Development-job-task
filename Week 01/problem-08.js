/* 
Task 08: Function Composition
Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
*/

// Functions
const square = (x) => x * x;
const double = (x) => x * 2;
const add5 = (x) => x + 5;

// Function composition to square a number, double the result, and add 5
const composeFunctions =
  (...functions) =>
  (value) =>
    functions.reduce((result, func) => func(result), value);

const squareDoubleAdd5 = composeFunctions(square, double, add5);

// Example usage
const inputNumber = 3;
const result = squareDoubleAdd5(inputNumber);

console.log("Result:", result);
