// Prototype Design Pattern
// Define the prototype object
const personPrototype = {
    // Default values for properties
    name: 'Unknown',
    age: 0,

    // A method on the prototype
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// Define a constructor function that creates new objects based on the prototype
function Person(name, age) {
    const person = Object.create(personPrototype); // Create a new object that inherits from the prototype
    person.name = name;
    person.age = age;
    return person;
}

// Create some new objects based on the prototype
const john = Person('John', 30);
const jane = Person('Jane', 25);

// Call a method on the prototype through the objects
john.sayHello(); // Output: "Hello, my name is John and I am 30 years old."
jane.sayHello(); // Output: "Hello, my name is Jane and I am 25 years old."

//   In this example, we define a personPrototype object that contains default values for properties and a method. We then define a Person constructor function that creates new objects based on the personPrototype object by calling Object.create() with the prototype object as an argument. We set the name and age properties on the new object and return it. Finally, we create some new objects using the Person constructor function and call the sayHello() method on the objects, which is defined on the personPrototype object.

// One advantage of the prototype design pattern is that it allows us to create new objects that inherit properties and methods from a prototype object, which can save memory and improve performance. If we need to create many similar objects, we can reuse the same prototype object instead of duplicating the properties and methods on each object. Another advantage is that we can modify the prototype object at runtime to add or remove properties and methods, and the changes will be reflected in all objects that inherit from the prototype.

// One disadvantage of the prototype design pattern is that it can be difficult to understand and maintain if the prototype object is complex or has a deep inheritance hierarchy. In a large and complex application, it can be challenging to keep track of which properties and methods are defined on the prototype object and which are defined on the individual objects.

// Another potential issue with the prototype design pattern is that changes to the prototype object can affect all objects that inherit from it. This can be useful in some cases, but it can also introduce unexpected behavior if we are not careful. For example, if we modify a method on the prototype object, we may unintentionally affect all objects that use that method.

// Finally, the prototype design pattern does not provide a way to enforce encapsulation or data privacy. Since all properties and methods are defined on the prototype object, they are shared by all objects that inherit from it. If we need to create objects with private data or behavior, we may need to use a different design pattern, such as the module or factory pattern.

// Overall, the prototype design pattern can be a powerful tool for creating objects in JavaScript, but it is important to understand its limitations and use it appropriately in order to avoid potential issues.