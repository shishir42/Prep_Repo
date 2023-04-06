// There are several ways to create objects in JavaScript:

//1.  Object literal notation: This is the simplest and most common way to create an object in JavaScript. It involves defining an object using curly braces {} and setting properties and their values using a colon : between the property name and its value.

var person = {
    name: "John",
    age: 30,
    gender: "male"
};


//2. Object constructor: This involves creating an object using a constructor function. The constructor function can be created using the function keyword and is named with a capital letter to distinguish it from regular functions. Properties and methods can be added to the object using the this keyword.

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var person = new Person("John", 30, "male");

//3. Object.create() method: This involves creating an object using the Object.create() method. The method creates a new object with the specified prototype object and properties.

var person = Object.create(Object.prototype, {
    name: {
        value: "John",
        writable: true,
        enumerable: true,
        configurable: true
    },
    age: {
        value: 30,
        writable: true,
        enumerable: true,
        configurable: true
    },
    gender: {
        value: "male",
        writable: true,
        enumerable: true,
        configurable: true
    }
});


// 4. Class notation: This involves creating an object using the class keyword in ES6. Classes are a syntactic sugar for constructor functions and are used to create objects with shared methods and properties.

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

var person = new Person("John", 30, "male");

// 5. A function constructor with prototype is a way of creating objects in JavaScript that allows for inheritance and sharing of methods and properties among objects.

function Animal(name, age) {
    this.name = name;
    this.age = age;
}

Animal.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

function Dog(name, age, breed) {
    Animal.call(this, name, age);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
    console.log("Woof! Woof!");
};

const myDog = new Dog("Buddy", 5, "Golden Retriever");

myDog.greet(); // "Hello, my name is Buddy and I am 5 years old."
myDog.bark(); // "Woof! Woof!"

// Object.create() vs Class

// Object.create() and class are both ways to create objects in JavaScript, but they are different in several ways.

// Object.create() is a method that creates a new object and sets its prototype object to the object passed as the first argument. Additional properties and methods can be added to the object using the second argument, which is an object containing the properties and methods to be added to the object.

const person = {
    name: "John",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

const john = Object.create(person, {
    occupation: { value: "Engineer" }
});

john.greet(); // "Hello, my name is John and I am 30 years old."
console.log(john.occupation); // "Engineer"


//On the other hand, class is a syntactical sugar for creating constructor functions and setting their prototypes. It provides a more structured and intuitive way of creating objects that use constructor functions and allows for easier inheritance and method sharing among objects.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Engineer extends Person {
    constructor(name, age, occupation) {
        super(name, age);
        this.occupation = occupation;
    }

    work() {
        console.log(`${this.name} is working as an ${this.occupation}.`);
    }
}

const john1 = new Engineer("John", 30, "Engineer");

john1.greet(); // "Hello, my name is John and I am 30 years old."
john1.work(); // "John is working as an Engineer."

//In summary, Object.create() is a method for creating objects and setting their prototype objects, while class is a syntactical sugar for creating constructor functions and setting their prototypes, which provides a more structured and intuitive way of creating objects with inheritance and method sharing.

// There are 3 possible ways for accessing the property of an object.

// Dot notation: It uses dot for accessing the properties
// objectName.property;

// Square brackets notation: It uses square brackets for property access
// objectName["property"];

// Expression notation: It uses expression in the square brackets
// objectName[expression];