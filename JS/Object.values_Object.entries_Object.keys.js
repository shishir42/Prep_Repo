// The Object.values() method's behavior is similar to Object.entries() method but it returns an array of values instead [key,value] pairs.


const object = {
    a: "Good morning",
    b: 100,
  };
  
  for (let value of Object.values(object)) {
    console.log(`${value}`); // 'Good morning'
    100;
  }

//   You can use the Object.keys() method which is used to return an array of a given object's own property names, in the same order as we get with a normal loop. For example, you can get the keys of a user object,


const user = {
    name: "John",
    gender: "male",
    age: 40,
  };
  
  console.log(Object.keys(user)); //['name', 'gender', 'age']