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

// What are different event loops
// In JavaScript, there are multiple event loops that can be used depending on the context of your application. The most common event loops are:

// 1. The Browser Event Loop
// 2. The Node.js Event Loop

// - Browser Event Loop: The Browser Event Loop is used in client-side JavaScript applications and is responsible for handling events that occur within the browser environment, such as user interactions (clicks, keypresses, etc.), HTTP requests, and other asynchronous actions.

// - The Node.js Event Loop is used in server-side JavaScript applications and is responsible for handling events that occur within the Node.js runtime environment, such as file I/O, network I/O, and other asynchronous actions.

//  Heap(Or memory heap) is the memory location where objects are stored when we define variables. i.e, This is the place where all the memory allocations and de-allocation take place. Both heap and call-stack are two containers of JS runtime. Whenever runtime comes across variables and function declarations in the code it stores them in the Heap.

// Is Node.js completely single threaded
// Node is a single thread, but some of the functions included in the Node.js standard library(e.g, fs module functions) are not single threaded. i.e, Their logic runs outside of the Node.js single thread to improve the speed and performance of a program.

// Event loop is a fundamental concept in JavaScript that is responsible for handling asynchronous code execution in the language. In JavaScript, all I/O operations, such as user input, network requests, and timers, are handled asynchronously by the event loop.

// The event loop works as follows:

// When the JavaScript engine starts running, it initializes the event loop.

// Asynchronous tasks, such as I/O operations and timers, are scheduled by the engine on a separate task queue. These tasks are executed by the event loop when the JavaScript engine is free to execute them.

// The event loop continuously checks the task queue for pending tasks. If there are no tasks pending, the loop waits for new tasks to be added to the queue.

// When a task is added to the task queue, the event loop checks the call stack to see if it is empty. If the call stack is empty, the event loop picks the first task from the task queue and executes it. If the call stack is not empty, the task is added to the end of the task queue, and the event loop moves on to the next task.

// When a task is executed, it can add new tasks to the task queue, which will be executed by the event loop when it becomes free to do so.

console.log('1');

setTimeout(function() {
  console.log('2');
}, 2000);

console.log('3');


    // In this example, the console.log() statement with the value 1 is executed first. The setTimeout() function is called with a callback function that logs the value 2 to the console after a delay of 2 seconds. The console.log() statement with the value 3 is executed next.

    // At this point, the call stack is empty, and the event loop checks the task queue for pending tasks. The setTimeout() function has scheduled a task to execute the callback function after 2 seconds, so the event loop waits for 2 seconds.

    // After 2 seconds, the callback function is added to the task queue. The event loop checks the call stack, which is empty, and picks the callback function from the task queue to execute it. The function logs the value 2 to the console.

    // In summary, the event loop is the mechanism that allows JavaScript to handle asynchronous tasks, such as I/O operations and timers, by scheduling them on a task queue and executing them when the JavaScript engine is free to do so.

    // https://www.youtube.com/watch?v=vFJbKR6zfCE&pp=ygUVZXZlbnQgbG9vcCBpbiBkZXRhaWwg
    // https://www.youtube.com/watch?v=8zKuNo4ay8E
    //  https://www.youtube.com/watch?v=W-HQC_YUGBY
    // https://www.youtube.com/watch?v=8aGhZQkoFbQ
    //  https://www.youtube.com/watch?v=fuTWE0Mupzk
    //  https://www.youtube.com/watch?v=6YgsqXlUoTM
    //  https://www.youtube.com/watch?v=mR1SQn5nDIA
    //  https://www.youtube.com/watch?v=kWIt9uReHzY
    // https://www.youtube.com/watch?v=EQL9r8UlrPA
    //  https://www.youtube.com/watch?v=lqLSNG_79lI
    // https://www.youtube.com/watch?v=rUpxAeoR7PU
    //  https://www.youtube.com/watch?v=w-jULX0D5cg