// An arrow function is a shorter syntax for a function expression and does not have its own this, arguments, super, or new.target. These functions are best suited for non-method functions, and they cannot be used as constructors.

const add = (a, b) => {
    return a + b;
}


// Arrow functions have a few key differences from traditional functions:

// Concise syntax: Arrow functions have a very concise syntax. If the function body contains only a single expression, the curly braces and return keyword can be omitted:

const add_new = (a, b) => a + b;

// Implicit return: Arrow functions have an implicit return. This means that if the function body contains only a single expression, that expression is automatically returned. This can make the code more concise and easier to read:

const double = (x) => x * 2;

// Lexical this: Arrow functions do not have their own this keyword. Instead, they inherit the this value from the enclosing scope. This can be useful when working with callbacks and event handlers, where the value of this can be unpredictable:

const myObject = {
    name: "John",
    sayHello: function () {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`);
        }, 1000);
    }
};

myObject.sayHello(); // prints "Hello, my name is John" after 1 second


// this keyword: Arrow functions do not have their own this keyword, and instead inherit the this value from the enclosing scope. Normal functions, on the other hand, have their own this keyword that is determined at runtime based on how the function is called. This can sometimes lead to unexpected behavior in normal functions, especially when using them as callbacks or event handlers.

// Arguments object: Normal functions have access to the arguments object, which is an array-like object containing all of the arguments passed to the function. Arrow functions do not have access to the arguments object, which can make it more difficult to write certain types of functions.

// Constructor functions: Normal functions can be used as constructor functions to create new objects with the new keyword. Arrow functions cannot be used as constructor functions and will throw an error if you try to call them with new.


//Here are few cases where you shouldn't look at arrow function,
// 1.Object methods

var cat = {
    lives: 9,
    jumps: () => {
        this.lives--;
    }
}

//   When you call cat.jumps, the number of lives does not decrease. It is because this is not bound to anything, and will inherit the value of this from its parent scope.


// However, there is an issue with the code. Arrow functions, unlike regular functions, do not bind their own this keyword. Instead, they inherit the this value from the surrounding scope. In this case, the this keyword in the jumps method will refer to the global window object instead of the cat object, which means that this.lives will be undefined and the decrement operation will have no effect.

// 2. Callback functions with dynamic context

var button = document.getElementById('press');
button.addEventListener('click', () => {
    this.classList.toggle('on');
});

// If we click the button, we would get a TypeError. It is because this is not bound to the button but instead bound to its parent scope.

// 3. Promises and Promise Chains

// Arrow functions can certainly be used with Promises and Promise chains in JavaScript. However, there are some situations where arrow functions might not work as expected, particularly when dealing with the this keyword.

// In a Promise chain, the this keyword is often used to refer to the current object, but arrow functions do not have their own this keyword. Instead, they inherit the this value from the enclosing scope. This means that if you use an arrow function as a callback in a Promise chain, the this value may not refer to the object you expect.

const myObject1 = {
    name: "John",
    doSomethingAsync:()=> {
        return new Promise((resolve, reject) => {
            // This arrow function will not work as expected
            setTimeout(() => {
                console.log(`Hello, my name is ${this.name}`); //throw error
                resolve();
            }, 1000);
        });
    }
};

myObject1.doSomethingAsync()
    .then(() => console.log("Done!"))
    .catch((error) => console.error(error));

    // In this code, we're using an arrow function as the callback for setTimeout. However, because arrow functions do not have their own this keyword, the this value inside the arrow function will not refer to myObject. Instead, it will refer to the enclosing scope, which is the global object (or undefined in strict mode). This means that the output of this code will be:

// Hello, my name is undefined
// Done!

// To fix this issue, you can use a normal function instead of an arrow function for the callback, or you can use Function.prototype.bind to bind the this value explicitly:

const myObject2 = {
    name: "John",
    doSomethingAsync: function() {
      return new Promise((resolve, reject) => {
        // Use a normal function or bind this explicitly
        setTimeout(function() {
          console.log(`Hello, my name is ${this.name}`);
          resolve();
        }.bind(this), 1000);
      });
    }
  };
  
  myObject2.doSomethingAsync()
    .then(() => console.log("Done!"))
    .catch((error) => console.error(error));
  
// In this code, we're using a normal function for the callback, and we're binding the this value explicitly using Function.prototype.bind. This will ensure that the this value inside the callback refers to myObject, and the output of this code will be:

// Hello, my name is John
// Done!

