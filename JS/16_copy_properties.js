// How do you copy properties from one object to other

// In JavaScript, you can copy properties from one object to another using the Object.assign() method or the spread operator (...). Here are some examples:

// Using Object.assign():

const sourceA = { foo: 1, bar: 2 };
const targetA = {};
Object.assign(targetA, sourceA);
console.log(targetA); // Output: {foo: 1, bar: 2}


// In this example, the Object.assign() method is used to copy the properties of the source object to the target object. The Object.assign() method takes two or more arguments: the first argument is the target object, and the subsequent arguments are the source objects. The method copies the properties of the source objects to the target object, overwriting any existing properties with the same name.

// Using spread operator (...):
const source = { foo: 1, bar: 2 };
const targetB = { ...source };
console.log(targetB); // Output: {foo: 1, bar: 2}


// In this example, the spread operator (...) is used to copy the properties of the source object to the target object. The spread operator creates a new object and "spreads" the properties of the source object into it. This creates a shallow copy of the source object.

// You can also use these methods to copy properties from multiple source objects to a single target object:

const source1 = { foo: 1 };
const source2 = { bar: 2 };
const target = { ...source1, ...source2 };
console.log(target); // Output: {foo: 1, bar: 2}


// In this example, the spread operator (...) is used to copy the properties of source1 and source2 objects to the target object. The spread operator creates a new object and "spreads" the properties of both objects into it, creating a shallow copy of both objects.

// These methods are useful when you want to copy properties from one object to another, or when you want to create a shallow copy of an object. However, note that these methods only copy the properties at the first level of the object. If the object has nested objects or arrays, you need to use a deep copy method to copy the entire object.

