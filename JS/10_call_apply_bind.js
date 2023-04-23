// Call: The call() method invokes a function with a given this value and arguments provided one by one

var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?


// Apply: Invokes the function with a given this value and allows you to pass in arguments as an array

var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?

// bind: returns a new function, allowing you to pass any number of arguments

var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?

// In JavaScript, call, apply, and bind are methods that allow you to control the this value inside a function and pass arguments to it in a flexible way. Here's a brief summary of their purposes:

// call: The call method invokes a function with a specified this value and allows you to pass arguments to the function one by one. This can be useful for calling a function with a different this value than the default one, or for passing arguments from an array or object.

// apply: The apply method is similar to call, but it allows you to pass arguments to the function as an array. This can be useful for calling a function with a variable number of arguments, or for passing arguments from an array or object.

// bind: The bind method returns a new function with a bound this value and optionally some pre-specified arguments. This can be useful for creating a new function that has a fixed this value, or for creating a function with some arguments pre-filled.

/********************/

// In JavaScript, the bind() method is used to create a new function that has a specified this value, and optionally, arguments that are pre-set to specific values. The bind() method returns a new function with the same functionality as the original function but with the specified this value and arguments.

// Here are some common use cases for bind() in JavaScript:

// Changing the context of this: When a function is called, the value of this is set based on how the function is called. Sometimes, you may want to change the value of this inside a function to a specific value. In such cases, you can use bind() to create a new function with a different this value.

// Creating a new function with pre-set arguments: Sometimes, you may want to create a new function that has some arguments pre-set to specific values. In such cases, you can use bind() to create a new function with the pre-set arguments. When the new function is called, the pre-set arguments will be passed in first, followed by any additional arguments.

// Implementing partial application: Partial application is a technique in functional programming where you create a new function by pre-filling some of the arguments of an existing function. You can achieve this by using bind() to create a new function with some of the arguments pre-set to specific values.

// Here's an example of using bind() to change the context of this:
const person = {
  name: 'John',
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const greet = person.greet;
const boundGreet = greet.bind(person);
boundGreet(); // Output: Hello, my name is John

// In this example, we have an object person with a greet() method. We then create a new variable greet that references the greet() method. However, if we try to call greet() directly, we get an error because the value of this is not set to person. To fix this, we use bind() to create a new function boundGreet that has the this value set to person. We can then call boundGreet() to get the desired output.


/********************/
// In JavaScript, call() and apply() are methods that allow you to invoke a function with a specified this value and arguments. The main difference between call() and apply() is how they pass arguments to the function.

// Here are some common use cases for call() and apply() in JavaScript:

// Setting the this value: When a function is called, the value of this is set based on how the function is called. Sometimes, you may want to change the value of this inside a function to a specific value. In such cases, you can use call() or apply() to invoke the function with the desired this value.

// Passing arguments to a function: Sometimes, you may want to invoke a function with arguments that are not known until runtime. In such cases, you can use call() or apply() to pass arguments to the function.

// Here's an example of using call() to set the this value:

const person1 = {
  name: 'John',
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const anotherPerson = {
  name: 'Jane'
};

person1.greet.call(anotherPerson); // Output: Hello, my name is Jane

// In this example, we have an object person with a greet() method. We also have another object anotherPerson with a name property. We then use call() to invoke the greet() method with anotherPerson as the this value. This allows us to output Hello, my name is Jane, even though the greet() method is defined on person.

// Here's an example of using apply() to pass arguments to a function:
function sum(a, b) {
  return a + b;
}

const numbers = [1, 2];

const result = sum.apply(null, numbers);
console.log(result); // Output: 3

// In this example, we have a function sum() that takes two arguments and returns their sum. We also have an array numbers that contains the arguments we want to pass to sum(). We then use apply() to invoke sum() with the null value as the this value and numbers as the argument array. This allows us to pass the arguments dynamically at runtime, rather than hardcoding them in the function call.

//regular function vs bind 

// n JavaScript, there are two main ways to create functions: as regular functions or as functions that are bound to a specific context using the bind method. The main difference between them is how they handle the this keyword.

// When a regular function is called, the value of this is determined by the context in which the function is called. In other words, the value of this inside a regular function depends on how the function is called. For example:

const obj = {
  name: 'John',
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

obj.sayHello(); // logs "Hello, my name is John"

const func = obj.sayHello;
func(); // logs "Hello, my name is undefined"

// In the example above, obj.sayHello() logs "Hello, my name is John" because this inside the function refers to the obj object. However, when we assign obj.sayHello to a variable and call it as a regular function (func()), this inside the function refers to the global object (or undefined in strict mode), because the function is no longer called as a method of the obj object.

// On the other hand, when a function is bound to a specific context using the bind method, the value of this inside the function is always the context that was passed to bind. For example:

const obj = {
  name: 'John',
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const func = obj.sayHello.bind(obj);
func(); // logs "Hello, my name is John"

// In the example above, we use the bind method to create a new function func that is bound to the obj object. When we call func(), this inside the function refers to the obj object, regardless of how the function is called.

// In summary, regular functions have dynamic binding of this, while functions created using bind have a fixed binding of this.


