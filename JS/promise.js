// A JavaScript Promise is an object that represents the eventual completion or failure of an asynchronous operation, and its resulting value. A Promise can be in one of three states: pending, fulfilled, or rejected. When a Promise is fulfilled, it means that the asynchronous operation was successful and the Promise returns the resulting value. When a Promise is rejected, it means that the asynchronous operation failed, and the Promise returns the reason for the failure.

// Promises are commonly used in JavaScript when working with asynchronous operations such as fetching data from an API, making network requests, or reading and writing to a file. Here's an example of a Promise that simulates fetching data from an API:

// A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.

// The syntax of Promise creation looks like below,

const promiseObj = new Promise(function (resolve, reject) {
    // promise description
  });

  const promise = new Promise(
    (resolve) => {
      setTimeout(() => {
        resolve("I'm a Promise!");
      }, 5000);
    },
    (reject) => {}
  );
  
  promise.then((value) => console.log(value));

//   Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.

// Promises have three states:

// Pending: This is an initial state of the Promise before an operation begins
// Fulfilled: This state indicates that the specified operation was completed.
// Rejected: This state indicates that the operation did not complete. In this case an error value will be thrown.

const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: 'John' };
        resolve(data);
      }, 2000);
    });
  };
  
  fetchData().then(data => console.log(data));

//   In this example, the fetchData() function returns a new Promise that resolves after 2 seconds with some data. The then() method is used to handle the resolved value of the Promise, and output it to the console.

// Promises can also handle errors and rejection. Here's an example of a Promise that simulates a network request and handles a rejection:

const makeNetworkRequest = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const status = 404;
        if (status === 200) {
          resolve('Success!');
        } else {
          reject('Error!');
        }
      }, 2000);
    });
  };
  
  makeNetworkRequest()
    .then(response => console.log(response))
    .catch(error => console.error(error));


// In this example, the makeNetworkRequest() function returns a new Promise that resolves if the network request returns a status code of 200, and rejects if the status code is anything else. The then() method is used to handle the resolved value of the Promise, and the catch() method is used to handle the rejection reason.

// Promises are a powerful feature in JavaScript that can help developers write more efficient and organized code when dealing with asynchronous operations. However, it's important to be aware of some common pitfalls when working with Promises. Here are a few negative use cases to keep in mind:

// Callback hell: Promises can lead to "Promise hell" or "callback hell" if not used properly. This happens when too many nested Promises are used, leading to hard-to-read and hard-to-maintain code. One way to avoid this is to use Promise chaining, where the result of one Promise is passed to the next Promise in the chain.

// Uncaught Promise rejections: If a Promise is rejected but not caught, it can lead to unhandled exceptions and errors in the code. It's important to always include a .catch() method to handle Promise rejections and avoid uncaught errors.

// Promises are not cancellable: Once a Promise is initiated, it cannot be cancelled. This can be a problem if the Promise takes a long time to resolve or reject, and the user wants to cancel the operation. There are some workarounds to this issue, such as using a flag to indicate that the Promise should be cancelled, or using a third-party library that provides Promise cancellation functionality.

// Resolve Parameter
// The resolve parameter is used when we want the promise to succeed.

// Reject Parameter
// The reject is used when we want to catch the failure.


const addition = (a, b) =>
  new Promise((resolve, reject) => {
    if (typeof a == "number" && typeof b == "number") {
      resolve(a + b);
    } else {
        reject ("Not a Number")
    }
  });

// Resolve
// When we execute the Promise that we created in the above example, if it is resolved, the then block is executed and we can get the result from the callback function . In this example, this Promise will be resolved and return the summation of a & b, if and only if both a & b are numbers. The example is given below.

addition(10, 5)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

//   Reject
// The Promise will be rejected if any of the values of a or b is not a number & will be captured in the catch block.

addition(10, "5") 
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

//   Promise.all() Method
// 👉 The Promise.all() method accepts an iterable Object, such as an Array of promises as an input and returns a single promise that resolves to a result array of the input promises.
// 👉 When all input promises have been resolved or the iterable input does not contain a promise, the returned promise will be resolved.
// 👉 It rejects immediately when an input promise rejects or non-promise throws an error and will reject with that first rejection message / error message.
// 👉 It is often used when there are many asynchronous tasks involved that the overall code relies on to work successfully - all of the ones we want to do before we continue to execute the code.
// 👉 This method aggregates the results of multiple promises.

// Fulfillment of Promise.all()
// 🔹 When an empty iterable is passed, the promise returned by this method is executed synchronously. The resolved value will be an empty array.
// 🔹 When a non-empty iterable is passed, and all of the promises fulfill or are not promises,the promise returned by this method will be executed asynchronously.

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, "resolved");
  }); //will be resolved after 300ms
  
  const promise2 = 93; //non-promise
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "resolved2");
  }); // will be resolved after 100ms
  
  Promise.all([promise1, promise2, promise3])
    .then((values) => {
      console.log(values);
    })
    .catch((err) => {
      console.log(err);
    });
  
  //expected output: [ 'resolved', 93, 'resolved2' ]

//   Rejection of Promise.all() : Fail-Fast Behavior
// Promise.all() shows fail-fast behavior, that is, Promise.all() asynchronously rejects with the value of the promise that rejected, if any of the passed-in elements are rejected.

// For example, if we pass in two promises that resolve after a timeout and one promise that rejects immediately, then Promise.all() will reject immediately. It does not depend on if the other promises have resolved. The following example just does the same!

const pro1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 1000);
  });
  
  const pro2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 2000);
  });
  
  const pro3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("rejected"), 3000);
  });
  
  Promise.all([pro1, pro2, pro3])
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.log(error);
    });
  
    //expected output: rejected


//     Promise.any() Method
// 👉 The Promise.any() takes an iterable Object, such as an Array of promises as an input. Once a promise is fulfilled, a single promise is returned and the promise is resolved using the value of the promise.
// 👉 If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError (that groups together individual errors).

// Fulfillment of Promise.any()
// 🔹 Unlike Promise.all(), this method is used to return the first promise that fulfills.
// 🔹 It is short-circuited right after a promise is completed, so as soon as a promise is fulfilled, it will not wait for other promises to complete.
// 🔹 When a non-empty iterable is passed, and any of the promises fulfill, or are non-promises, then the promise returned by this method is fulfilled asynchronously.

// For Example, the following code snippet will resolve the QuickyDone promise first as it is resolved after 100ms and the other one resolves after 500ms. It will not wait for any other promise to be fulfilled but immediately return the first promise that resolves.

const SlowlyDone = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Done slowly");
  }); //resolves after 500ms
  
  const QuicklyDone = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Done quickly");
  }); //resolves after 100ms
  
  const Rejection = new Promise((resolve, reject) => {
    setTimeout(reject, 100, "Rejected"); //always rejected
  });
  
  Promise.any([SlowlyDone, QuicklyDone, Rejection])
    .then((value) => {
      console.log(value);
      //  QuicklyDone fulfils first
    })
    .catch((err) => {
      console.log(err);
    });
  
  //expected output: Done quickly

//   Rejection of Promise.any()
// 🔹 Promise.any() rejects with an AggregateError if no promise fulfils.
// 🔹 The AggregateError object represents an error when several errors need to be wrapped in a single error. It is thrown when multiple errors need to be reported by an operation.

const Rejection1 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, "Rejected"); //always rejected
  });
  
  Promise.any([Rejection1])
    .catch((err) => {
      console.log(err);
    });
  
  // expected output: "AggregateError: No Promise in Promise.any was resolved"

//   Promise.prototype.finally()
//   👉 The finally() method returns a Promise.
//   👉 When a Promise is completed, either resolved or rejected,this specified callback function is executed.
//   👉 This helps to avoid duplicating code in both the promise's then() and catch() handlers.
//   👉 The finally() method will help if you're going to do any processing or cleanup work once a promise is made, regardless of the outcome.

const addition1 = (a, b) =>
  new Promise((resolve, reject) => {
    if (typeof a == "number" && typeof b == "number") {
      resolve(a + b);
    } else {
      reject("Not a Number");
    }
  });

addition1(10, 5)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Numbers are added");
  });

  /* expected output: 15
                     Numbers are added */

// Promise.race() Method
// 👉 The Promise.race() method returns a Promise that is resolved or rejected, as soon as one of the promises in an iterable, such as an array, fulfills or rejects, with the value or reason from that Promise.
// 👉 The promise returned will be forever pending, if the iterable passed is empty.
// 👉 Promise.race() will resolve to the first value found in the iterable, if the iterable contains one or more non-promise value or an already settled promise.

const pro11 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 200);
  });
  
  const pro22 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 100);
  });
  
  Promise.race([pro11, pro22])
    .then((response) => {
      console.log(response); //output: two
    })
    .catch((err) => {
      console.log(err);
    });
  
  const pro33 = new Promise((resolve, reject) => {
    setTimeout(() => reject("rejected"), 300);
  });
  
  const pro44 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("four"), 400);
  });
  
  Promise.race([pro33, pro44])
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    }); //output: rejected

    // In the first case, pro2(100ms) is faster than pro1(200ms), so the output shows two. In the second case, pro3(300ms) is faster than pro4(400ms), so the promise rejects. So basically, Promise.race() takes the first settled Promise

    // If we take this same example and pass all the promises inside Promise.race(), it will return two as output, as the pro2 is the fastest promise to be settled in this case.

    const pro111 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("one"), 200);
      });
      
      const pro222 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("two"), 100);
      });
      
      const pro333 = new Promise((resolve, reject) => {
        setTimeout(() => reject("rejected"), 300);
      });
      
      const pro444 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("four"), 400);
      });
      
      Promise.race([pro111, pro222, pro333, pro444])
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      
      //output: two

//How can you tell which Promise failed in Promise.all()?

// When using Promise.all(), you can determine which promise failed by using the .catch() method to catch any errors that occur. The .catch() method will be called with the error object as an argument if any of the promises in the array reject.

// Additionally, you can use the second parameter of the .then() method to access the results of the resolved promises and catch any errors. For example:

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    // Handle resolved promises
  }, (error) => {
    // Handle rejected promise
    console.error(error);
  });


//   The second parameter of the .then() method is the rejection handler, which will be called if any of the promises in the array reject. The error object will contain information about which promise caused the rejection.

// When working with Promises in JavaScript, it's important to handle exceptions that might occur during the execution of a Promise. The recommended way to handle exceptions in Promises is to use the .catch() method.

// Here's an example that shows how to handle exceptions in a Promise using .catch():
const myPromise = new Promise((resolve, reject) => {
    // Do something that might throw an exception
    try {
      const result = someFunctionThatMightThrowAnException();
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
  
  myPromise
    .then((result) => {
      console.log('Promise resolved:', result);
    })
    .catch((error) => {
      console.error('Promise rejected:', error);
    });

//     In this example, we create a Promise that does some work that might throw an exception. We use a try-catch block to catch any exceptions that might be thrown during the execution of the Promise. If an exception is caught, we reject the Promise with the error that caused the exception.

// We then attach a .then() method to the Promise to handle the resolved value, and a .catch() method to handle any rejected Promise. If the Promise is resolved, we log the result to the console. If the Promise is rejected, we log the error to the console.

// By using the .catch() method to handle exceptions, we ensure that any errors that occur during the execution of the Promise are caught and handled appropriately.

// When NOT to use promises in javascript 

// Promises are a powerful tool in JavaScript for handling asynchronous operations and avoiding callback hell. However, there are some scenarios where using promises might not be the best approach. Here are a few examples:

// When dealing with synchronous operations: Promises are designed to handle asynchronous operations, and using them for synchronous operations can actually add unnecessary complexity to your code.

// When you only need to execute a single callback function: If you only need to execute a single callback function, using a promise might be overkill. In this case, you can simply use a regular callback function.

// When you need to support older browsers: Promises were introduced in ES6, which means they might not be supported in older browsers. If you need to support older browsers, you might need to use a library or a polyfill to use promises.

// When you need to handle complex error scenarios: Promises can make error handling easier, but they might not be the best approach for handling complex error scenarios. In some cases, you might need to use a more advanced error handling mechanism, such as try/catch blocks.

// When you need to handle streams of data: Promises are designed to handle a single asynchronous operation, but they might not be the best approach for handling streams of data. In this case, you might need to use a more advanced streaming API, such as the one provided by Node.js.

// Overall, while promises are a powerful tool in JavaScript, it's important to consider the specific needs of your application and the limitations of the technology you're using before deciding whether or not to use promises.

// What are situations to use callbacks instead of promises in Javascript?
// While promises are a more modern and preferred approach for handling asynchronous operations in JavaScript, there are still situations where callbacks can be useful. Here are a few examples:

// When dealing with legacy code or APIs that use callbacks: If you're working with an older codebase or a third-party library that still uses callbacks, you might need to use callbacks to maintain compatibility with that code.

// When you only need to execute a single asynchronous operation: If you only need to execute a single asynchronous operation and don't need to chain multiple operations together, using a callback function can be simpler and more straightforward.

// When you need to handle errors in a custom way: Promises have a built-in error handling mechanism, but sometimes you might need to handle errors in a more custom way. In this case, using a callback function can give you more control over how errors are handled.

// When you need to support older browsers: As mentioned before, promises were introduced in ES6 and might not be supported in older browsers. If you need to support older browsers, you might need to use callbacks as an alternative.

// When you need to work with APIs that don't support promises: Some APIs don't support promises, and you might need to use callbacks to interact with those APIs.

// Overall, while promises are generally the preferred approach for handling asynchronous operations in JavaScript, there are still situations where callbacks can be useful. It's important to consider the specific needs of your application and the limitations of the technology you're working with before deciding whether to use promises or callbacks.

// how do I use forEach() with promises with examples 
// In JavaScript, the forEach() method is used to iterate over an array and execute a function for each element in the array. While forEach() doesn't return a promise by default, you can use promises with forEach() to execute asynchronous operations for each element in the array. Here's an example:

const arr = [1, 2, 3, 4, 5];

arr.forEach((num) => {
  new Promise((resolve, reject) => {
    // Do some asynchronous operation here, for example:
    setTimeout(() => {
      console.log(num);
      resolve();
    }, 1000);
  });
})


// In this example, we're using forEach() to iterate over an array of numbers. For each number in the array, we're creating a new promise that will resolve after one second. Inside the promise, we're logging the number to the console and then resolving the promise.

// Note that in this example, we're not doing anything with the promises that are created by the forEach() loop. If you want to wait for all of the promises to resolve before continuing, you can use Promise.all() like this:

const arr1 = [1, 2, 3, 4, 5];

Promise.all(
  arr1.map((num) => {
    return new Promise((resolve, reject) => {
      // Do some asynchronous operation here, for example:
      setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000);
    });
  })
).then(() => {
  console.log('All promises resolved');
});

// In this example, we're using Promise.all() to wait for all of the promises created by the map() method to resolve. Inside the map() method, we're creating a new promise for each element in the array, just like before. Once all of the promises have resolved, the then() method is called and we log a message to the console.


// https://www.digitalocean.com/community/tutorials/understanding-javascript-promises
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261


// Why Is Promise Better Than Classic Callbacks?
// Promises are the new way of handling asynchronous functions. There are couple reasons why are Promises better than callbacks:

// With the extra callback parameter, we can be confused with what's input and what's the return value
// Callbacks don't handle errors thrown by functions that are used inside them (JSON.parse for example)
// Callback hell (executing functions in sequences)
// When we use callback function, they can depend on function that calls her
// Promises give us the ability to write independent functions, that are understandable and that can handle all errors with ease.

// Promises are great for:

// Monitoring synchronous operations
// That need to notify only once (usually completion or error)
// Coordinating or managing multiple asynchronous operations such as sequencing or branching async operations or managing multiple operations in flight at the same time
// Propagating errors from nested or deeply nested async operations
// Getting code ready for the use of async/await (or using it now with a transpiler)
// Operations that fit the Promise model where there are only three states: pending, fulfilled and rejected and where the state transitions from pending => fulfilled or from pending => rejected can then not change (a single one-way transition).
// Dynamically linking or chaining asynchronous operations (such as do these two async operations, examine the result, then decide which other async operations to do based on the intermediate result)
// Managing a mix of asynchronous and synchronous operations
// Automatically catching and propagating upwards any exceptions that occur in async completion callbacks (in plain callbacks these exceptions are sometimes silently hidden).
// Plain callbacks are good for things that promises cannot do:

// Synchronous notifications (such as the callback for Array.prototype.map())
// Notifications that may occur more than once (and thus need to call the callback more than once). Promises are one-shot devices and cannot be used for repeat notifications.
// Situations that cannot be mapped into the pending, fulfilled, rejected one-way state model.
// And, I'd also add EventEmitter to the mix.

// EventEmitters are great for:

// Publish/subscribe type notifications
// An interface with an event model, particular when events can occur more than once (like streams)
// Loose couplings when 3rd party code wants to participate or monitor something without any more of an API than an eventEmitter. No API to design. Just make an eventEmitter public and define some events and the data that goes with them.

// 6 Reasons Why JavaScript Async/Await Blows Promises Away
// As a language model, I am designed to remain unbiased and present factual information without preference or personal opinion. However, I can provide a summary of the potential advantages of using async/await over promises in JavaScript based on industry opinions:

// Async/await can make asynchronous code easier to read and understand: With async/await, you can write asynchronous code that looks like synchronous code, which can make it easier to understand and debug.

// Error handling is simpler and more intuitive with async/await: With async/await, you can use try/catch blocks to handle errors, which is a more familiar and intuitive way of handling errors than using .then() and .catch() with promises.

// Async/await can simplify the control flow of your code: With promises, you need to chain .then() methods together to create a sequence of asynchronous operations, which can make the code more complex and harder to read. With async/await, you can use sequential code that is easier to follow.

// Async/await can help you avoid callback hell: With async/await, you can avoid nested callback functions, which can lead to hard-to-read and maintainable code.

// Async/await can make it easier to write unit tests for asynchronous code: With promises, you need to use .then() and .catch() methods to handle asynchronous operations, which can make it harder to write unit tests. With async/await, you can write unit tests that are more straightforward and easier to understand.

// Async/await can improve the performance of your code: With promises, you need to create and chain multiple promises, which can create more overhead and potentially slower code. With async/await, you can write more concise and efficient code that can be faster and more performant.

// That being said, both promises and async/await are powerful tools for handling asynchronous operations in JavaScript, and the best approach depends on the specific needs and requirements of your application.

// how to cancel promise in javascript with example 

// In JavaScript, you can cancel a Promise by creating a custom Promise object that includes a cancellation function, which can be used to reject the Promise with a special error object that indicates the Promise was cancelled. Here's an example of how to do this:

class CancelablePromise extends Promise {
    constructor(executor) {
      let cancel;
  
      super((resolve, reject) => {
        executor(
          (value) => {
            if (typeof cancel === 'function') {
              cancel = undefined;
              return;
            }
            resolve(value);
          },
          (reason) => {
            if (reason instanceof CancelError) {
              reject(reason);
            } else {
              reject(reason);
            }
          }
        );
      });
  
      this.cancel = () => {
        if (typeof cancel === 'function') {
          cancel(new CancelError('Promise was cancelled'));
          cancel = undefined;
        }
      };
    }
  }
  
  class CancelError extends Error {
    constructor(message) {
      super(message);
      this.name = 'CancelError';
    }
  }

//   In this example, we're creating a custom CancelablePromise class that extends the built-in Promise class. We're also defining a custom CancelError class that extends the built-in Error class and is used to indicate that the Promise was cancelled.

// Inside the CancelablePromise constructor, we're creating a cancel function that can be used to reject the Promise with a CancelError. We're also defining an executor function that takes two arguments: a resolve function and a reject function.

// In the resolve function, we're checking if the cancel function has been called. If it has, we're ignoring the resolve call and returning early. If it hasn't, we're calling the built-in resolve function with the value.

// In the reject function, we're checking if the reason for rejection is a CancelError. If it is, we're rejecting the Promise with the CancelError object. If it's not, we're rejecting the Promise with the reason.

// Finally, we're defining a cancel method on the CancelablePromise object that can be used to cancel the Promise. When this method is called, we're checking if the cancel function has been defined. If it has, we're calling it with the CancelError object and setting cancel to undefined. If it hasn't, we're doing nothing.

// Here's an example of how to use the CancelablePromise class:

const promise = new CancelablePromise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      resolve('Promise resolved successfully');
    }, 5000);
  
    promise.cancel = () => {
      clearTimeout(timeoutId);
      reject(new CancelError('Promise was cancelled'));
    };
  });
  
  promise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      if (error instanceof CancelError) {
        console.log('Promise was cancelled');
      } else {
        console.error(error);
      }
    });
  
  promise.cancel();

// In this example, we're creating a new CancelablePromise that will resolve after 5 seconds. We're also defining a cancel method on the Promise object that can be used to cancel the Promise by clearing the timeout and rejecting the Promise with a CancelError.

// We're then calling the then() method on the Promise to log the result, and the catch() method to handle errors. If the error is a CancelError, we're logging a message indicating that the Promise was cancelled. If the error is not a CancelError, we're logging  

// https://benlesh.medium.com/promise-cancellation-is-dead-long-live-promise-cancellation-c6601f1f5082


// Promise Anti patterns
// Promises are a powerful tool for handling asynchronous operations in JavaScript, but there are also some common anti-patterns that developers should be aware of to avoid potential pitfalls. Here are some examples of promise anti-patterns:

// Creating too many Promises: Promises should be used judiciously, and developers should avoid creating too many promises unnecessarily. Creating too many promises can lead to memory leaks and performance issues.

// Mixing Promises with callbacks: Mixing Promises with callbacks can lead to confusing and hard-to-read code. It's generally best to use one approach consistently throughout your codebase.

// Not handling Promise rejections: Failing to handle Promise rejections can lead to unexpected errors and crashes. Always make sure to include a .catch() block in your Promise chains to handle any errors that may occur.

// Nesting Promises: Nesting Promises can lead to deeply nested code that is difficult to read and maintain. Instead, try to flatten your Promise chains by using methods like .then() and .catch().

// Ignoring Promise results: Promises are designed to return values or errors, so ignoring the result of a Promise can lead to unexpected behavior. Always make sure to handle the result of a Promise in some way, even if it's just logging it to the console.

// Using Promise constructors unnecessarily: Using Promise constructors (new Promise()) should be avoided unless there is no other way to wrap an asynchronous operation in a Promise. In many cases, there are built-in methods like Promise.resolve() and Promise.reject() that can be used instead.

// Avoiding these Promise anti-patterns can help you write more effective and maintainable asynchronous code in JavaScript. It's important to use Promises carefully and thoughtfully, and to always be on the lookout for potential pitfalls and inefficiencies.

// What are the states of a promise?
// Pending
// Fulfilled
// Rejected

// Can we use await only with promises?
// No, we can use await with promise as well as any object that implements a then function.

const thenable = {
    then: function(callback) {
      setTimeout(() => callback(2), 100);
    }
  };
  
  const value = await thenable;
  console.log(value); // 2

//   What is the output of the following code?
const promise = new Promise((resolve, reject) => {
    reject(Error('Some error occurred'));
  })
  promise.catch(error => console.log(error.message));
  promise.catch(error => console.log(error.message));

//   Some error occurred
// Some error occurred

// You can add multiple handlers (catch, then, and finally) with a single promise.

// How can I write a sleep function using a promise?
function sleep(ms) {
    return new Promise(res => {
        setTimeout(res, ms);
    });
}

// What is the output of the following code?
const promise = new Promise((resolve, reject) => {
    reject(Error('Some Error Occurred'));
  })
  .catch(error => console.log(error))
  .then(error => console.log(error));

//   Some error occurred
// undefined

// The catch function implicitly returns a promise, which can obviously be chained with a then. Since nothing is returned from the catch block, when error is logged in the then block it displays undefined.

// What is the output of the following code?

const promise = new Promise(res => res(2));
promise.then(v => {
        console.log(v);
        return v * 2;
    })
    .then(v => {
        console.log(v);
        return v * 2;
    })
    .finally(v => {
        console.log(v);
        return v * 2;
    })
    .then(v => {
        console.log(v);
    });

//     2
// 4
// undefined
// 8

// The finally block doesn’t receive any value, and anything returned from finally is not considered in the then block so the output from the last then is used.


// How do you create a new Promise object in JavaScript?
// You can create a new Promise object by using the Promise() constructor function. This function takes in a callback function as its first argument. The callback function takes in two arguments, resolve and reject. These functions are used to resolve or reject the promise, respectively.

// Is it possible to chain promises together? If yes, then how?
// Yes, it is possible to chain promises together. This can be done by returning a promise from the then() function of a previous promise. The returned promise will then be resolved or rejected based on the resolution of the promise that it is chained to.

// What are the different states that a promise can be in during its lifetime?
// A promise can be in one of three states during its lifetime: pending, fulfilled, or rejected. A promise starts in the pending state, and then either transitions to the fulfilled state if the promise is successfully completed, or the rejected state if the promise is not completed.

// Can you explain what async/await means in the context of JavaScript and NodeJS?
// Async/await is a way of writing asynchronous code that makes it look and feel like synchronous code. With async/await, you can write code as if it were running in a single thread, even though it is actually running in multiple threads. This makes asynchronous code much easier to read and write.

// Can you explain what the .then() method does?
// The .then() method is used to specify what should happen when a promise is resolved. This is usually used to chain together multiple promises, so that each promise is executed in order. The .then() method can also take two arguments: a success callback and a failure callback. The success callback will be executed if the promise is resolved, and the failure callback will be executed if the promise is rejected.

// Can you explain what the .catch() method does?
// The .catch() method is used to handle errors that may occur in a Promise chain. The .catch() method takes a single argument, which is a function that will be executed if an error occurs. The .catch() method is typically used after a .then() method to handle any errors that may have occurred in the .then() method.

// What does the .all() method do when working with promises?
// The .all() method is used to take an array of promises and wait for them all to resolve before running the code inside of the .then() method. This is useful if you have a number of asynchronous tasks that need to be completed before moving on.

// What does the .race() method do when working with promises?
// The .race() method is used to take an array of promises and return a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects. This is useful for situations where you want to cancel a Promise if it takes too long to resolve.

// What does the .resolve() method do when working with promises?
// The .resolve() method is used to resolve a promise and return the corresponding value. This is typically used when a promise has been fulfilled and the corresponding value is known.


// What does the .reject() method do when working with promises?
// The .reject() method is used when you want to indicate that a promise has failed. This is typically used when you want to catch an error that has occurred inside of a promise.

// What is your understanding of callbacks in the context of JavaScript and NodeJS?
// A callback is a function that is passed as an argument to another function and is executed after the outer function has completed. In the context of JavaScript and NodeJS, callbacks are often used to handle asynchronous operations.

// What is the difference between synchronous and asynchronous programming?
// In synchronous programming, the code is executed line by line in the order that it is written. This means that each line of code must be completed before the next line can begin. Asynchronous programming, on the other hand, allows for code to be executed out of order. This means that lines of code can be executed even if the previous line has not yet finished.

// When do you think it’s appropriate to convert a callback-based function into a promise-based function?
// I think it’s appropriate to convert a callback-based function into a promise-based function when you want to make sure that a certain task is completed before moving on to the next task. For example, if you have a function that fetches data from a server, you might want to convert it into a promise-based function so that you can be sure that the data has been fetched before you try to use it.

// What is the advantage of using promises over callbacks?
// Promises provide a simpler and cleaner interface for dealing with asynchronous code than callbacks. With promises, you can avoid callback hell, and you don’t have to worry about keeping track of which callback goes with which function. Promises also make it easier to handle errors, because you can use .catch() instead of having to remember to add an error-handling callback.

// Are there any downsides to using promises?
// While promises provide a cleaner and more convenient way to handle asynchronous code, they do have some potential downsides. One is that they can make code more difficult to debug, since the flow of execution is not always easy to follow. Additionally, if not used carefully, promises can lead to what is known as “callback hell,” where code can become excessively nested and difficult to read.

// What is the main difference between Promises and Futures?
// The main difference between Promises and Futures is that Futures are used for synchronous programming while Promises are used for asynchronous programming. With Futures, the result of a computation is available immediately after it is started. With Promises, the result of a computation is not available until it is complete, but the computation can continue while the result is being computed.

// https://levelup.gitconnected.com/vimp-javascript-promise-implementation-challenges-5a4f120d8606

// Provide a practical example of using a Promise in a real-world scenario.
// Let's say you are building an e-commerce website and need to retrieve the list of products from an API endpoint. The API endpoint may take some time to respond, so you want to make sure your website doesn't freeze while waiting for the response. You can use a Promise to handle this asynchronous operation.

function getProducts() {
    return new Promise((resolve, reject) => {
      fetch('https://api.example.com/products')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to retrieve products');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
  getProducts()
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });

    
//     In this example, the getProducts() function returns a Promise that wraps the fetch() API call. The fetch() API returns a Promise that resolves to a Response object, which we then check for errors and parse the JSON data. If there are no errors, we call resolve() with the data, which allows the then() method to be called with the data when the Promise is resolved. If there is an error, we call reject() with the error, which allows the catch() method to be called with the error when the Promise is rejected.

// In the last lines, we call the getProducts() function and use the then() method to handle the resolved data, and the catch() method to handle any errors that may occur. This allows us to handle the asynchronous operation in a clean and readable way, without blocking the main thread of the website.

// How can you implement error handling in a Promise chain?

// Error handling in a Promise chain can be implemented using the .catch() method, which allows you to handle any errors that occur during the chain. Here's an example:

function myAsyncFunction() {
    return new Promise((resolve, reject) => {
      // asynchronous operation that may throw an error
      setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
          reject(new Error('Error occurred'));
        } else {
          resolve('Success');
        }
      }, 1000);
    });
  }
  
  myAsyncFunction()
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });

    // In this example, the myAsyncFunction() function returns a Promise that resolves to a success message if a random number is greater than or equal to 0.5, or rejects with an error if the random number is less than 0.5.

    // In the Promise chain, the .then() method is used to handle the resolved result, and the .catch() method is used to handle any errors that occur during the chain. If an error occurs, the Promise chain will be immediately rejected, and the catch() method will be called with the error object.
    
    // You can also chain multiple .catch() methods together to handle different types of errors that may occur during the chain.
    
    // It's important to include error handling in your Promise chains to ensure that any errors are caught and handled properly, rather than causing unexpected behavior or crashes in your code.
    
    
    // Explain the difference between a resolved and rejected Promise.
    // In JavaScript, a Promise is an object that represents a value that may not be available yet, but will be resolved or rejected in the future.

// A resolved Promise is one that has successfully completed its asynchronous operation and returned a value. When a Promise is resolved, any .then() methods that are chained to the Promise will be called with the resolved value as the argument.

// For example, consider the following Promise:

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });
  
  myPromise.then(result => {
    console.log(result);
  });

//   In this example, the myPromise Promise resolves after 1 second and returns the string 'Hello, world!'. The .then() method is then called with the resolved value as the argument, which logs 'Hello, world!' to the console.

//   On the other hand, a rejected Promise is one that encountered an error during its asynchronous operation and was not able to return a value. When a Promise is rejected, any .catch() methods that are chained to the Promise will be called with the rejection reason as the argument.
  
//   For example, consider the following Promise:
  
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Something went wrong'));
    }, 1000);
  });
  
  myPromise.catch(error => {
    console.error(error);
  });

//   In this example, the myPromise Promise is rejected after 1 second with an Error object containing the message 'Something went wrong'. The .catch() method is then called with the rejection reason as the argument, which logs the error to the console.

//   In summary, a resolved Promise is one that successfully completed its asynchronous operation and returned a value, while a rejected Promise is one that encountered an error during its asynchronous operation and was not able to return a value.

// Explain how to debug a Promise, and describe common techniques for performing this process.

// Debugging a Promise in JavaScript can sometimes be tricky because Promises operate asynchronously and are designed to handle errors in a non-blocking manner. However, there are some techniques that you can use to effectively debug a Promise and track down any errors that may be occurring. Here are some common techniques:

// Use console.log() statements: Inserting console.log() statements at various points in your Promise chain can help you identify where the Promise is failing. This can help you narrow down the scope of the problem and identify which part of the Promise chain is causing the issue.

// Use the .catch() method: The .catch() method is used to handle errors that occur during the Promise chain. Adding a .catch() method to your Promise chain can help you identify and handle errors that are being thrown. The .catch() method will receive the error that was thrown and can be used to log or handle the error.

// Use the Promise.all() method: The Promise.all() method can be used to handle multiple Promises in parallel. If you have multiple Promises that are dependent on each other and one of them is failing, it can be difficult to identify which Promise is causing the issue. Using Promise.all() can help you identify which Promise is failing by returning an array of rejected Promises.

// Use breakpoints and debugging tools: Set breakpoints in your code using a debugger like Chrome DevTools or Node.js debugger. This will allow you to step through your code and see exactly what is happening in your Promise chain. You can also inspect variables and see the value of Promises at different points in your code.

// Use third-party libraries: There are several third-party libraries available that can help you debug your Promises. One such library is bluebird, which provides additional functionality and debugging tools for Promises.

// In summary, debugging a Promise can be challenging due to their asynchronous nature, but using a combination of console.log() statements, .catch() methods, Promise.all(), breakpoints and debugging tools, and third-party libraries can help you identify and fix errors in your Promise chain.

// How can you handle multiple Promises with different durations and resolve them in a specific order?
// You can handle multiple Promises with different durations and resolve them in a specific order using a combination of Promise.all() and Promise.race(). Here's an example:

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 2000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 2 resolved');
    }, 1000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 3 resolved');
    }, 3000);
  });
  
  Promise.all([promise1, promise2, promise3])
    .then(results => {
      console.log(results);
    })
    .catch(error => {
      console.error(error);
    });


    // In this example, we create three Promises with different durations using setTimeout(). Then, we use Promise.all() to wait for all three Promises to resolve before logging their results to the console. Promise.all() takes an array of Promises as its argument and returns a new Promise that resolves with an array of results when all of the input Promises have resolved. If any of the input Promises reject, Promise.all() immediately rejects with the reason of the first rejected Promise.

    // If you want to resolve the Promises in a specific order, you can use Promise.race(). Promise.race() takes an array of Promises and returns a new Promise that resolves with the result of the first resolved Promise. Here's an example:    
  
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Promise 1 resolved');
        }, 2000);
      });
      
      const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Promise 2 resolved');
        }, 1000);
      });
      
      const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Promise 3 resolved');
        }, 3000);
      });
      
      Promise.race([promise1, promise2, promise3])
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.error(error);
        });

        // In this example, we use Promise.race() to wait for the first Promise to resolve and then log its result to the console. Since promise2 resolves before the other two Promises, its result is logged first. If any of the input Promises reject, Promise.race() immediately rejects with the reason of the first rejected Promise.

        // What is the difference between a Promise and an Observable in JavaScript?

//         Promises and Observables are both constructs in JavaScript for handling asynchronous operations, but they have some fundamental differences.

// A Promise represents a single value that may not be available yet, but will be resolved eventually. Once a Promise is resolved, it will stay in that state forever. Promises have a .then() method that takes two callbacks - one to handle the resolved value and one to handle errors if the Promise is rejected. Promises can only emit a single value or error, and once that value or error is emitted, the Promise is considered "complete" and cannot emit any more values.

// On the other hand, an Observable is a stream of values that can emit multiple values over time, including an error or a completion signal. Observables have methods like .subscribe() to listen for values emitted by the Observable, and .pipe() to transform and manipulate the values emitted by the Observable. Observables are lazy, meaning that they will only start emitting values when someone subscribes to them. Observables can emit zero or more values, errors, and a completion signal, which indicates that no more values will be emitted.

// Here's a summary of the main differences between Promises and Observables:

// Promises represent a single value, while Observables represent a stream of values.
// Promises emit either a single value or an error, while Observables can emit zero or more values, an error, or a completion signal.
// Promises are not cancellable, while Observables can be cancelled using the .unsubscribe() method.
// Promises are eager, meaning that they will execute their logic immediately, while Observables are lazy, meaning that they will only execute their logic when someone subscribes to them.
// In summary, Promises are useful for handling single asynchronous operations that will eventually resolve to a single value or error, while Observables are useful for handling streams of asynchronous data that can emit multiple values over time, including an error or a completion signal.


// How can you optimise performance when using Promises in JavaScript?

// Here are some tips for optimizing performance when using Promises in JavaScript:

// Avoid creating unnecessary Promise objects: Every time you create a new Promise object, it adds some overhead to your code. If you don't need a Promise, don't create one. For example, if a function returns a Promise, and you want to call that function just to check a condition, it's better to use a simple if statement instead of creating a new Promise object.

// Use Promise.all() for parallel operations: If you have multiple Promises that can be executed in parallel, use Promise.all() to execute them at the same time. This can significantly improve the performance of your code, especially if the Promises take a long time to execute.

// Use Promise.race() for time-sensitive operations: If you have multiple Promises, and you want to get the result of the first one that resolves (or rejects), use Promise.race(). This can be useful for time-sensitive operations, where you want to get the result as soon as possible.

// Avoid nesting Promises: Nesting Promises can make your code difficult to read and debug. Instead of nesting Promises, use the .then() method to chain them together. This can make your code easier to read and maintain.

// Use async/await for readability: async/await is a syntactic sugar for working with Promises. It can make your code easier to read and understand, especially if you have multiple Promises that need to be chained together.

// Use a Promise library or framework: There are many Promise libraries and frameworks available that can help you optimize the performance of your code. For example, some libraries provide methods for handling Promises in batches, which can improve the performance of your code if you have many Promises to handle.

// How can you wrap a non-Promise value in a Promise in JavaScript?
// You can wrap a non-Promise value in a Promise in JavaScript by using the Promise.resolve() method. This method takes a value as its parameter and returns a Promise that is resolved with that value. Here's an example:

const myValue = 42;
const myPromise = Promise.resolve(myValue);

// In this example, myValue is a non-Promise value (a number), and myPromise is a Promise that is resolved with that value. You can then use myPromise like any other Promise object.

// If the value you want to wrap in a Promise is already a Promise object, Promise.resolve() will simply return that object. This can be useful if you want to make sure that a function always returns a Promise, even if the value it returns is already a Promise.

function myFunction() {
    return Promise.resolve(42);
  }
  
  const myPromise = myFunction();

// In this example, myFunction() returns a Promise that is resolved with the value 42. However, since myFunction() always returns a Promise (even if the value it returns is already a Promise), you can be sure that myPromise is a Promise object.  

// Explain the concept of Promise composition and how to use it in real-world scenarios.

// Promise composition is the process of combining multiple Promises to create a new Promise. It allows you to build more complex asynchronous workflows by chaining together multiple asynchronous operations.

// There are two main ways to compose Promises: chaining and parallel composition.

// Chaining is the process of chaining multiple Promises together to create a sequence of asynchronous operations. You can use the .then() method to chain Promises together. When the first Promise resolves, the callback function in the .then() method is called, and it can return a new Promise object. This new Promise object is then passed to the next .then() method in the chain, and so on. Here's an example:

getUser()
  .then(user => {
    return getOrders(user.id);
  })
  .then(orders => {
    console.log(orders);
  })
  .catch(error => {
    console.error(error);
  });

//   In this example, getUser() and getOrders() are both asynchronous functions that return Promises. The first .then() method chains the two Promises together by returning the Promise returned by getOrders().

//   Parallel composition is the process of executing multiple Promises in parallel and waiting for all of them to complete before continuing. You can use the Promise.all() method to execute multiple Promises in parallel. Here's an example:

const promise1 = fetchDataFromServer1();
const promise2 = fetchDataFromServer2();
const promise3 = fetchDataFromServer3();

Promise.all([promise1, promise2, promise3])
  .then(([data1, data2, data3]) => {
    console.log(data1, data2, data3);
  })
  .catch(error => {
    console.error(error);
  });

//   In this example, fetchDataFromServer1(), fetchDataFromServer2(), and fetchDataFromServer3() are all asynchronous functions that return Promises. The Promise.all() method takes an array of Promises as its parameter and returns a new Promise that resolves when all of the Promises in the array have resolved. The callback function in the .then() method receives an array of results, one for each Promise in the array.

//   In real-world scenarios, Promise composition can be used for many different tasks, such as fetching data from multiple servers, executing a series of tasks in a specific order, or retrying a failed operation. By chaining or parallelizing Promises, you can build more complex and efficient asynchronous workflows that can handle a wide range of use cases.

// What is the difference between a Promise and a Future in JavaScript?
// In JavaScript, a Promise is a built-in object that represents a value that may not be available yet, but will be resolved at some point in the future. A Future is not a built-in object in JavaScript, but it is a concept that can be implemented using libraries or frameworks such as Bluebird or Reactor.

// The main difference between a Promise and a Future is that a Promise represents a value that is currently unknown but will be resolved at some point in the future, while a Future represents a computation that is currently ongoing or has not yet started. A Future is typically used for computations that are not immediately available, while a Promise is used for values that may not be immediately available but will be resolved eventually.

// Another difference between a Promise and a Future is the way they handle errors. In a Promise, errors are handled using the .catch() method, while in a Future, errors are handled using the .onError() method. Additionally, Futures can be cancelled, while Promises cannot.

// Both Promises and Futures are used to handle asynchronous operations and provide a way to handle the result of an asynchronous operation when it becomes available. Promises are the more commonly used of the two, as they are built into JavaScript and widely supported by browsers and other JavaScript environments. Futures are a less common concept in JavaScript, but can be useful for certain types of computations or operations.

// How can you test Promises in JavaScript and what are some common techniques to perform this?
// Testing Promises in JavaScript can be done using a variety of techniques. Here are some common techniques:

// Using assertions: You can use assertions to test whether the Promise resolves or rejects as expected. For example, if you have a Promise that is expected to resolve to a specific value, you can use an assertion library like Jest or Chai to test that the Promise does in fact resolve to that value.

// Using async/await: You can use the async and await keywords to test Promises in a synchronous way. This involves wrapping the Promise in an async function and using the await keyword to wait for the Promise to resolve or reject. You can then use assertions to test the result.

// Using the done callback: If you are using a testing framework like Mocha, you can use the done callback to test Promises. This involves passing the done callback to the test function and calling it when the Promise resolves or rejects. For example:

it('should resolve the Promise', function (done) {
    myPromise().then(function () {
      // Assertion here
      done();
    });
  });

  
// Using mock timers: If your Promise involves a timeout, you can use mock timers to test it. This involves using a library like Sinon to mock the timer functions and control the timing of the Promise. For example:

it('should resolve the Promise after 1 second', function () {
    const clock = sinon.useFakeTimers();
    const myPromise = someFunction();
    clock.tick(1000);
    return myPromise.then(function () {
      // Assertion here
    });
  });

//  These are just some of the techniques that can be used to test Promises in JavaScript. The best approach will depend on the specific scenario and testing framework being used.


// Provide an example of how to use Promises to handle parallel asynchronous operations.

// Promises can be used to handle parallel asynchronous operations, allowing multiple asynchronous tasks to be executed simultaneously and then aggregated when all the tasks have completed. Here's an example:

function fetchAllData() {
    const promise1 = fetch('/data1.json');
    const promise2 = fetch('/data2.json');
    const promise3 = fetch('/data3.json');
    
    return Promise.all([promise1, promise2, promise3])
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(data => {
        // Handle the data here
        console.log(data);
      })
      .catch(error => {
        // Handle the error here
        console.error(error);
      });
  }

  
//   In this example, the fetchAllData function fetches data from three different JSON files using the fetch function, which returns a Promise. The three Promises are stored in variables promise1, promise2, and promise3.

// Then, the Promise.all method is used to execute all three Promises in parallel. This method takes an array of Promises as its argument and returns a new Promise that resolves when all of the Promises in the array have resolved. In this case, it returns an array of Responses.

// The then method is then used to extract the JSON data from each response. This method takes a callback function that is executed when the Promise is resolved, with the resolved value passed as an argument to the function. In this case, the callback function is passed an array of Responses and maps them to an array of Promises that will eventually resolve to the JSON data of each Response.

// Another Promise.all method is used to wait for all the JSON data to be retrieved. This method takes an array of Promises as its argument and returns a new Promise that resolves when all of the Promises in the array have resolved. In this case, it returns an array of JSON data.

// Finally, the then method is used to handle the retrieved data, and the catch method is used to handle any errors that may occur during the process.

// This example demonstrates how Promises can be used to handle parallel asynchronous operations and aggregate the results once all of the tasks have completed.

// What is the purpose of the Promise.all() method?
// The Promise.all() method takes an array of Promises and returns a new Promise that resolves when all of the input Promises have resolved.

// What is the purpose of the Promise.race() method?
// The Promise.race() method takes an array of Promises and returns a new Promise that resolves or rejects as soon as one of the input Promises resolves or rejects.

// What is the purpose of the Promise.any() method?
// The Promise.any() method takes an array of Promises and returns a new Promise that resolves as soon as one of the input Promises resolves, or rejects if all of the input Promises reject.

// What is the purpose of the Promise.allSettled() method?
// The Promise.allSettled() method takes an array of Promises and returns a new Promise that resolves with an array of objects, each representing the fulfillment or rejection of one of the input Promises.

// How do you convert a callback-based function to a Promise-based function?
// You can use the util.promisify() method in Node.js to convert a callback-based function to a Promise-based function.

// What is the purpose of the finally() method?
// The finally() method is used to execute code after a Promise has resolved or rejected, regardless of the outcome.

// What is the purpose of the async keyword in JavaScript?
// The async keyword is used to define an asynchronous function that returns a Promise.

// What is the purpose of the await keyword in JavaScript?
// The await keyword is used to pause the execution of an async function until a Promise is resolved or rejected.

// How do you handle errors in an async/await function?
// You can use a try/catch block to handle errors that occur in an async/await function.

// What is the purpose of the Promise.prototype.then() method?
// The Promise.prototype.then() method is used to handle the successful resolution of a Promise.

// What is the purpose of the Promise.prototype.catch() method?
// The Promise.prototype.catch() method is used to handle errors that occur during the execution of a Promise.

// What is the purpose of the Promise.prototype.finally() method?
// The Promise.prototype.finally() method is used to execute code after a Promise has resolved

// https://blog.greenroots.info/common-mistakes-in-using-javascript-promises

// What are the main rules of promise

// Promises are a core feature of modern JavaScript that provide a cleaner and more intuitive way to handle asynchronous operations. The main rules of promises are:

// A promise represents a value that may not be available yet: When you create a promise, you're creating a container for a value that may not be available yet. The promise will either be resolved with the value or rejected with an error.

// Promises are asynchronous: When you create a promise, the code following the promise creation will continue to execute immediately. The promise resolution or rejection will happen later, at some point in the future.

// Promises have three states: A promise can be in one of three states: "pending," "fulfilled," or "rejected." When a promise is created, it's in the pending state. When the promise is resolved with a value, it's in the fulfilled state. When the promise is rejected with an error, it's in the rejected state.

// A promise is settled once: Once a promise is settled (i.e., resolved or rejected), it cannot be settled again. The settled value or error is cached and will be returned if the promise is queried again.

// Promises are composable: Promises can be chained together using the .then() method. This allows you to handle the results of asynchronous operations in a clean and readable way.

// Promises have error handling: Promises have built-in error handling through the use of the .catch() method. This allows you to handle errors that occur during asynchronous operations.

// What are the different ways to deal with Asynchronous Code
// Below are the list of different ways to deal with Asynchronous code.

// Callbacks
// Promises
// Async/await
// Third-party libraries such as async.js,bluebird etc

// How to cancel a fetch request
const controller = new AbortController();
const { signal } = controller;

fetch("http://localhost:8000", { signal })
  .then((response) => {
    console.log(`Request 1 is complete!`);
  })
  .catch((e) => {
    if (e.name === "AbortError") {
      // We know it's been canceled!
    }
  });

fetch("http://localhost:8000", { signal })
  .then((response) => {
    console.log(`Request 2 is complete!`);
  })
  .catch((e) => {
    if (e.name === "AbortError") {
      // We know it's been canceled!
    }
  });

// Wait 2 seconds to abort both requests
setTimeout(() => controller.abort(), 2000);

// How do you check an object is a promise or not

// If you don't know if a value is a promise or not, wrapping the value as Promise.resolve(value) which returns a promise


function isPromise(object) {
  if (Promise && Promise.resolve) {
    return Promise.resolve(object) == object;
  } else {
    throw "Promise not supported in your environment";
  }
}

var i = 1;
var promise = new Promise(function (resolve, reject) {
  resolve();
});

console.log(isPromise(i)); // false
console.log(isPromise(promise)); // true

// Another way is to check for .then() handler type


function isPromise(value) {
  return Boolean(value && typeof value.then === "function");
}
var i = 1;
var promise = new Promise(function (resolve, reject) {
  resolve();
});

console.log(isPromise(i)); // false
console.log(isPromise(promise)); // true

// Concurrency and parallelism are two related but distinct concepts in computer science, and both can be used with Promises in JavaScript.

// Concurrency refers to the ability of a program to make progress on multiple tasks at the same time, without necessarily executing them simultaneously. In JavaScript, concurrency is typically achieved using asynchronous programming techniques, such as Promises, callbacks, and async/await. With Promises, we can execute multiple asynchronous operations in parallel, which allows us to take advantage of the non-blocking nature of JavaScript to avoid blocking the main thread and keep the program responsive.

// Parallelism, on the other hand, refers to the ability of a program to execute multiple tasks simultaneously, typically by utilizing multiple CPU cores. In JavaScript, parallelism can be achieved using worker threads or other similar techniques.

// Now, let's look at how Promises can be used to achieve concurrency and parallelism in JavaScript:

// 1. Concurrency with Promises:
// With Promises, we can execute multiple asynchronous operations in parallel and handle the results as they become available. Here's an example:

Promise.all([
  fetch('/api/data1'),
  fetch('/api/data2'),
  fetch('/api/data3')
])
  .then(responses => {
    // handle responses here
  })
  .catch(error => {
    // handle error here
  });


//   In this example, we are using Promise.all() to execute three HTTP requests in parallel. Promise.all() returns a Promise that resolves with an array of results once all the Promises passed to it have resolved. We can then handle the results in the then() block.

// 2. Parallelism with Promises:
// In JavaScript, parallelism can be achieved using worker threads, which allow us to execute code in parallel in a separate thread of execution. Here's an example:

const { Worker } = require('worker_threads');

const worker1 = new Worker('./worker1.js');
const worker2 = new Worker('./worker2.js');

Promise.all([
  new Promise(resolve => worker1.on('message', resolve)),
  new Promise(resolve => worker2.on('message', resolve))
])
  .then(results => {
    // handle results here
  })
  .catch(error => {
    // handle error here
  });

  // In this example, we are using two worker threads to execute two JavaScript files in parallel. We are also using Promise.all() to wait for both workers to finish and return their results. Once all the Promises have resolved, we can handle the results in the then() block.

  // Overall, Promises provide a powerful way to achieve both concurrency and parallelism in JavaScript, allowing us to execute multiple asynchronous operations in parallel and keep our programs responsive and performant.  


//   Promise.all() is a built-in method in JavaScript that takes an iterable (such as an array) of Promises as input and returns a new Promise that resolves with an array of results when all the input Promises have resolved, or rejects with the reason of the first Promise that rejects.

// Here's the syntax for Promise.all():

Promise.all(iterable)

// Where iterable is an iterable object (such as an array) of Promises or other values that have a then() method.

// When Promise.all() is called, it returns a new Promise that will resolve with an array of results once all the Promises in the input iterable have resolved. If any of the input Promises reject, the returned Promise will reject with the reason of the first Promise that rejects.

// Here's an example of using Promise.all() to wait for multiple Promises to complete:

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); // [1, 2, 3]
  })
  .catch(error => {
    console.error(error);
  });

  // In this example, we define three Promises (promise1, promise2, and promise3) that immediately resolve with the values 1, 2, and 3 respectively. We then pass these Promises as an array to Promise.all(), which returns a new Promise that resolves with an array of the resolved values of the input Promises. In this case, the then() block will output [1, 2, 3].

  // If any of the input Promises reject, the returned Promise from Promise.all() will reject with the reason of the first Promise that rejects. Here's an example:  

  const promise1 = Promise.resolve(1);
const promise2 = Promise.reject("Oops");
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); // never executed
  })
  .catch(error => {
    console.error(error); // "Oops"
  });


  // In this example, the promise2 Promise rejects with the string "Oops". When we pass all three Promises to Promise.all(), it returns a new Promise that rejects with the same "Oops" reason. In this case, the catch() block will output "Oops".

  // No, Promise.all() is an asynchronous function in JavaScript. When Promise.all() is called, it returns a new Promise immediately, but the actual resolution or rejection of the returned Promise depends on the asynchronous completion of the Promises in the input iterable.

  const promise1 = new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  
  const promise2 = new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, 500);
  });
  
  Promise.all([promise1, promise2])
    .then(values => {
      console.log(values); // [1, 2]
    })
    .catch(error => {
      console.error(error);
    });
  
  console.log("Promise.all() called"); // executed first
  // 

    // In this example, we define two Promises (promise1 and promise2) that resolve after different delays using setTimeout(). We then pass these Promises as an array to Promise.all(), which returns a new Promise. However, the then() block will not execute until both promise1 and promise2 have resolved asynchronously. Meanwhile, the console.log() statement outside of the Promise.all() call will execute immediately.

// Therefore, Promise.all() is not a synchronous function in JavaScript. It returns a Promise immediately, but the resolution or rejection of that Promise depends on the asynchronous completion of the Promises in the input iterable.


// Job queue

// In JavaScript, Promise resolution and rejection are implemented using a job queue called the "PromiseJobs" queue. The PromiseJobs queue is a way to handle asynchronous callbacks that are registered during the execution of Promise resolution and rejection.

// The PromiseJobs queue is a part of the event loop mechanism in JavaScript. The event loop is responsible for managing the execution of JavaScript code and handling events such as user input and network requests. When a Promise is resolved or rejected, the corresponding callback is registered in the PromiseJobs queue, which is processed by the event loop.

// Here's an example of using the PromiseJobs queue to execute a callback after a Promise is resolved:


const promise = new Promise(resolve => {
  setTimeout(() => {
    resolve("Hello, World!");
  }, 1000);
});

promise.then(value => {
  console.log(value); // "Hello, World!"
});

setTimeout(() => {
  console.log("setTimeout callback");
}, 0);

console.log("Main thread");

// Output:
// Main thread
// setTimeout callback
// Hello, World!


// In this example, we create a Promise that resolves after a delay of one second using setTimeout(). We then register a callback using the then() method, which is called when the Promise is resolved. We also register a callback using setTimeout() with a delay of zero milliseconds, which is executed after the main thread has completed. Finally, we log a message to the console from the main thread.

// The output of this program demonstrates the order in which the callbacks are executed. The "Main thread" message is logged first, followed by the setTimeout() callback, and finally, the then() callback.

// Note that the PromiseJobs queue is an implementation detail of the Promise mechanism and is not directly accessible in user code.

// https://dev.to/swarnaliroy94/methods-of-promise-all-any-finally-o2e
// https://medium.com/developer-rants/how-can-you-tell-which-promise-failed-in-promise-all-5a70be46e19b
// https://medium.com/swlh/dealing-with-multiple-promises-in-javascript-41d6c21f20ff
// https://www.freecodecamp.org/news/promise-all-in-javascript-with-example-6c8c5aea3e32/
// https://geshan.com.np/blog/2022/07/javascript-promise-all/
// https://gist.github.com/valera-rozuvan/5a1eafd0e82f78dd976273d4d1ab67a4
// https://codeburst.io/javascript-interview-questions-promises-1ab2fb7f0467
// https://algodaily.com/lessons/advanced-javascript-interview-questions/promise-introduction
// https://climbtheladder.com/javascript-promise-interview-questions/
// https://levelup.gitconnected.com/vimp-javascript-promise-implementation-challenges-5a4f120d8606
// https://in.indeed.com/career-advice/interviewing/javascript-promise-interview-questions
// https://testbook.com/interview/javascript-promise-interview-questions
// https://dev.to/craigmichaelmartin/the-problem-with-promises-in-javascript-5h46
// https://blog.greenroots.info/common-mistakes-in-using-javascript-promises
// https://www.toptal.com/javascript/javascript-promises
