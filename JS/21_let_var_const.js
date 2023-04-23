// In JavaScript, there are three keywords used for variable declaration: let, var, and const. Although they are used to declare variables, there are some important differences between them.

// Here are the main differences between let, var, and const:

// 1. Scope: let and const are block-scoped, which means that they are only accessible within the block in which they are declared (i.e., inside curly braces {}), whereas var is function-scoped, which means that it is accessible throughout the entire function in which it is declared.

// 2. Hoisting: var declarations are hoisted to the top of their scope, which means that you can use them before they are declared (although it's generally considered bad practice to do so). let and const are not hoisted, which means that you cannot use them before they are declared.

// 3. Mutability: let and var allow you to reassign the value of a variable, while const does not. However, this only applies to the variable itself and not to its properties. If you declare an object or an array with const, you can still change the properties of the object or the elements of the array.

// 4. Redeclaration: let and const do not allow you to declare the same variable twice within the same scope, while var does. In strict mode, however, redeclaring a variable with var will throw an error.

// Scope
if (true) {
    let x = 'let';
    var y = 'var';
    const z = 'const';
    console.log(x); // Output: 'let'
    console.log(y); // Output: 'var'
    console.log(z); // Output: 'const'
  }
  console.log(x); // Output: Uncaught ReferenceError: x is not defined
  console.log(y); // Output: 'var'
  console.log(z); // Output: Uncaught ReferenceError: z is not defined
  
  // Mutability
  let a = 'let';
  var b = 'var';
  const c = 'const';
  a = 'new value';
  b = 'new value';
  // c = 'new value'; // TypeError: Assignment to constant variable.
  const obj = { key: 'value' };
  obj.key = 'new value';
  console.log(a); // Output: 'new value'
  console.log(b); // Output: 'new value'
  console.log(c); // Output: 'const'
  console.log(obj); // Output: { key: 'new value' }
  
  // Redeclaration
  let d = 'let';
  // let d = 'new let'; // SyntaxError: Identifier 'd' has already been declared
  var e = 'var';
  var e = 'new var';
  const f = 'const';
  // const f = 'new const'; // SyntaxError: Identifier 'f' has already been declared
  