// In JavaScript, a module is a self-contained piece of code that defines a set of functions, variables, and classes, which can be exported for use in other parts of a program. Modules provide a way to organize code and avoid naming collisions by encapsulating code in a separate namespace.

// Prior to the introduction of modules in ECMAScript 6, JavaScript used a global namespace, which could lead to conflicts between different scripts or libraries that used the same variable names or function names. Modules allow developers to create reusable code that can be easily shared between different parts of an application, without worrying about naming conflicts.

// Modules can be created using the import and export keywords. The export keyword is used to export variables or functions from a module, while the import keyword is used to import variables or functions from another module. Here's an example of a module:

// Module: math.js
export function add(x, y) {
    return x + y;
  }
  
  export function subtract(x, y) {
    return x - y;
  }

  
//   This module exports two functions, add() and subtract(), which can be imported and used in other parts of a program:

// Main program
import { add, subtract } from './math.js';

console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 3)); // Output: 2

// Below are the list of benefits using modules in javascript ecosystem

// Maintainability
// Reusability
// Namespacing