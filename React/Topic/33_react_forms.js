// In React, forms are created using standard HTML form elements such as <form>, <input>, <textarea>, and <select>. The difference is that in React, the form elements are controlled components, which means that their value is controlled by the state of the component rather than the DOM.

// Here is an example of how to create a simple form with two input fields (username and password) and a submit button:

import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    // Add logic to submit the form data to a server or other component
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;

// In this example, we use the useState hook to create two pieces of state: username and password. We also define a handleSubmit function that logs the form data to the console when the form is submitted.

// The onChange event handler for each input field updates the corresponding state variable whenever the user types a new value. When the user submits the form, the handleSubmit function is called, which prevents the default form submission behavior and logs the form data to the console.

// This is just a simple example, but you can customize the form elements and add additional logic as needed to create more complex forms in React.