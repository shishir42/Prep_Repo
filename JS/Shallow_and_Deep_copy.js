// What is the difference between Shallow and Deep copy

// Shallow Copy: Shallow copy is a bitwise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

var empDetails = {
    name: "John",
    age: 25,
    expertise: "Software Developer",
  };

//   to create a duplicate
var empDetailsShallowCopy = empDetails; //Shallow copying!

// if we change some property value in the duplicate one like this:
empDetailsShallowCopy.name = "Johnson";

// The above statement will also change the name of empDetails, since we have a shallow copy. That means we're losing the original data as well.

// Deep copy: A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.


var empDetails = {
    name: "John",
    age: 25,
    expertise: "Software Developer",
  };

//   Create a deep copy by using the properties from the original object into new variable


var empDetailsDeepCopy = {
    name: empDetails.name,
    age: empDetails.age,
    expertise: empDetails.expertise,
  };

//   Now if you change empDetailsDeepCopy.name, it will only affect empDetailsDeepCopy & not empDetails

// In JavaScript, there are several ways to create a deep copy of an object or array. Here are some commonly used methods:

// Using the spread operator: The spread operator can be used to create a new array or object with the same properties as the original one. This method creates a shallow copy of the object, but since it creates new instances of nested objects and arrays, it effectively creates a deep copy.
const originalObj = {a: 1, b: {c: 2}};
const newObj = {...originalObj};

// Using Object.assign(): Object.assign() can also be used to create a new object with the same properties as the original one. This method creates a shallow copy of the object, but since it creates new instances of nested objects and arrays, it effectively creates a deep copy.

const originalObj1 = {a: 1, b: {c: 2}};
const newObj1 = Object.assign({}, originalObj1);

// Using JSON.parse() and JSON.stringify(): This method involves converting the object to a JSON string and then parsing it back to an object. This creates a deep copy of the object, but it only works with objects that are JSON-serializable (i.e., objects that can be converted to a JSON string).
const originalObj2 = {a: 1, b: {c: 2}};
const newObj2 = JSON.parse(JSON.stringify(originalObj2));

// This happens because the spread operator only copies the top-level properties of an object, creating new references to any objects or arrays in those properties, but any nested objects or arrays are still shared between the original and copied objects. Therefore, any changes made to a nested object or array in one object will be reflected in the other object as well.

// To create a shallow copy, we can use the following methods:

// Spread syntax […] {…}
// Object.assign()
// Array.from()
// Object.create()
// Array.prototype.concat()

// And to create a deep copy, we can use:
// JSON.parse(JSON.stringify())
// structuredClone()






