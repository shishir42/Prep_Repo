// React is a JavaScript Library created by Facebook for creating dynamic and interactive applications and building better UI/UX design for web and mobile applications. React is an open-source and component-based front-end library. React is responsible for the UI design

// Features of React:
// JSX (JavaScript Syntax Extension)(Javascript XML)
// Virtual DOM
// One-way data binding
// Performance
// Extensions: React has many extensions that we can use to create full-fledged UI applications. It supports mobile app development and provides server-side rendering. React is extended with Flux, Redux, React Native, etc. which helps us to create good-looking UI.
// Conditional statements
// Components: React.js divides the web page into multiple components as it is component-based
// Popular: ReactJS gives better performance than other JavaScript languages due to t’s implementation of a virtual DOM.
// Reusable UI components: React improves development and debugging processes.

//Advantage:
// React is a popular JavaScript library for building user interfaces. Here are some advantages of using React:

// Component-based architecture: React is built on a component-based architecture, which makes it easy to break down complex UI elements into small, reusable components. This helps developers to write more organized, maintainable, and scalable code.

// Virtual DOM: React uses a virtual DOM, which is a lightweight representation of the actual DOM. When the state of a component changes, React compares the virtual DOM with the previous version of the virtual DOM, and then updates only the necessary parts of the actual DOM. This results in faster rendering and better performance.

// Declarative programming: React uses a declarative programming model, which makes it easier to reason about what the code is doing. Developers can simply declare what they want to happen, and let React take care of the implementation details.

// Strong community: React has a large and active community of developers, which means there are many resources available for learning and troubleshooting. This also means that React is constantly evolving and improving.

// Cross-platform development: React can be used to build web applications, mobile applications, and even desktop applications. This makes it a versatile tool for developers who want to build applications for multiple platforms.

// JSX syntax: React uses JSX syntax, which is a combination of JavaScript and HTML. This allows developers to write HTML-like code in their JavaScript, which makes it easier to read and understand.

// Overall, React provides many benefits for developers who want to build scalable and maintainable user interfaces.

// Latest Version: React 18
// For react 17: https://17.reactjs.org/docs/getting-started.html

// Main Concepts
// 1. Hello World
// 2. Introducing JSX
// 3. Rendering Elements
// 4. Components and Props
// 5. State and Lifecycle
// 6. Handling Events
// 7. Conditional Rendering
// 8. Lists and Keys
// 9. Forms
// 10. Lifting State Up
// 11. Composition vs Inheritance
// 12. Thinking In React

// Advanced Concepts
// Accessibility
// Code-Splitting
// Context
// Error Boundaries
// Forwarding Refs
// Fragments
// Higher-Order Components
// Integrating with Other Libraries
// JSX In Depth
// Optimizing Performance
// Portals
// Profiler
// React Without ES6
// React Without JSX
// Reconciliation
// Refs and the DOM
// Render Props
// Static Type Checking
// Strict Mode
// Typechecking With PropTypes
// Uncontrolled Components
// Web Components

//javascript vs react
// Purpose: JavaScript is a general-purpose programming language that can be used for a wide range of applications, including building web applications, mobile applications, and desktop applications. React, on the other hand, is specifically designed for building user interfaces, and is commonly used for building web applications.

// Syntax: JavaScript has its own syntax, while React uses a syntax extension called JSX, which allows developers to write HTML-like syntax in their JavaScript code. This makes it easier to read and understand the code, but it requires a build step to compile the JSX code into standard JavaScript.

// Component-based architecture: React is built on a component-based architecture, which makes it easy to break down complex UI elements into small, reusable components. This can help developers write more organized, maintainable, and scalable code.

// Virtual DOM: React uses a virtual DOM, which is a lightweight representation of the actual DOM. When the state of a component changes, React compares the virtual DOM with the previous version of the virtual DOM, and then updates only the necessary parts of the actual DOM. This results in faster rendering and better performance.

// why react is know as one way data binding

// React is known as a library with one-way data binding because it follows a unidirectional data flow architecture. In other words, data flows in one direction, from parent components to child components, and changes to the data only flow in one direction as well.

// In React, a parent component passes down data to its child components through props. The child components can read the data, but they cannot modify it directly. Instead, if the child components need to modify the data, they send a message (or event) back up to the parent component, which then updates the data and passes it back down to the child components through props again.

// This approach has several benefits. First, it makes the data flow easier to reason about, as there is only one source of truth for the data. Second, it makes it easier to debug and trace the flow of data through the components. Third, it helps to prevent unexpected side effects and makes the code easier to maintain.

// Overall, the one-way data binding approach in React is designed to simplify the process of building complex user interfaces by providing a clear and predictable way for data to flow through the components.

// React is a library for building user interfaces, not a full-fledged framework.

// While React provides a lot of functionality for building UI components, it doesn't provide many of the other features that are typically included in a full-stack web application framework, such as routing, data management, and server-side rendering.

// However, React can be used in conjunction with other libraries and frameworks to build more complete web applications. For example, React can be used with a library like React Router for routing, and with a framework like Next.js for server-side rendering and other features.

// Overall, React's focus on building reusable UI components makes it a powerful tool for building dynamic and interactive web interfaces, and its flexibility allows it to be used in a wide variety of web development contexts.

// command 
//Node Package eXecute
//npx create-react-app my-app
//npx react-native@latest init AwesomeProject 