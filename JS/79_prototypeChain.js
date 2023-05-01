//Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.

//n JavaScript, every object has a prototype chain, which is a chain of linked objects that are used to look up properties and methods when they are not found on the current object. The prototype chain is created when an object is created and its [[Prototype]] property is set to its parent object's prototype.

const parent = {
    greet() {
        console.log("Hello from parent");
    }
};

const child = {
    name: "John"
};

Object.setPrototypeOf(child, parent);

child.greet(); // "Hello from parent"


//In this example, we have two objects: parent and child. We set the prototype of child to parent using Object.setPrototypeOf(). When we call the greet() method on child, it is not found on child, so JavaScript looks for it on child's prototype, which is parent. The method is found on parent, so it is called and the output is "Hello from parent".

// If the method is not found on parent, JavaScript continues to look up the prototype chain until it reaches the end of the chain, which is the Object.prototype. If the method is not found on Object.prototype, JavaScript returns undefined.

// In addition to the [[Prototype]] property, every object has a constructor property, which points to its constructor function. When an object is created using a constructor function, its prototype is set to the prototype property of the constructor function.

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John");

john.greet(); // "Hello, my name is John"
console.log(john.constructor === Person); // true
console.log(Person.prototype.isPrototypeOf(john)); // true

// In this example, we define a Person constructor function that sets its name property and defines a greet() method on its prototype. We create a new Person object john using the new keyword and call its greet() method. We also check that john's constructor is Person and that Person's prototype is in john's prototype chain.

// In summary, the prototype chain in JavaScript is a chain of linked objects that are used to look up properties and methods when they are not found on the current object. Every object has a [[Prototype]] property that points to its parent object's prototype, and a constructor property that points to its constructor function.

