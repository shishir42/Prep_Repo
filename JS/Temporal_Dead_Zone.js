// The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone.

function somemethod() {
    console.log(counter1); // undefined
    console.log(counter2); // ReferenceError
    var counter1 = 1;
    let counter2 = 2;
  }

//   Temporal Dead Zone (TDZ) is a term used in JavaScript to describe the period between the creation of a variable and its initialization. During this time, if you try to access the variable, you will get a ReferenceError.

// In JavaScript, variables declared with the let and const keywords are hoisted to the top of their respective blocks, just like variables declared with the var keyword. However, unlike var variables, they are not initialized to undefined at the beginning of their respective blocks. Instead, they enter the TDZ until they are initialized.
