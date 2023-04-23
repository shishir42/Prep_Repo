// In React, you can pass data from one component to another component by using props. Here's an example of how to pass data from a parent component to a child component:

// ParentComponent.js:
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const data = { name: 'John', age: 30 };

  return (
    <div>
      <ChildComponent data={data} />
    </div>
  );
}

export default ParentComponent;

// In this example, the ParentComponent passes an object called data as a prop to the ChildComponent.

// ChildComponent.js:

import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.data.name}</p>
      <p>Age: {props.data.age}</p>
    </div>
  );
}

export default ChildComponent;

// In this example, the ChildComponent receives the data object as a prop and renders its properties.

// You can also pass functions as props to enable communication from child to parent components. Here's an example:

// ParentComponent.js:

import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [message, setMessage] = useState('');

  function handleMessage(message) {
    setMessage(message);
  }

  return (
    <div>
      <ChildComponent onMessage={handleMessage} />
      <p>{message}</p>
    </div>
  );
}

export default ParentComponent;

// In this example, the ParentComponent passes a function called handleMessage as a prop to the ChildComponent.

// ChildComponent.js:

import React, { useState } from 'react';

function ChildComponent(props) {
  const [message, setMessage] = useState('');

  function handleClick() {
    setMessage('Hello from child!');
    props.onMessage('Hello from child!');
  }

  return (
    <div>
      <button onClick={handleClick}>Send Message</button>
      <p>{message}</p>
    </div>
  );
}

export default ChildComponent;

// In this example, the ChildComponent uses the handleClick function to update its own state and call the onMessage function passed as a prop with the message. When the button is clicked, the message is displayed in both the ChildComponent and the ParentComponent.