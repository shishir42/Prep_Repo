// Throttling and debouncing are two techniques used to limit the frequency of execution of a function in JavaScript.

// Throttling: Throttling is a technique that limits the frequency of function execution to a certain rate. In other words, it allows a function to be executed at most once per specified interval. This is useful when we want to reduce the frequency of a function call, especially for functions that are computationally expensive or make network requests.

function throttle(func, limit) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      if (!timeout) {
        func.apply(context, args);
        timeout = setTimeout(function() {
          timeout = null;
        }, limit);
      }
    }
  }
  
  window.addEventListener('resize', throttle(function() {
    console.log('Window resized!');
  }, 1000));

//   In this example, the throttle function is defined which accepts a func (the function to be throttled) and a limit (the interval in milliseconds). The throttle function returns a new function that will be called when the original function is called, but at most once per specified interval. In the example, the resize event is throttled with a 1-second interval, so the function console.log('Window resized!') will be called at most once per second when the window is resized.

    // 1. function throttle(func, limit) { - Defines a function named throttle which accepts two arguments: func (the function to be throttled) and limit (the minimum interval between function calls).
    
    // 2. let timeout; - Declares a variable timeout without initializing it.
    
    // 3. return function() { - Returns a new function which is returned by the throttle function.
    
    // 4. const context = this; - Declares a constant variable context and sets it to the current value of this (which refers to the object that the function is called on).
    
    // 5. const args = arguments; - Declares a constant variable args and sets it to the value of arguments (an array-like object containing the arguments passed to the function).
    
    // 6. if (!timeout) { - Checks if the timeout variable is falsy (i.e., if it has not been set or has been cleared).
    
    // 7. func.apply(context, args); - Calls the original function (func) with the current context and args as its arguments.
    // 8. timeout = setTimeout(function() { - Sets the timeout variable to a new setTimeout function that will be executed after the limit time has elapsed.
    // 9. timeout = null; - Clears the timeout variable when the setTimeout function is executed.


// Debouncing: Debouncing is a technique that ensures that a function is executed only after a certain amount of time has passed since the last invocation. In other words, it waits for a certain time before executing a function, and if the function is called again during that time, the timer is reset. This is useful when we want to execute a function only when an event has stopped firing for a certain period of time, such as in search boxes, where we want to execute a search only after the user has stopped typing for a certain period.

function debounce(func, delay) {
    let timer;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function() {
        func.apply(context, args);
      }, delay);
    }
  }
  
  const searchInput = document.querySelector('#search');
  searchInput.addEventListener('input', debounce(function() {
    console.log('Searching...');
  }, 1000));


    
        // 1. function debounce(func, delay) { - Defines a function named debounce which accepts two arguments: func (the function to be debounced) and delay (the time to wait before executing the function).
    
        // 2. let timer; - Declares a variable timer without initializing it.
        
        // 3. return function() { - Returns a new function which is returned by the debounce function.
    
        // 4. const context = this; - Declares a constant variable context and sets it to the current value of this (which refers to the object that the function is called on).
        
        // 5. const args = arguments; - Declares a constant variable args and sets it to the value of arguments (an array-like object containing the arguments passed to the function).
    
        // 6. clearTimeout(timer); - Clears any existing setTimeout function associated with the timer variable.
        
        // 7. timer = setTimeout(function() { - Sets the timer variable to a new setTimeout function that will be executed after the delay time has elapsed.
    
        // 8. func.apply(context, args); - Calls the original function (func) with the current context and args as its arguments after the specified delay has elapsed.

  
//   In this example, the debounce function is defined which accepts a func (the function to be debounced) and a delay (the time in milliseconds to wait before executing the function). The debounce function returns a new function that will be called only after the specified delay has passed since the last invocation. In the example, the input event on a search input is debounced with a 1-second delay, so the function console.log('Searching...') will be called only after the user has stopped typing for 1 second. If the user continues to type within that time, the timer is reset, and the function will be called again after another 1 second of inactivity.