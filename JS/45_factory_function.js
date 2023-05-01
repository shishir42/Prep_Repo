// In JavaScript, a factory function is a function that returns an object, usually with properties and methods. It is called a factory function because it creates and returns new objects like a factory creates and returns new products.

function createPerson(name, age, gender) {
    return {
      name: name,
      age: age,
      gender: gender,
      sayHello: function() {
        console.log("Hello, my name is " + this.name + ".");
      }
    };
  }
  
  // Use the factory function to create two person objects
  var person1 = createPerson("Alice", 25, "female");
  var person2 = createPerson("Bob", 30, "male");
  
  // Call the sayHello method on each person object
  person1.sayHello(); // logs "Hello, my name is Alice."
  person2.sayHello(); // logs "Hello, my name is Bob."

  
//   The advantage of using a factory function in this way is that it encapsulates the object creation process, allowing you to create multiple objects with the same structure and behavior without having to repeat the same code multiple times. Additionally, the factory function can perform additional logic or validation before creating and returning the object, if necessary.

// A factory function is a function that creates and returns a new object or instance of a class. The advantage of using a factory function is that it provides a way to encapsulate the process of creating objects, which can make your code more modular, flexible, and easier to maintain. Here are some specific advantages of using a factory function:

// Encapsulation: By using a factory function, you can encapsulate the details of object creation, such as the initialization of properties or the use of default values, inside the function. This can make the code easier to understand and modify, since the object creation logic is contained within a single function.

// Flexibility: A factory function can be used to create objects of different types, depending on the input parameters passed to the function. This allows you to create objects with different configurations or settings, without having to create separate constructor functions for each variation.

// Customization: Factory functions can be used to provide default values or customized behavior for objects. For example, you can use a factory function to create a logging object that has a default logging level, or to create a database connection object that has custom connection settings.

// Abstraction: A factory function can abstract away the details of object creation, allowing you to create objects without knowing the details of how they are created. This can make the code more readable and maintainable, since you can focus on the high-level functionality of the objects, rather than the details of how they are created.

// Overall, using a factory function can help you write more modular, flexible, and maintainable code, by encapsulating object creation logic and providing a customizable and abstracted way to create objects.