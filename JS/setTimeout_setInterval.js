// setTimeout() is a built-in function in JavaScript that is used to schedule a function or piece of code to run after a specified delay in milliseconds. The syntax of the function is as follows:

// setTimeout(function, delay);

setTimeout(function() {
    alert('Hello, world!');
  }, 3000);

  
//setTimeout() is often used in web development to perform delayed or periodic actions, such as animating elements on a page, updating data from a server, or displaying a notification after a certain time has elapsed.

// Internally, setTimeout() uses the JavaScript event loop to schedule the function to be executed after the specified delay. When setTimeout() is called, it registers the function with the event loop and sets a timer for the specified delay. The event loop then continues to process other events and tasks while waiting for the timer to expire. Once the timer has expired, the function is added to the event queue and is executed when the event loop gets to it.

// It's important to note that setTimeout() does not guarantee an exact delay, as the actual delay may be affected by factors such as the load on the CPU or the number of other tasks in the event queue. Additionally, if the delay is set to 0, the function will be executed as soon as possible, but still after any currently-executing code has finished.

// setInterval() is a built-in function in JavaScript that is used to repeatedly execute a function or piece of code at a specified interval. The syntax of the function is as follows:

// setInterval(function, delay);

setInterval(function() {
    console.log('Hello, world!');
  }, 1000);

  
//   setInterval() is often used in web development to perform periodic actions, such as polling a server for updates or animating elements on a page.

// Internally, setInterval() also uses the JavaScript event loop to repeatedly schedule the function to be executed at the specified interval. When setInterval() is called, it registers the function with the event loop and sets a timer for the specified interval. The event loop then continues to process other events and tasks while waiting for the timer to expire. Once the timer has expired, the function is added to the event queue and is executed when the event loop gets to it. This process is repeated for each interval, creating a repeating cycle of execution.

// It's important to note that setInterval() does not guarantee an exact interval, as the actual interval may be affected by factors such as the load on the CPU or the number of other tasks in the event queue. Additionally, it's important to clear the interval using the clearInterval() function when you no longer want the function to execute at the specified interval.

// What is the purpose of clearTimeout method

// The clearTimeout() method is used to stop the execution of a function that was scheduled to run using the setTimeout() method.

// When a function is scheduled to run using setTimeout(), it returns a unique ID that can be used to identify and cancel the scheduled function using clearTimeout(). If the scheduled function has not yet been executed, calling clearTimeout() with the corresponding ID will prevent the function from executing.

let timeoutId = setTimeout(function() {
  console.log("This message will not be printed.");
}, 1000);

clearTimeout(timeoutId); // Cancel the scheduled function.

console.log("Timeout has been cancelled.");

// In this example, a function is scheduled to run after a delay of 1000 milliseconds using setTimeout(), and the ID of the scheduled function is stored in the timeoutId variable. However, before the function can be executed, clearTimeout() is called with the timeoutId to cancel the scheduled function. As a result, the scheduled function will not be executed, and only the message "Timeout has been cancelled" will be printed to the console.

// The clearTimeout() method is useful for canceling scheduled functions in situations where the delay is no longer needed, or where the function should not be executed for some reason. It is also commonly used in combination with setTimeout() to implement animations, where clearTimeout() can be used to cancel the animation if it needs to be stopped or interrupted.

// What is the purpose of clearInterval method

// The clearInterval() method is used to stop the execution of a function that was scheduled to run repeatedly using the setInterval() method.

// When a function is scheduled to run repeatedly using setInterval(), it returns a unique ID that can be used to identify and cancel the scheduled function using clearInterval(). If the scheduled function has not yet been executed, calling clearInterval() with the corresponding ID will prevent the function from executing again.

let count = 0;

let intervalId = setInterval(function() {
  count++;
  console.log("Count: " + count);
  
  if (count >= 5) {
    clearInterval(intervalId); // Stop the interval.
    console.log("Interval has been stopped.");
  }
}, 1000);

// In this example, a function is scheduled to run repeatedly every 1000 milliseconds using setInterval(), and the ID of the scheduled function is stored in the intervalId variable. The function increments a counter variable count and logs the current count to the console. However, after the count reaches 5, clearInterval() is called with the intervalId to stop the execution of the scheduled function. As a result, the scheduled function will no longer be executed, and the message "Interval has been stopped" will be printed to the console.

// The clearInterval() method is useful for stopping the execution of scheduled functions that are no longer needed or should not be executed for some reason. It is commonly used in situations where a function needs to be executed repeatedly, such as for polling data from a server or updating the UI of a web application.

// What is the difference between setTimeout, setImmediate and process.nextTick?
// Set Timeout: setTimeout() is to schedule execution of a one-time callback after delay milliseconds.
// Set Immediate: The setImmediate function is used to execute a function right after the current event loop finishes.
// Process NextTick: If process.nextTick() is called in a given phase, all the callbacks passed to process.nextTick() will be resolved before the event loop continues. This will block the event loop and create I/O Starvation if process.nextTick() is called recursively.


// setTimeout allows you to execute a block of code once after a specified delay. It takes two arguments: a callback function to execute after the delay, and the delay time in milliseconds.

// setInterval, on the other hand, allows you to execute a block of code repeatedly at a specified interval. It also takes two arguments: a callback function to execute, and the interval time in milliseconds.

