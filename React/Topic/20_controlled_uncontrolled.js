// In React, there are two ways to handle form inputs: controlled components and uncontrolled components.

// Controlled Components
// A controlled component is a form element whose value is controlled by React. In other words, the value of the input is stored in the component's state, and any changes to the input are handled by updating the state. This makes it easy to handle form validation, conditional rendering, and other advanced form features.

// Here's an example of a controlled component in React:
import React, { useState } from 'react';

function ControlledComponent() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Your name is: {name}</p>
    </div>
  );
}

// In this example, the name state variable is used to store the value of the input, and the handleChange function is called whenever the input changes. This updates the name state variable, which in turn updates the value of the input and the text displayed below it.

// Uncontrolled Components
// An uncontrolled component is a form element whose value is handled by the browser. In other words, the value of the input is not controlled by React, and any changes to the input are handled by the browser. This can make it harder to handle form validation and other advanced features, but can be useful in certain situations where you don't need fine-grained control over the input.

// Here's an example of an uncontrolled component in React:

import React from 'react';

function UncontrolledComponent() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    console.log(`Your name is: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}

// In this example, the form element is handled by the browser, and the handleSubmit function is called when the form is submitted. The value of the input is obtained by accessing the name property of the form's event target.

// In general, controlled components are more powerful and flexible than uncontrolled components, since they allow you to easily handle complex form functionality. However, uncontrolled components can be useful in certain situations where you don't need fine-grained control over the input.

