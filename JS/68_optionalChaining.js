// Optional chaining is a feature introduced in ES2020 (also known as ES11) that allows developers to access nested properties of an object without causing errors if one of the properties is undefined or null.

// Prior to optional chaining, accessing nested properties of an object required checking each property in the chain to ensure it was defined before accessing the next property. This could result in long and repetitive code that was difficult to read and maintain. With optional chaining, developers can use the question mark (?) to indicate that a property or method may be undefined or null.

// Here's an example of using optional chaining to access a nested property:

const person = {
    name: "John",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    }
  };
  
  // Without optional chaining
  const city = person.address && person.address.city;
  
  // With optional chaining
  const city_ = person?.address?.city;
  
  // With function call
  const result = myObj?.myFunction();

  // With array indexing
  const value = myArray?.[0];
