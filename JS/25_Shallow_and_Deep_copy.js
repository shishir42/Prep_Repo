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

// To create a deep copy, we can use the following methods:

// Spread syntax […] {…}
// Object.assign()
// Array.from()
// Object.create()
// Array.prototype.concat()

// JSON.parse(JSON.stringify())
// structuredClone()

//Deep copy
let x = 10;
console.log('x: ', x);

//Deep copy
let y=x;
// y=20;
console.log('y: ', y);

// primitives types 
// Number
// String 
// Boolean 


//Shallow copy
let arr1 = [1, 2, 3];
console.log(arr1);

arr2 = arr1;
arr2.push(4);
console.log(arr1);  //1, 2, 3, 4
console.log(arr2); //1,2 3,4

//1. Make a deep copy
function question1(){
  let arr1 = [1, 2, 3];
  arr2 = arr1;
  arr2.push(4);
  console.log(arr1);
  console.log(arr2);
}

function question2(){
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1];
  arr2.push(4);
  console.log(arr1);
  console.log(arr2);
}

function question3(){
  const user1= {
    name:'abc',
    channel:'A1'
  }
  const user2 = user1;
  user2.name = 'xyz'; //shallow copy
 
  console.log(user1);
  console.log(user2);
}

function question4(){
  const user1= {
    name:'abc',
    channel:'A1'
  }
  const user2 = {...user1}; //deep copy
  user2.name = 'xyz'; 
 
  console.log(user1);
  console.log(user2);
}

function question5(){
  const user1= {
    name:'abc',
    channel:'A1'
  }
  const user2 = Object.assign(user1);
  user2.name = 'xyz'; 
 
  console.log(user1);
  console.log(user2);
}

function question6(){
  const user1= {
    name:'abc',
    channel:'A1',
    location:{
      city: 'bangalore'
    }
  }
  const user2 = user1
  user2.location = 'mysuru'; //shallow copy
 
  console.log(user1);
  console.log(user2);
}

function question7(){
  const user1= {
    name:'abc',
    channel:'A1',
    location:{
      city: 'bangalore'
    }
  }
  const user2 = {...user1}; 
  user2.location.city = 'mysuru'; //nested, deep copy won't work
 
  console.log(user1);
  console.log(user2);
}

function question7(){
  const user1= {
    name:'abc',
    channel:'A1',
    location:{
      city: 'bangalore'
    }
  }
  const user2 = JSON.parse(JSON.stringify(user1));
  user2.location.city = 'mysuru'; //deep copy
 
  console.log(user1);
  console.log(user2);
}

function question8(){
  const testObject = {
    sampleDate: new Date()
  };

  const testObject2 = JSON.parse(JSON.stringify(testObject)); //don;t use this if you have date object
  console.log(testObject);
  console.log(testObject2);
}

function question9(){
  const testObject = {
    sampleFunc: console.log,
    sampleUndefined: undefined
  };

  const testObject2 = JSON.parse(JSON.stringify(testObject));
  console.log(testObject); //same object
  console.log(testObject2); //{}
}

function question10(){
  const testObject = {
    sampleFunc: question9,
    sampleInfinity: -Infinity,
    sampleNan: NaN
  };

  const testObject2 = JSON.parse(JSON.stringify(testObject));
  console.log(testObject); //
  console.log(testObject2); //
}

// https://www.freecodecamp.org/news/json-stringify-method-explained/

//How to deep copy json unsafe values
//1. copying all the values one after another 
//2. recursive copying all the values one after another 
//3. using library like loadash

//why arrays and objects are shallow copy and primitive made deep copy (number, string and boolean)



function deepCopy(obj) {
  // Create a new object to hold the copy
  let newObj = {};
  
  // Iterate over each key and value in the original object
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // If the value is an object, recursively call the deepCopy function
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        newObj[key] = deepCopy(obj[key]);
      } else {
        // If the value is not an object, simply copy it to the new object
        newObj[key] = obj[key];
      }
    }
  }
  
  return newObj;
}

