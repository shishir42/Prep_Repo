// https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke

// In JavaScript, asynchronous programming is essential for dealing with time-consuming operations such as network requests, file I/O, and other non-blocking operations. In traditional synchronous programming, the code execution is blocking, meaning that it stops until the current task is completed, and then moves to the next task. This can cause issues if there are long-running tasks that require waiting, as the entire application will be blocked.

// To address this problem, JavaScript introduced the concept of asynchronous programming, which allows developers to write non-blocking code that runs in the background and doesn't block the main thread. Asynchronous programming in JavaScript is achieved using callbacks, promises, and more recently, async/await.

// Async/await is a modern syntax for writing asynchronous code that is built on top of promises. It allows you to write asynchronous code that looks and behaves like synchronous code, making it much easier to understand and maintain.

// The async keyword is used to define an asynchronous function, and the await keyword is used to pause the execution of an asynchronous function until a promise is resolved. The await keyword can only be used inside an async function.

// Here's an example that demonstrates how to use async/await to fetch data from an API:
async function getData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
getData();

// In this example, we defined an asynchronous function called getData() using the async keyword. Inside this function, we use the await keyword to pause the execution of the function until the promise returned by the fetch() method is resolved. Once the promise is resolved, we can access the response data by calling the json() method on the response object. Finally, we log the data to the console.

// If the promise is rejected, an error will be thrown, and we catch the error using a try/catch block.

// Overall, async/await is a powerful tool that simplifies asynchronous programming in JavaScript and helps developers write more concise and readable code.

  