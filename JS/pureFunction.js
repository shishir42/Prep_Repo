// In JavaScript, a pure function is a function that always returns the same output given the same input and has no side effects. This means that it does not modify any external state or data, and it does not rely on any external state or data that may change over time.
// Here's an example of a pure function:
function addNumbers(a, b) {
  return a + b;
}

// This function takes two numbers a and b as inputs and returns their sum. It will always return the same result for the same inputs, and it does not modify any external state or data.
// In contrast, here's an example of an impure function:

let counter = 0;
function incrementCounter() {
  counter++;
  return counter;
}

// This function increments a global variable counter and returns its value. It has side effects, since it modifies external state (the value of counter), and it relies on external state (the initial value of counter).
// Using pure functions can help make code more predictable, easier to test, and less error-prone.


// Pure function	                        Impure function
// It has no side effects	                It causes side effects
// It is always return the same result	  It returns different result on each call
// Easy to read and debug	                Difficult to read and debug because they are affected by external code

/********************************************************/
function areaOfRect(length, breadth){
  return length * breadth;
}

console.log(areaOfRect(10, 20));//200
console.log(areaOfRect(10, 20));//200
console.log(areaOfRect(10, 20));//200

console.log(areaOfRect(10, 10));//100
console.log(areaOfRect(10, 20));//200
console.log(areaOfRect(10, 30));//300

//Pure function are those function which are deterministic in nature 


/**Imure function*/
// ImPure function are those function which are non-deterministic in nature 
function test(length, breadth){
  const temp = Math.floor(Math.random()*5);
  return length * breadth * temp;
}

console.log(test(10, 20));//
console.log(test(10, 20));//

//Example:

//1.
//console.log('Hello world');
//console is object 
//console.log is function 

//console.log is pure functions or not 
let output = console.log('Hello world');
console.log(output) //undefined //and it is pure function

//2. pure function or not
function areaOfRect(length, breadth){
  console.log("Area is " + length * breadth); //side effect because of this it is impure function
  return length * breadth;
}

//3. 
function uncommongeek(){ //here uncommongeek is impure function because of side effects
  const words = ['spray', 'destruction'];
  const result = words.filter(words => words.length > 6); //here filter is pure function 
  console.log(result);
}

//Two points 
//1. output is deterministic 
//2. Has a side effects or not 

//why pure function are essentials 
//1. deterministic
//2. memorisation 
