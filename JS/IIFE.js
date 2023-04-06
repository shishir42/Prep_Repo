// IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,

(function () {
  // logic here
})();

// The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables with IIFE then it throws an error as below,

(function () {
    var message = "IIFE";
    console.log(message);
  })();
  console.log(message); //Error: message is not defined

//   One of the main advantages of using an IIFE is that it can help avoid naming conflicts and keep the global namespace clean. By wrapping code inside an IIFE, any variables or functions declared inside the function are not added to the global scope, which helps prevent conflicts with other scripts and libraries.


// Another advantage of using IIFE is that it can be used to create private variables and functions that are not accessible from outside the function. This is achieved by declaring variables and functions inside the IIFE, which creates a closure that protects them from being accessed from outside.

(function() {
    var counter = 0;
  
    function incrementCounter() {
      counter++;
      console.log(counter);
    }
  
    incrementCounter();
  })();

  
//   In this example, the counter variable and incrementCounter function are declared inside the IIFE and are not accessible from outside. The incrementCounter function can access and modify the counter variable because of the closure created by the IIFE. When the IIFE is invoked, it logs the value of the counter variable to the console, which is 1 in this case.





