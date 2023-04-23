// Explain strict mode in react and how it is different from javascript strict mode 

// In React, "Strict Mode" is a tool that helps you write better React components by catching a wider range of potential problems in your code. It is not the same as the "Strict Mode" in vanilla JavaScript, which is a separate feature used to enforce stricter parsing and error handling rules in the JavaScript engine.

// In React, you can enable "Strict Mode" by wrapping a component or a tree of components with the <React.StrictMode> component. For example:

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// When "Strict Mode" is enabled, React will perform additional checks and give you more warnings in your console. These checks include:

// Identifying unsafe lifecycle methods and preventing them from being used.
// Detecting and warning about legacy string ref API usage.
// Detecting and warning about deprecations in the React API.
// Detecting and warning about potential side effects in your render function.
// These checks are meant to help you catch potential bugs and issues earlier in development, before they become more serious problems. In general, it is recommended to use "Strict Mode" in your React applications to help ensure that your code is as safe and error-free as possible.

// It's worth noting that "Strict Mode" in React is not the same as the "use strict" statement in vanilla JavaScript. The "use strict" statement is a feature of JavaScript that enforces stricter parsing and error handling rules in the JavaScript engine. It can help prevent common programming mistakes and improve code quality by catching errors earlier. However, it does not provide the same level of advanced warnings and checks that "Strict Mode" in React does.



