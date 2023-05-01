// Promise chaining is a technique in JavaScript that allows you to execute a series of asynchronous operations in a sequential order. It involves returning a new promise from the .then() method, which is resolved with the result of the previous promise.

// Here is an example of promise chaining:

new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  })
    .then(function (result) {
      console.log(result); // 1
      return result * 2;
    })
    .then(function (result) {
      console.log(result); // 2
      return result * 3;
    })
    .then(function (result) {
      console.log(result); // 6
      return result * 4;
    });

    