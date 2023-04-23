// JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like syntax in their JavaScript code. It is a key feature of React, as it allows developers to write declarative UI code that is easy to read and understand.

// JSX is not a separate language, but a syntax extension that is compiled into regular JavaScript using a transpiler like Babel. Here's an example of JSX code:

import React from 'react';

function App() {
  return (
    <div className="container">
      <h1>Hello, world!</h1>
      <p>This is my first React app.</p>
    </div>
  );
}

// In this example, we are using JSX to define a new React component called App. The code looks like HTML, but it is actually JavaScript. Notice how we use a className attribute instead of class, which is reserved in JavaScript.

// When this code is compiled, it is transformed into regular JavaScript function calls that create and manipulate React elements. Here's the compiled code for the example above:

import React from 'react';

function App() {
  return React.createElement(
    'div',
    { className: 'container' },
    React.createElement('h1', null, 'Hello, world!'),
    React.createElement('p', null, 'This is my first React app.')
  );
}

// While it is possible to write React code without using JSX, it is considered best practice and is used widely in the React community due to its simplicity and ease of use.