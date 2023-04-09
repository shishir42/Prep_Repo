// In object-oriented programming, there are two main approaches for code reuse: composition and inheritance. In JavaScript, both approaches can be used, and each has its own advantages and disadvantages.

// Composition is the approach of building complex objects by combining smaller, simpler objects. In JavaScript, composition can be achieved through object composition or functional composition. Object composition involves creating a new object that contains instances of other objects, while functional composition involves combining functions to create a new function.

// Here's an example of object composition in JavaScript:

const speaker = {
    speak(text) {
      console.log(text);
    }
  };
  
  const writer = {
    write(text) {
      console.log(text);
    }
  };
  
  const author = {
    name: "John Doe",
    books: ["The Book"],
    ...speaker,
    ...writer
  };
  
  author.speak("Hello world!"); // logs "Hello world!"
  author.write("Hello world!"); // logs "Hello world!"

  
//   In this example, we have three simple objects: speaker, writer, and author. The author object is created by combining the speaker and writer objects using the spread operator (...). The resulting author object has all the properties and methods of both the speaker and writer objects.

// Inheritance, on the other hand, is the approach of creating new objects based on existing objects. In JavaScript, inheritance can be achieved through prototype-based inheritance. Prototype-based inheritance involves creating a prototype object and then creating new objects that inherit from that prototype object.

// Here's an example of prototype-based inheritance in JavaScript:

function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.sayName = function() {
    console.log("My name is " + this.name);
  };
  
  function Dog(name) {
    Animal.call(this, name);
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  
  Dog.prototype.bark = function() {
    console.log("Woof!");
  };
  
  const dog = new Dog("Fido");
  dog.sayName(); // logs "My name is Fido"
  dog.bark(); // logs "Woof!"

  
//   In this example, we have two constructor functions: Animal and Dog. The Dog constructor function inherits from the Animal constructor function using Object.create(). The Dog constructor function also adds a bark() method to the prototype. The resulting dog object has access to both the sayName() method from the Animal prototype and the bark() method from the Dog prototype.

// Overall, both composition and inheritance are useful approaches for code reuse in JavaScript, and which one you choose depends on the specific requirements of your code.