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
// Easy to read and debug	                Difficult to read and debug because they are affected by extenal code