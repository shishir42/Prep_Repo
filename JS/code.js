// What is the output of below code

var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}

// {model: "Honda", color: "white", year: "2010", country: "UK"}

/****************/

function foo() {
    let x = (y = 0);
    x++;
    y++;
    return x;
  }
  
  console.log(foo(), typeof x, typeof y);

//   1, undefined and number

/****************/

function main() {
    console.log("A");
    setTimeout(function print() {
      console.log("B");
    }, 0);
    console.log("C");
  }
  main();

  // A C B

//   The statements order is based on the event loop mechanism. The order of statements follows the below order,

// At first, the main function is pushed to the stack.
// Then the browser pushes the first statement of the main function( i.e, A's console.log) to the stack, executing and popping out immediately.
// But setTimeout statement moved to Browser API to apply the delay for callback.
// In the meantime, C's console.log added to stack, executed and popped out.
// The callback of setTimeout moved from Browser API to message queue.
// The main function popped out from stack because there are no statements to execute
// The callback moved from message queue to the stack since the stack is empty.
// The console.log for B is added to the stack and display on the console.

/****************/

console.log(0.1 + 0.2 === 0.3);

// false

// This is due to the float point math problem. Since the floating point numbers are encoded in binary format, the addition operations on them lead to rounding errors. Hence, the comparison of floating points doesn't give expected results. You can find more details about the explanation here 0.30000000000000004.com/

/****************/

var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);

// 1undefined

/****************/

function foo() {
    return;
    {
      message: "Hello World";
    }
  }
  console.log(foo());

//   Undefined

/****************/

var myChars = ["a", "b", "c", "d"];
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);

[empty, 'b', 'c', 'd'], undefined, 4

/****************/
var array1 = new Array(3);
console.log(array1);

var array2 = [];
array2[2] = 100;
console.log(array2);

var array3 = [, , ,];
console.log(array3);

// [empty × 3], [empty × 2, 100], [empty × 3]

/****************/

const obj = {
    prop1: function () {
      return 0;
    },
    prop2() {
      return 1;
    },
    ["prop" + 3]() {
      return 2;
    },
  };
  
  console.log(obj.prop1());
  console.log(obj.prop2());
  console.log(obj.prop3());

//   0, 1, 2

// ES6 provides method definitions and property shorthands for objects. So both prop2 and prop3 are treated as regular function values.

/****************/

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

//  true, false

// The important point is that if the statement contains the same operators(e.g, < or >) then it can be evaluated from left to right. The first statement follows the below order,

// console.log(1 < 2 < 3);
// console.log(true < 3);
// console.log(1 < 3); // True converted as 1 during comparison
// True

// console.log(3 > 2 > 1);
// console.log(true > 1);
// console.log(1 > 1); // False converted as 0 during comparison
// False

/****************/

function printNumbers(first, second, first) {
    console.log(first, second, first);
  }
  printNumbers(1, 2, 3);

//   3, 2, 3

// In non-strict mode, the regular JavaScript functions allow duplicate named parameters. The above code snippet has duplicate parameters on 1st and 3rd parameters. The value of the first parameter is mapped to the third argument which is passed to the function. Hence, the 3rd argument overrides the first parameter.

// Note: In strict mode, duplicate parameters will throw a Syntax Error.



/****************/

const printNumbersArrow = (first, second, first) => {
    console.log(first, second, first);
  };
  printNumbersArrow(1, 2, 3);

// SyntaxError: Duplicate parameter name not allowed in this context

/****************/

const arrowFunc = () => arguments.length;
console.log(arrowFunc(1, 2, 3));

// ReferenceError: arguments is not defined

// Arrow functions do not have an arguments, super, this, or new.target bindings. So any reference to arguments variable tries to resolve to a binding in a lexically enclosing environment. In this case, the arguments variable is not defined outside of the arrow function. Hence, you will receive a reference error.

// But If you still want to use an arrow function then rest operator on arguments provides the expected arguments

const arrowFunc1 = (...args) => args.length;
console.log(arrowFunc1(1, 2, 3));

/****************/
console.log(String.prototype.trimLeft.name === "trimLeft");
console.log(String.prototype.trimLeft.name === "trimStart");

/****************/

console.log(Math.max());

// -Infinity is the initial comparant because almost every other value is bigger. So when no arguments are provided, -Infinity is going to be returned. Note: Zero number of arguments is a valid case.

/****************/
console.log(10 == [10]);
console.log(10 == [[[[[[[10]]]]]]]);

// True, True

// As per the comparison algorithm in the ECMAScript specification(ECMA-262), the above expression converted into JS as below

// 10 === Number([10].valueOf().toString()); // 10
// So it doesn't matter about number brackets([]) around the number, it is always converted to a number in the expression.


/****************/
console.log(10 + "10");
console.log(10 - "10");

// 1010, 0

// The concatenation operator(+) is applicable for both number and string types. So if any operand is string type then both operands concatenated as strings. Whereas subtract(-) operator tries to convert the operands as number type.

/****************/

console.log([0] == false);
if ([0]) {
  console.log("I'm True");
} else {
  console.log("I'm False");
}

// True, I'm True

// In comparison operators, the expression [0] converted to Number([0].valueOf().toString()) which is resolved to false. Whereas [0] just becomes a truthy value without any conversion because there is no comparison operator.


/****************/
console.log([1, 2] + [3, 4]);

// 1,23,4
// The + operator is not meant or defined for arrays. So it converts arrays into strings and concatenates them.


/****************/
const numbers = new Set([1, 1, 2, 3, 4]);
console.log(numbers);

const browser = new Set("Firefox");
console.log(browser);

// {1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}

/****************/
console.log(NaN === NaN);

// False

// JavaScript follows IEEE 754 spec standards. As per this spec, NaNs are never equal for floating-point numbers.

/****************/
let numbers1 = [1, 2, 3, 4, NaN];
console.log(numbers1.indexOf(NaN));

//-1

// The indexOf uses strict equality operator(===) internally and NaN === NaN evaluates to false. Since indexOf won't be able to find NaN inside an array, it returns -1 always. But you can use Array.prototype.findIndex method to find out the index of NaN in an array or You can use Array.prototype.includes to check if NaN is present in an array or not.

console.log(numbers.findIndex(Number.isNaN)); // 4

console.log(numbers.includes(NaN)); // true
/****************/
let [a, ...b,] = [1, 2, 3, 4, 5];
console.log(a, b);

// When using rest parameters, trailing commas are not allowed and will throw a SyntaxError. If you remove the trailing comma then it displays 1st answer

// let [a, ...b] = [1, 2, 3, 4, 5];
// console.log(a, b); // 1, [2, 3, 4, 5]

/****************/
async function func() {
    return 10;
  }
  console.log(func());

//  Promise {<fulfilled>: 10}

//   Async functions always return a promise. But even if the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise. The above async function is equivalent to below expression,

function func() {
    return Promise.resolve(10);
  }


/****************/

async function func() {
    await 10;
  }
  console.log(func());

//   Promise {<resolved>: undefined}

// The await expression returns value 10 with promise resolution and the code after each await expression can be treated as existing in a .then callback. In this case, there is no return expression at the end of the function. Hence, the default return value of undefined is returned as the resolution of the promise. The above async function is equivalent to below expression,

function func() {
    return Promise.resolve(10).then(() => undefined);
  }

/****************/

function delay() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  async function delayedLog(item) {
    await delay();
    console.log(item);
  }
  
  async function processArray(array) {
    array.forEach(item => {
      await delayedLog(item);
    })
  }
  
  processArray([1, 2, 3, 4]);

//   SyntaxError
// Even though “processArray” is an async function, the anonymous function that we use for forEach is synchronous. If you use await inside a synchronous function then it throws a syntax error.

/****************/
function delay() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  
  async function delayedLog(item) {
    await delay();
    console.log(item);
  }
  
  async function process(array) {
    array.forEach(async (item) => {
      await delayedLog(item);
    });
    console.log("Process completed!");
  }
  process([1, 2, 3, 5]);

//   Process completed! and 1 2 3 5

/****************/

let myNumber = 100;
let myString = "100";

if (!typeof myNumber === "string") {
  console.log("It is not a string!");
} else {
  console.log("It is a string!");
}

if (!typeof myString === "number") {
  console.log("It is not a number!");
} else {
  console.log("It is a number!");
}

// It is a string!, It is a number!

/****************/

class A {
    constructor() {
      console.log(new.target.name);
    }
  }
  
  class B extends A {
    constructor() {
      super();
    }
  }
  
  new A();
  new B();

//   A, B

// Using constructors, new.target refers to the constructor (points to the class definition of class which is initialized) that was directly invoked by new. This also applies to the case if the constructor is in a parent class and was delegated from a child constructor.


/****************/
const [x, ...y, z] = [1, 2, 3, 4];
console.log(x, y, z);

// It throws a syntax error because the rest element should not have a trailing comma. You should always consider using a rest operator as the last element.


/****************/

const { a: x = 10, b: y = 20 } = { a: 30 };

console.log(x);
console.log(y);

// 30, 20

/****************/
function area({ length = 10, width = 20 }) {
    console.log(length * width);
  }
  
  area();

//   Error

// If you leave out the right-hand side assignment for the destructuring object, the function will look for at least one argument to be supplied when invoked. Otherwise you will receive an error Error: Cannot read property 'length' of undefined as mentioned above.

// Pass at least an empty object:
function area({ length = 10, width = 20 }) {
    console.log(length * width);
  }
  
  area({});

//   Assign default empty object:

function area({ length = 10, width = 20 } = {}) {
    console.log(length * width);
  }
  
  area();

/****************/

const props = [
    { id: 1, name: "John" },
    { id: 2, name: "Jack" },
    { id: 3, name: "Tom" },
  ];
  
  const [, , { name }] = props;
  console.log(name);

//   Tom

// It is possible to combine Array and Object destructuring. In this case, the third element in the array props accessed first followed by name property in the object.


/****************/
function checkType(num = 1) {
    console.log(typeof num);
  }
  
  checkType();
  checkType(undefined);
  checkType("");
  checkType(null);

//    number, number, string, object

// If the function argument is set implicitly(not passing argument) or explicitly to undefined, the value of the argument is the default parameter. Whereas for other falsy values('' or null), the value of the argument is passed as a parameter.

// Hence, the result of function calls categorized as below,

// The first two function calls logs number type since the type of default value is number
// The type of '' and null values are string and object type respectively.


/****************/

function add(item, items = []) {
    items.push(item);
    return items;
  }
  
  console.log(add("Orange"));
  console.log(add("Apple"));

//   ['Orange'], ['Apple']




/****************/

function greet(greeting, name, message = greeting + " " + name) {
    console.log([greeting, name, message]);
  }
  
  greet("Hello", "John");
  greet("Hello", "John", "Good morning!");

//   ['Hello', 'John', 'Hello John'], ['Hello', 'John', 'Good morning!']

/****************/
function outer(f = inner()) {
    function inner() {
      return "Inner";
    }
  }
  outer();

//   ReferenceError
// The functions and variables declared in the function body cannot be referred from default value parameter initializers. If you still try to access, it throws a run-time ReferenceError(i.e, inner is not defined).


/****************/
function myFun(x, y, ...manyMoreArgs) {
    console.log(manyMoreArgs);
  }
  
  myFun(1, 2, 3, 4, 5);
  myFun(1, 2);

//   [3, 4, 5], []

// The rest parameter is used to hold the remaining parameters of a function and it becomes an empty array if the argument is not provided.

/****************/
const obj = { key: "value" };
const array = [...obj];
console.log(array);

// TypeError
// Spread syntax can be applied only to iterable objects. By default, Objects are not iterable, but they become iterable when used in an Array, or with iterating functions such as map(), reduce(), and assign(). If you still try to do it, it still throws TypeError: obj is not iterable.

/****************/
function* myGenFunc() {
    yield 1;
    yield 2;
    yield 3;
  }
  var myGenObj = new myGenFunc();
  console.log(myGenObj.next().value);

//   TypeError

// Generators are not constructible type. But if you still proceed to do, there will be an error saying "TypeError: myGenFunc is not a constructor"


/****************/
const num = 0o38;
console.log(num);

// SyntaxError
// If you use an invalid number(outside of 0-7 range) in the octal literal, JavaScript will throw a SyntaxError. In ES5, it treats the octal literal as a decimal number.


/****************/
const squareObj = new Square(10);
console.log(squareObj.area);

class Square {
  constructor(length) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(value) {
    this.area = value;
  }
}

// ReferenceError

// Unlike function declarations, class declarations are not hoisted. i.e, First You need to declare your class and then access it, otherwise it will throw a ReferenceError "Uncaught ReferenceError: Square is not defined".

// Note: Class expressions also applies to the same hoisting restrictions of class declarations.

/****************/
function Person() {}

Person.prototype.walk = function () {
  return this;
};

Person.run = function () {
  return this;
};

let user = new Person();
let walk = user.walk;
console.log(walk());

let run = Person.run;
console.log(run());

// Window, Window
// When a regular or prototype method is called without a value for this, the methods return an initial this value if the value is not undefined. Otherwise global window object will be returned. In our case, the initial this value is undefined so both methods return window objects.


/****************/
class Vehicle {
    constructor(name) {
      this.name = name;
    }
  
    start() {
      console.log(`${this.name} vehicle started`);
    }
  }
  
  class Car extends Vehicle {
    start() {
      console.log(`${this.name} car started`);
      super.start();
    }
  }
  
  const car = new Car("BMW");
  console.log(car.start());

//   BMW car started, BMW vehicle started

// The super keyword is used to call methods of a superclass. Unlike other languages the super invocation doesn't need to be a first statement. i.e, The statements will be executed in the same order of code.



/****************/
const USER = { age: 30 };
USER.age = 25;
console.log(USER.age);

// 25

// Even though we used constant variables, the content of it is an object and the object's contents (e.g properties) can be altered. Hence, the change is going to be valid in this case.


/****************/

console.log("🙂" === "🙂");

//true
// Emojis are unicodes and the unicode for smile symbol is "U+1F642". The unicode comparision of same emojies is equivalent to string comparison. Hence, the output is always true.

/****************/
console.log(typeof typeof typeof true);

//string

// The typeof operator on any primitive returns a string value. So even if you apply the chain of typeof operators on the return value, it is always string.

/****************/
let zero = new Number(0);

if (zero) {
  console.log("If");
} else {
  console.log("Else");
}

// If

// The type of operator on new Number always returns object. i.e, typeof new Number(0) --> object.
// Objects are always truthy in if block
// Hence the above code block always goes to if section.

/****************/
let msg = "Good morning!!";

msg.name = "John";

console.log(msg.name);

// Undefined

// It returns undefined for non-strict mode and returns Error for strict mode. In non-strict mode, the wrapper object is going to be created and get the mentioned property. But the object get disappeared after accessing the property in next line.


/****************/

let count = 10;

(function innerFunc() {
  if (count === 10) {
    let count = 11;
    console.log(count);
  }
  console.log(count);
})();

// 11, 10

// The innerFunc is a closure which captures the count variable from the outerscope. i.e, 10. But the conditional has another local variable count which overwrites the ourter count variable. So the first console.log displays value 11. Whereas the second console.log logs 10 by capturing the count variable from outerscope.

/****************/
console.log(true && 'hi');
console.log(true && 'hi' && 1);
console.log(true && '' && 0);

// hi
// 1
// ''


// Reason : The operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.

// Note: Below these values are consider as falsy value
// 1: 0
// 2: ''
// 3: null
// 4: undefined
// 5: NAN

/****************/
let arr = [1, 2, 3];
let str = "1,2,3";

console.log(arr == str);

// true
// Arrays have their own implementation of toString method that returns a comma-separated list of elements. So the above code snippet returns true. In order to avoid conversion of array type, we should use === for comparison.

/****************/

getMessage();

var getMessage = () => {
  console.log("Good morning");
};

// getMessage is not a function

// Hoisting will move variables and functions to be the top of scope. Even though getMessage is an arrow function the above function will considered as a varible due to it's variable declaration or assignment. So the variables will have undefined value in memory phase and throws an error 'getMessage is not a function' at the code execution phase.

/****************/
let quickPromise = Promise.resolve();

quickPromise.then(() => console.log("promise finished"));

console.log("program finished"); 

// program finished, promise finished

// Even though a promise is resolved immediately, it won't be executed immediately because its .then/catch/finally handlers or callbacks(aka task) are pushed into the queue. Whenever the JavaScript engine becomes free from the current program, it pulls a task from the queue and executes it. This is the reason why last statement is printed first before the log of promise handler.

// Note: We call the above queue as "MicroTask Queue"


/****************/
console.log('First line')
['a', 'b', 'c'].forEach((element) => console.log(element))
console.log('Third line')

// Cannot read properties of undefined

// When JavaScript encounters a line break without a semicolon, the JavaScript parser will automatically add a semicolon based on a set of rules called Automatic Semicolon Insertion which determines whether line break as end of statement or not to insert semicolon. But it does not assume a semicolon before square brackets [...]. So the first two lines considered as a single statement as below.

console.log('First line')['a', 'b', 'c'].forEach((element) => console.log(element))

// Hence, there will be cannot read properties of undefined error while applying the array square bracket on log function.


/****************/
var of = ['of'];
for(var of of of) {
  console.log(of);
}

// In JavaScript, of is not considered as a reserved keyword. So the variable declaration with of is accepted and prints the array value of using for..of loop.

// But if you use reserved keyword such as in then there will be a syntax error saying SyntaxError: Unexpected token in,

/****************/

const numbers2 = [11, 25, 31, 23, 33, 18, 200];
numbers2.sort();
console.log(numbers2);

// [11, 18, 200, 23, 25, 31, 33]

// By default, the sort method sorts elements alphabetically. This is because elemented converted to strings and strings compared in UTF-16 code units order. Hence, you will see the above numbers not sorted as expected. In order to sort numerically just supply a comparator function which handles numeric sorts.

// const numbers = [11, 25, 31, 23, 33, 18, 200];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// Sort() method changes the original array.


/****************/
setTimeout(() => {console.log('1')}, 0);
Promise.resolve('hello').then(() => console.log('2'));
console.log('3');

// 3, 2, 1

// When the JavaScript engine parses the above code, the first two statements are asynchronous which will be executed later and third statement is synchronous statement which will be moved to callstack, executed and prints the number 3 in the console. Next, Promise is native in ES6 and it will be moved to Job queue which has high priority than callback queue in the execution order. At last, since setTimeout is part of WebAPI the callback function moved to callback queue and executed. Hence, you will see number 2 printed first followed by 1.

/****************/
console.log(name);
console.log(message());
var name = 'John';
(function message() {
   console.log('Hello John: Welcome');
});

// IIFE(Immediately Invoked Function Expression) is just like any other function expression which won't be hoisted. Hence, there will be a reference error for message call. The behavior would be the same with below function expression of message1,

console.log(name);
console.log(message());
var name = 'John';
var message = function () {
   console.log('Hello John: Welcome');
});



/****************/

message()

function message() {
  console.log("Hello");
}
function message() {
  console.log("Bye");
}

// Bye

// As part of hoisting, initially JavaScript Engine or compiler will store first function in heap memory but later rewrite or replaces with redefined function content.


/****************/
var currentCity = "NewYork";

var changeCurrentCity = function() {
  console.log('Current City:', currentCity);
  var currentCity = "Singapore";
  console.log('Current City:', currentCity);
}

changeCurrentCity();

//  undefined, Singapore

// Due to hositing feature, the variables declared with var will have undefined value in the creation phase so the outer variable currentCity will get same undefined value. But after few lines of code JavaScript engine found a new function call(changeCurrentCity()) to update the current city with var re-declaration. Since each function call will create a new execution context, the same variable will have undefined value before the declaration and new value(Singapore) after the declarion. Hence, the value undefined print first followed by new value Singapore in the execution phase.





/****************/

function second() {
	var message;
  console.log(message);
}

function first() {
	var message="first";
  second();
  console.log(message);
}

var message = "default";
first();
console.log(message);

// undefined, first, default

// Each context(global or functional) has it's own variable environment and the callstack of variables in a LIFO order. So you can see the message variable value from second, first functions in an order followed by global context message variable value at the end.


/****************/
var expressionOne = function functionOne() {
    console.log("functionOne");
  }
  functionOne();

//   functionOne is not defined

// The function call functionOne is not going to be part of scope chain and it has it's own execution context with the enclosed variable environment. i.e, It won't be accessed from global context. Hence, there will be an error while invoking the function as functionOne is not defined.


/****************/

const user = {
    name: 'John',
    eat() {
      console.log(this);
      var eatFruit = function() {
        console.log(this);
      }
      eatFruit()
    }
  }
  user.eat();

//    {name: "John", eat: f}, Window {...}

// this keyword is dynamic scoped but not lexically scoped . In other words, it doesn't matter where this has been written but how it has been invoked really matter. In the above code snippet, the user object invokes eat function so this keyword refers to user object but eatFruit has been invoked by eat function and this will have default Window object.


// The above pit fall fixed by three ways,

// In ES6, the arrow function will make this keyword as lexically scoped. Since the surrounding object of this object is user object, the eatFruit function will contain user object for this object.

const user = {
    name: 'John',
    eat() {
      console.log(this);
      var eatFruit = () => {
        console.log(this);
      }
      eatFruit()
    }
  }
  user.eat();

//   The next two solutions have been used before ES6 introduced.

// It is possible create a reference of this into a separate variable and use that new variable inplace of this keyword inside eatFruit function. This is a common practice in jQuery and AngularJS before ES6 introduced.

const user = {
    name: 'John',
    eat() {
      console.log(this);
      var self = this;
      var eatFruit = () => {
        console.log(self);
      }
      eatFruit()
    }
  }
  user.eat();

//   The eatFruit function can bind explicitly with this keyword where it refers Window object.

const user = {
    name: 'John',
    eat() {
      console.log(this);
      var eatFruit = function() {
        console.log(this);
      }
      return eatFruit.bind(this)
    }
  }
  user.eat()();



/****************/
let message = 'Hello World!';
message[0] = 'J';
console.log(message)

let name = 'John';
name = name + ' Smith';
console.log(name);

// Hello World!, John Smith

// In JavaScript, primitives are immutable i.e. there is no way to change a primitive value once it gets created. So when you try to update the string's first character, there is no change in the string value and prints the same initial value Hello World!. Whereas in the later example, the concatenated value is re-assigned to the same variable which will result into creation of new memory block with the reference pointing to John Smith value and the old memory block value(John) will be garbage collected.


/****************/
let user1 = { 
    name : 'Jacob',
    age : 28
  };
  
let user2 = {    
    name : 'Jacob',
    age : 28
  };
  
console.log(user1 === user2);

// False

// In JavaScript, the variables such as objects, arrays and functions comes under pass by reference. When you try to compare two objects with same content, it is going to compare memory address or reference of those variables. These variables always create separate memory blocks hence the comparison is always going to return false value.

/****************/

function greeting() {
    setTimeout(function() {
      console.log(message);
    }, 5000);
    const message = "Hello, Good morning";
  }
  greeting();

//   Hello, Good morning

// The variable message is still treated as closure(since it has been used in inner function) eventhough it has been declared after setTimeout function. The function with in setTimeout function will be sent to WebAPI and the variable declaration executed with in 5 seconds with the assigned value. Hence, the text declared for the variable will be displayed.


/****************/
const a = new Number(10);
const b = 10;
console.log(a === b);

// False

// Eventhough both variables a and b refer a number value, the first declaration is based on constructor function and the type of the variable is going to be object type. Whereas the second declaration is primitive assignment with a number and the type is number type. Hence, the equality operator === will output false value.


/****************/
function add(a, b) {
    console.log("The input arguments are: ", a, b);
    return a + b;
  }

//    Impure function

// Eventhough the above function returns the same result for the same arguments(input) that are passed in the function, the console.log() statement causes a function to have side effects because it affects the state of an external code. i.e, the console object's state and depends on it to perform the job. Hence, the above function considered as impure function.


/****************/

const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 4000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 4000));

Promise.all([promiseOne, promiseTwo]).then(data => console.log(data));

// Uncaught (in promise)

// The above promises settled at the same time but one of them resolved and other one rejected. When you use .all method on these promises, the result will be short circuted by throwing an error due to rejection in second promise. But If you use .allSettled method then result of both the promises will be returned irrespective of resolved or rejected promise status without throwing any error.

Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data));

/****************/

try {
    setTimeout(() => {
      console.log('try block');
      throw new Error(`An exception is thrown`)
    }, 1000);
  } catch(err) {
    console.log('Error: ', err);
  }

//   try block, Uncaught Error: Exception is thrown

// If you put setTimeout and setInterval methods inside the try clause and an exception is thrown, the catch clause will not catch any of them. This is because the try...catch statement works synchronously, and the function in the above code is executed asynchronously after a certain period of time. Hence, you will see runtime exception without catching the error. To resolve this issue, you have to put the try...catch block inside the function as below,


setTimeout(() => {
    try {
       console.log('try block');
       throw new Error(`An exception is thrown`)
    } catch(err) {
       console.log('Error: ', err);
    }
   
   }, 1000);

//    You can use .catch() function in promises to avoid these issues with asynchronous code.




/****************/

/****************/

/****************/

/****************/

/****************/

/****************/



