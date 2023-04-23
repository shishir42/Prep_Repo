// In React, a higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result. These higher-order functions are often used to add functionality to components or to manipulate data in some way.

function withLogging(WrappedComponent) {
    return class extends React.Component {
      componentDidMount() {
        console.log('Component has mounted');
      }
      render() {
        return <WrappedComponent {...this.props} />;
      }
    };
  }

//   In this example, withLogging is a higher-order function that takes a component WrappedComponent as an argument and returns a new component class. The returned component class logs a message to the console when it is mounted and then renders the WrappedComponent with all of its original props passed down.

// To use this higher-order function, you can wrap any component you want to log the mounting of like so:
  
  const MyComponent = (props) => {
    return <div>Hello, World!</div>;
  }
  
  const LoggedComponent = withLogging(MyComponent);
  

  import React, { useEffect } from 'react';

function withLogging(WrappedComponent) {
  return function(props) {
    useEffect(() => {
      console.log('Component has mounted');
    }, []);
    return <WrappedComponent {...props} />;
  };
}

const MyComponent = (props) => {
    return <div>Hello, World!</div>;
  }
  
const LoggedComponent = withLogging(MyComponent);

import React, { useState } from 'react';

function withToggle(WrappedComponent) {
  return function(props) {
    const [isToggled, setIsToggled] = useState(false);

    function toggle() {
      setIsToggled(!isToggled);
    }

    return (
      <WrappedComponent
        isToggled={isToggled}
        toggle={toggle}
        {...props}
      />
    );
  };
}

const MyComponent = (props) => {
    return (
      <div>
        <button onClick={props.toggle}>
          {props.isToggled ? 'Hide' : 'Show'}
        </button>
        {props.isToggled && <div>Hello, World!</div>}
      </div>
    );
  };
  
  const ToggledComponent = withToggle(MyComponent);
  
  
//   Higher-Order Components (HOCs) in React solve a common problem that arises when we need to reuse code across multiple components in our application.

//   Imagine you have a functionality, such as authentication, that needs to be implemented across many components in your application. Without HOCs, you would need to add that authentication code to each individual component, leading to code duplication and making it difficult to maintain and update the code.
  
//   HOCs provide a solution to this problem by allowing you to create a single component that wraps other components, providing them with additional functionality or behavior. This higher-order component can then be used wherever that functionality is needed, without having to duplicate code across multiple components.
  
//   By abstracting away common functionality into a higher-order component, you can also make your code more modular and easier to test. You can create HOCs for different types of functionality (e.g., logging, error handling, data fetching, etc.), and then use them as needed in different parts of your application.
  
//   In summary, HOCs in React solve the problem of code duplication and make it easier to reuse code across multiple components in your application. They allow you to create reusable components that can provide additional functionality or behavior to other components.

// Here are some advantages of using Higher-Order Components (HOCs) in React:

// Reusability: HOCs allow you to encapsulate reusable logic and behavior in a single place, making it easy to reuse the same code across multiple components in your application. This reduces code duplication and makes your code more modular and easier to maintain.

// Separation of Concerns: By abstracting away common functionality into a higher-order component, you can separate concerns in your code and make it easier to reason about. This can make your code more organized and easier to test.

// Composability: HOCs are composable, which means you can combine them together to create more complex behavior. This can lead to a more flexible and powerful codebase.

// Performance: HOCs can be used to optimize performance by allowing you to implement certain optimizations, such as caching, memoization, or lazy loading, in a single place and then reuse them across multiple components.

// Code Sharing: HOCs allow you to share code across different parts of your application, which can be especially useful in large codebases. By using HOCs to encapsulate common functionality, you can ensure consistency across your application and reduce the likelihood of bugs and errors.