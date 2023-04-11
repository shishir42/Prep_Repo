// The constructor method is a special method for creating and initializing an object created within a class. If you do not specify a constructor method, a default constructor is used. The example usage of constructor would be as below,

class Employee {
  constructor() {
    this.name = "John";
  }
}

var employeeObject = new Employee();

console.log(employeeObject.name); // John

// What happens if you write constructor more than once in a class

class Employee {
  constructor() {
    this.name = "John";
  }
  constructor() {   //  Uncaught SyntaxError: A class may only have one constructor
    this.age = 30;
  }
}

var employeeObject = new Employee();

console.log(employeeObject.name);

//How do you call the constructor of a parent class

//   You can use the super keyword to call the constructor of a parent class. Remember that super() must be called before using 'this' reference. Otherwise it will cause a reference error. Let's the usage of it,

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
    this.name = "Square";
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    this.area = value;
  }
}

//   How do you get the prototype of an object

// You can use the Object.getPrototypeOf(obj) method to return the prototype of the specified object. i.e. The value of the internal prototype property. If there are no inherited properties then null value is returned.

const newPrototype = {};
const newObject1 = Object.create(newPrototype);

console.log(Object.getPrototypeOf(newObject1) === newPrototype); // true

//How do you set prototype of one object to another

// You can use the Object.setPrototypeOf() method that sets the prototype (i.e., the internal Prototype property) of a specified object to another object or null. For example, if you want to set prototype of a square object to rectangle object would be as follows,

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);
Object.setPrototypeOf({}, null);

// How do you check whether an object can be extendable or not

// The Object.isExtensible() method is used to determine if an object is extendable or not. i.e, Whether it can have new properties added to it or not.

// const newObject = {};
// console.log(Object.isExtensible(newObject)); //true

// How do you prevent an object to extend
// The Object.preventExtensions() method is used to prevent new properties from ever being added to an object. In other words, it prevents future extensions to the object. Let's see the usage of this property,

const newObject2 = {};
Object.preventExtensions(newObject2); // NOT extendable

try {
  Object.defineProperty(newObject, "newProperty", {
    // Adding new property
    value: 100,
  });
} catch (e) {
  console.log(e); // TypeError: Cannot define property newProperty, object is not extensible
}

// What are the different ways to make an object non-extensible

// You can mark an object non-extensible in 3 ways,

// Object.preventExtensions
// Object.seal
// Object.freeze

var newObject = {};

Object.preventExtensions(newObject); // Prevent objects are non-extensible
Object.isExtensible(newObject); // false

var sealedObject = Object.seal({}); // Sealed objects are non-extensible
Object.isExtensible(sealedObject); // false

var frozenObject = Object.freeze({}); // Frozen objects are non-extensible
Object.isExtensible(frozenObject); // false

// How do you define multiple properties on an object
// The Object.defineProperties() method is used to define new or modify existing properties directly on an object and returning the object. Let's define multiple properties on an empty object,

const newObject = {};

Object.defineProperties(newObject, {
  newProperty1: {
    value: "John",
    writable: true,
  },
  newProperty2: {},
});

// Why do you need Obfuscation
// Below are the few reasons for Obfuscation,

// The Code size will be reduced. So data transfers between server and client will be fast.
// It hides the business logic from outside world and protects the code from others
// Reverse engineering is highly difficult
// The download time will be reduced

// What is Minification
// Minification is the process of removing all unnecessary characters(empty spaces are removed) and variables will be renamed without changing it's functionality. It is also a type of obfuscation .

// How do you get property descriptors of an object

const newObject = {
  a: 1,
  b: 2,
  c: 3,
};
const descriptorsObject = Object.getOwnPropertyDescriptors(newObject);
console.log(descriptorsObject.a.writable); //true
console.log(descriptorsObject.a.configurable); //true
console.log(descriptorsObject.a.enumerable); //true
console.log(descriptorsObject.a.value); // 1

//   How do you extend classes

// The extends keyword is used in class declarations/expressions to create a class which is a child of another class. It can be used to subclass custom classes as well as built-in objects. The syntax would be as below,

class ChildClass extends ParentClass { }

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
    this.name = "Square";
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    this.area = value;
  }
}

// In JavaScript, a constructor function is a special type of function that is used to create and initialize objects. When you call a constructor function using the "new" keyword, a new object is created and returned.

// Here's an example of a simple constructor function in JavaScript:

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person1 = new Person("John", 30);
var person2 = new Person("Jane", 25);


// In this example, the Person function is used as a constructor function to create two new Person objects, person1 and person2. The constructor function takes two parameters, name and age, which are used to set the name and age properties of the new objects using the this keyword.

// When you call the constructor function using the new keyword, a new object is created and returned. The person1 and person2 variables are then set to reference these new objects.

// Constructor functions can also have methods attached to them, which are inherited by the objects created by the constructor function. Here's an example:

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function () {
    console.log("Hello, my name is " + this.name);
  }
}

var person1 = new Person("John", 30);
person1.sayHello(); // outputs "Hello, my name is John"


// In this example, the Person constructor function has a sayHello method attached to it using the this keyword. When you create a new Person object using the constructor function, the sayHello method is inherited by the object and can be called on it.