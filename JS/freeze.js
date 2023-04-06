// The freeze() method is used to freeze an object. Freezing an object does not allow adding new properties to an object,prevents from removing and prevents changing the enumerability, configurability, or writability of existing properties. i.e, It returns the passed object and does not create a frozen copy.

const obj = {
    prop: 100,
  };
  
  Object.freeze(obj);
  obj.prop = 200; // Throws an error in strict mode
  
  console.log(obj.prop); //100

//   Remember freezing is only applied to the top-level properties in objects but not for nested objects. For example, let's try to freeze user object which has employment details as nested object and observe that details have been changed.

const user = {
    name: 'John',
    employment: {
      department: 'IT'
    }
  };
  
  Object.freeze(user);
  user.employment.department = 'HR';

//   It causes a TypeError if the argument passed is not an object.

// Below are the main benefits of using freeze method,

// It is used for freezing objects and arrays.
// It is used to make an object immutable.

// What is the purpose of seal method

// The Object.seal() method is used to seal an object, by preventing new properties from being added to it and marking all existing properties as non-configurable. But values of present properties can still be changed as long as they are writable. Let's see the below example to understand more about seal() method

const object = {
  property: "Welcome JS world",
};
Object.seal(object);
object.property = "Welcome to object world";
console.log(Object.isSealed(object)); // true
delete object.property; // You cannot delete when sealed
console.log(object.property); //Welcome to object world

// Below are the main applications of Object.seal() method,

// It is used for sealing objects and arrays.
// It is used to make an object immutable.

// If an object is frozen using the Object.freeze() method then its properties become immutable and no changes can be made in them whereas if an object is sealed using the Object.seal() method then the changes can be made in the existing properties of the object.