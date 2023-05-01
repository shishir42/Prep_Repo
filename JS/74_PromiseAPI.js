// here are implementations of Promise, Promise.all, and Promise.any.

// Promise: The Promise constructor is used to create a new promise object. The promise object represents a value that may not be available yet but will be resolved at some point in the future. The promise object has two states, fulfilled and rejected, which represent a successful or failed completion of the promise.

class MyPromise {
    constructor(executor) {
      this.status = 'pending';
      this.value = undefined;
      this.reason = undefined;
      const resolve = (value) => {
        if(this.status === 'pending') {
          this.status = 'fulfilled';
          this.value = value;
        }
      }
      const reject = (reason) => {
        if(this.status === 'pending') {
          this.status = 'rejected';
          this.reason = reason;
        }
      }
      executor(resolve, reject);
    }
    then(onFulfilled, onRejected) {
      if(this.status === 'fulfilled') {
        onFulfilled(this.value);
      } else if(this.status === 'rejected') {
        onRejected(this.reason);
      }
    }
    catch(onRejected) {
      if(this.status === 'rejected') {
        onRejected(this.reason);
      }
    }
  }


//   Promise.all: The Promise.all method takes an iterable of promises and returns a new promise that is fulfilled with an array of the fulfilled values of the input promises, in the order they were provided. If any of the input promises are rejected, the resulting promise is immediately rejected with the reason of the first promise that was rejected.

Promise.myAll = function(promises) {
    return new Promise((resolve, reject) => {
      const results = new Array(promises.length);
      let count = 0;
      for(let i=0; i<promises.length; i++) {
        promises[i].then(value => {
          results[i] = value;
          count++;
          if(count === promises.length) {
            resolve(results);
          }
        }).catch(reason => {
          reject(reason);
        });
      }
    });
  }

  
//   Promise.any: The Promise.any method takes an iterable of promises and returns a new promise that is fulfilled with the value of the first input promise that is fulfilled. If all input promises are rejected, the resulting promise is rejected with an AggregateError that contains all the rejection reasons.

Promise.myAny = function(promises) {
    return new Promise((resolve, reject) => {
      const reasons = new Array(promises.length);
      let count = 0;
      for(let i=0; i<promises.length; i++) {
        promises[i].then(value => {
          resolve(value);
        }).catch(reason => {
          reasons[i] = reason;
          count++;
          if(count === promises.length) {
            reject(new AggregateError(reasons, 'All promises were rejected'));
          }
        });
      }
    });
  }

//   Note: The AggregateError is a new error type that was introduced in ES2020. If you're using an older version of JavaScript, you can replace it with a regular Error object.

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 1000);
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Promise 2 rejected');
    }, 500);
  });
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 3 resolved');
    },500);
});

// Promise: The Promise constructor takes a single argument, a function that defines the asynchronous operation to be performed. The function should take two arguments, a resolve function and a reject function, which should be called to indicate the success or failure of the operation.

function myAsyncOperation() {
    return new Promise((resolve, reject) => {
      // Perform some asynchronous operation
      setTimeout(() => {
        const result = Math.random();
        if(result > 0.5) {
          resolve(result);
        } else {
          reject("Error: Result is too small");
        }
      }, 1000);
    });
  }

  
//   Promise.all: The Promise.all function takes an array of promises and returns a new promise that resolves with an array of the resolved values of the input promises, in the same order as the input promises. If any of the input promises reject, the returned promise will reject with the reason of the first input promise to reject.

Promise.all = function(promises) {
    return new Promise((resolve, reject) => {
      const results = [];
      let remaining = promises.length;
      promises.forEach((promise, index) => {
        promise.then(result => {
          results[index] = result;
          remaining--;
          if(remaining === 0) {
            resolve(results);
          }
        }).catch(reason => {
          reject(reason);
        });
      });
    });
  }

  
//   Promise.any: The Promise.any function takes an array of promises and returns a new promise that resolves with the value of the first input promise to resolve, regardless of whether any other input promises reject. If all of the input promises reject, the returned promise will reject with an AggregateError containing the reasons of all the input promises that rejected.

Promise.any = function(promises) {
    return new Promise((resolve, reject) => {
      const errors = [];
      let remaining = promises.length;
      promises.forEach(promise => {
        promise.then(result => {
          resolve(result);
        }).catch(reason => {
          errors.push(reason);
          remaining--;
          if(remaining === 0) {
            reject(new AggregateError(errors));
          }
        });
      });
    });
  }

//   Note: The AggregateError constructor is a built-in constructor that creates an error object that represents multiple errors.

// Here's an example of using these functions:

const promises = [
    Promise.resolve("Result 1"),
    Promise.reject("Error: Result 2 is too small"),
    Promise.resolve("Result 3")
  ];
  
  Promise.all(promises)
    .then(results => {
      console.log(results);
    })
    .catch(reason => {
      console.error(reason);
    });
  
  Promise.any(promises)
    .then(result => {
      console.log(result);
    })
    .catch(reason => {
      console.error(reason);
    });
  
      

    // In this example, we define an array of promises that contains two successful promises and one failing promise. We then use Promise.all to wait for all promises to resolve or reject, and log the resolved values to the console if all promises resolve, or log the rejection reason to the console if any of the promises reject. We also use Promise.any to wait for the first promise to resolve and log its value to the console, or wait for all promises to reject and log the reasons to the console using an AggregateError.

    