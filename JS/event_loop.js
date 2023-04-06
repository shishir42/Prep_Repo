// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif
// https://dev.to/lydiahallie/javascript-visualized-the-javascript-engine-4cdf

//The Event Loop is a queue of callback functions. When an async function executes, the callback function is pushed into the queue. The JavaScript engine doesn't start processing the event loop until the async function has finished executing the code. Note: It allows Node.js to perform non-blocking I/O operations even though JavaScript is single-threaded.

// Call Stack is a data structure for javascript interpreters to keep track of function calls(creates execution context) in the program. It has two major actions,

// Whenever you call a function for its execution, you are pushing it to the stack.
// Whenever the execution is completed, the function is popped out of the stack.
// Let's take an example and it's state representation in a diagram format

// function hungry() {
//   eatFruits();
// }
// function eatFruits() {
//   return "I'm eating fruits";
// }

// // Invoke the `hungry` function
// hungry();
// The above code processed in a call stack as below,

// Add the hungry() function to the call stack list and execute the code.
// Add the eatFruits() function to the call stack list and execute the code.
// Delete the eatFruits() function from our call stack list.
// Delete the hungry() function from the call stack list since there are no items anymore.

// The event queue follows the queue data structure. It stores async callbacks to be added to the call stack. It is also known as the Callback Queue or Macrotask Queue.

// Whenever the call stack receives an async function, it is moved into the Web API. Based on the function, Web API executes it and awaits the result. Once it is finished, it moves the callback into the event queue (the callback of the promise is moved into the microtask queue).

// The event queue constantly checks whether or not the call stack is empty. Once the call stack is empty and there is a callback in the event queue, the event queue moves the callback into the call stack. If there is a callback in the microtask queue as well, it is moved first. The microtask queue has a higher priority than the event queue.