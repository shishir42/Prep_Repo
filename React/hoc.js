import React, { useState, useEffect } from 'react';

// A Higher-Order Component that adds a loading spinner to a component
const withLoader = (WrappedComponent) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      // Set isLoading to true when component mounts
      setIsLoading(true);

      // Simulate a delay
      const timer = setTimeout(() => {
        // Set isLoading to false after delay
        setIsLoading(false);
      }, 2000);

      // Clean up the timer when the component unmounts
      return () => clearTimeout(timer);
    }, []);

    return <WrappedComponent isLoading={isLoading} {...props} />;
  };
};

// A component that displays a list of items
const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

// Wrap the ItemList component with the withLoader HOC
const ItemListWithLoader = withLoader(ItemList);

// Render the ItemListWithLoader component with some example data
const App = () => {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  return <ItemListWithLoader items={items} />;
};

export default App;


// HOC stands for Higher-Order Component, which is a design pattern in React that allows you to reuse component logic by wrapping a component inside another component. The purpose of HOC is to add new functionality to a component without changing the component's code.
// There are several advantages of using Higher-Order Components (HOC) in React:
// Reusability: HOCs allow us to extract common functionality from multiple components and reuse it across our application. This can help reduce code duplication and make our code more maintainable.
// Separation of concerns: HOCs can help separate concerns by isolating functionality that is not directly related to rendering components. For example, an HOC that provides authentication can handle the authentication logic separately from the rendering of the component, allowing the component to focus on its primary responsibility of rendering.
// Code organization: HOCs can help organize our code by keeping related functionality together in one place. This can make our code easier to understand and maintain over time.
// Flexibility: HOCs provide a flexible way to add functionality to a component. We can add or remove HOCs as needed to modify the behavior of a component without having to modify its code directly.
// Testing: HOCs can make our code easier to test by providing a way to test functionality separately from rendering. This can allow us to test complex functionality more easily and with greater confidence.
// Overall, HOCs provide a powerful way to improve the structure, maintainability, and flexibility of our React applications. By using HOCs, we can write code that is more reusable, easier to maintain, and more testable, which can lead to more efficient and effective development.

// When working with Higher-Order Components (HOCs) in React, there are some things that you should avoid doing to prevent unintended behavior:
// Do not mutate the input component: When creating an HOC, you should not modify or mutate the original input component in any way. This can lead to unexpected behavior and can cause bugs in your application.
// Do not rely on component instance variables: HOCs should not depend on the state or instance variables of the wrapped component. This can cause issues if multiple components are using the same HOC, as they may end up sharing the same state.
// Do not use HOCs for conditional rendering: While HOCs can be used for conditional rendering, it is not the best approach. It can make your code harder to read and maintain, and can cause performance issues if the HOC is not properly optimized.
// Do not overuse HOCs: While HOCs can be useful for adding functionality to a component, they can also make your code more complex and harder to understand. Use them sparingly and only when they provide a clear benefit to your code.
// Do not create too many levels of nesting: When using multiple HOCs, it can be easy to create deeply nested components that are difficult to understand and debug. Try to keep the number of HOCs to a minimum and avoid creating too many levels of nesting.
// By avoiding these common pitfalls, you can create more maintainable and scalable HOCs that provide real value to your application.

// In this example, the withLoader HOC is defined as a function that takes a WrappedComponent as an argument and returns a new function component that adds a loading spinner to the WrappedComponent.
// The new function component uses the useState hook to define the isLoading state and the setIsLoading function to toggle the loading state. It also uses the useEffect hook to simulate a delay and set the isLoading state to true while the delay is active.
// The ItemList component is defined as a separate function component that receives the items and isLoading props from the HOC. It then renders a list of items or a loading message depending on the value of isLoading.
// To use the ItemList component with the withLoader HOC, we simply wrap it inside the HOC by calling withLoader(ItemList) and exporting the result as ItemListWithLoader. The ItemListWithLoader component has access to the isLoading prop that is provided by the HOC, without needing to know anything about the HOC itself.
// Finally, we render the ItemListWithLoader component with some example data in the App component. The withLoader HOC adds the loading spinner to the ItemList component automatically, allowing us to reuse this functionality across our application.
