// Axios interceptors are a feature provided by the Axios library, which is a popular JavaScript library used for making HTTP requests. Interceptors allow you to intercept and modify requests or responses before they are handled by the application code.

// The main purpose of interceptors is to provide a centralized way of handling common behaviors or modifications for all requests or responses. This can include adding headers, modifying the request payload, handling errors, or performing authentication checks. Interceptors can be useful for tasks like adding authorization tokens to requests, logging network activity, or handling global error handling.

// Here's an example to illustrate the usage of Axios interceptors:

import axios from 'axios';

// Create an instance of Axios
const api = axios.create({
  baseURL: 'https://api.example.com',
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Modify the request config before sending
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // Modify the response data before resolving
    response.data = response.data.results;
    return response;
  },
  (error) => {
    // Handle response errors
    if (error.response.status === 401) {
      // Redirect to login if unauthorized
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Make a request
api.get('/users')
  .then((response) => {
    // Handle the response
    console.log(response.data);
  })
  .catch((error) => {
    // Handle errors
    console.error(error);
  });

//  In this example, we create an instance of Axios called api with a base URL. Then we add two interceptors: one for requests and one for responses.

// The request interceptor modifies the request configuration before it is sent. In this case, it adds an Authorization header to the request using a token retrieved from the local storage.

// The response interceptor modifies the response data before it is resolved. Here, we assume the response data is wrapped in an object with a results property, so we extract that property and assign it to response.data.

// If a response error occurs, the response interceptor checks if the status code is 401 (unauthorized). In that case, it redirects the user to the login page. Other response errors are passed through to the catch block for further error handling.

// Finally, we make a GET request to /users using the api instance. The interceptors will be applied to this request, and the modified response or error will be handled accordingly.

// By using Axios interceptors, you can keep your request and response handling logic centralized, making it easier to manage common behaviors and modifications across your application. 

// Centralized Configuration: Interceptors allow you to define and manage request and response modifications in a centralized manner. This means you don't have to repeat the same code for each request or response handling. It simplifies the maintenance of common behaviors and configurations across your application.

// Code Reusability: By using interceptors, you can reuse common logic across multiple requests or responses. For example, you can add authentication headers or handle error responses consistently across your application without duplicating code.

// Modularity: Interceptors provide a modular approach to handle different aspects of the request/response cycle. You can have multiple interceptors, each responsible for a specific behavior or modification. This allows you to separate concerns and keep your code organized.

// Error Handling: With interceptors, you can handle errors in a centralized manner. For example, you can check for specific error status codes and take appropriate actions, such as redirecting the user or displaying error messages. This makes error handling more consistent and easier to manage.

// Request/Response Transformation: Interceptors allow you to transform the request or response data before it reaches your application code. This can be useful for tasks like modifying headers, formatting data, or extracting relevant information from the response. It provides flexibility in adapting the data to fit your application's needs.

// Request/Response Logging: Interceptors enable you to log network activity easily. You can log details about requests, such as URL, method, headers, and payload, as well as response details. Logging can be helpful for debugging, troubleshooting, and monitoring network traffic.

// Seamless Integration: Axios interceptors integrate smoothly with the Axios library. They can be added and removed dynamically, allowing you to modify the interceptors' behavior based on specific conditions or requirements. This flexibility makes it easier to adapt and extend the functionality of Axios.

// https://blog.bitsrc.io/setting-up-axios-interceptors-for-all-http-calls-in-an-application-71bc2c636e4e

// https://geshan.com.np/blog/2022/12/axios-interceptors/#:~:text=Axios%20interceptors%20are%20a%20powerful%20tool%20for%20making%20changes%20to,and%20received%20by%20the%20application.