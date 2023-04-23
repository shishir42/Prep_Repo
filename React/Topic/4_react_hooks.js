// hooks (+1) and custom hooks - 16.8

//React 16.8.0 is the first release to support Hooks. When upgrading, don’t forget to update all packages, including React DOM. React Native supports Hooks since the 0.59 release of React Native.

// why hooks is introduced 

//1. It’s hard to reuse stateful logic between components
// React doesn’t offer a way to “attach” reusable behavior to a component. When we say that React doesn't offer a way to "attach" reusable behavior to a component, we mean that React components are not inherently designed to support code reuse. In other words, React components don't have a built-in mechanism for sharing functionality across different components.

// For example, imagine you have a component that needs to perform some API calls to fetch data, and you want to reuse that same API call logic in multiple components throughout your application. With React, you can't simply "attach" this behavior to a component and reuse it in other components. Instead, you would need to duplicate the API call code in each component that needs it, which can lead to code duplication and maintenance issues.

// To solve this problem, there are several patterns and techniques that React developers use to achieve code reuse, such as Higher-Order Components (HOCs), Render Props, and the new Hooks API. These techniques allow developers to extract and encapsulate reusable behavior into separate functions or components, and then reuse that behavior in different components throughout the application.

// With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

//2. Complex components become hard to understand

// We’ve often had to maintain components that started out simple but grew into an unmanageable mess of stateful logic and side effects. Each lifecycle method often contains a mix of unrelated logic. For example, components might perform some data fetching in componentDidMount and componentDidUpdate. However, the same componentDidMount method might also contain some unrelated logic that sets up event listeners, with cleanup performed in componentWillUnmount. Mutually related code that changes together gets split apart, but completely unrelated code ends up combined in a single method. This makes it too easy to introduce bugs and inconsistencies.

// Before the introduction of Hooks, stateful logic in React was typically implemented using class components and the component lifecycle methods, such as constructor, componentDidMount, componentDidUpdate, etc. This made it more difficult to reuse stateful logic across components and made it harder to reason about the component's behavior.

// In many cases it’s not possible to break these components into smaller ones because the stateful logic is all over the place. It’s also difficult to test them. This is one of the reasons many people prefer to combine React with a separate state management library.

// To solve this, Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods. You may also opt into managing the component’s local state with a reducer to make it more predictable.

// 3. Classes confuse both people and machines
// In addition to making code reuse and code organization more difficult, we’ve found that classes can be a large barrier to learning React. You have to understand how this works in JavaScript, which is very different from how it works in most languages.People can understand props, state, and top-down data flow perfectly well but still struggle with classes. 

// To solve these problems, Hooks let you use more of React’s features without classes. Conceptually, React components have always been closer to functions. Hooks embrace functions, but without sacrificing the practical spirit of React. Hooks provide access to imperative escape hatches and don’t require you to learn complex functional or reactive programming techniques.

// what is hook
// Hooks are functions that let you “hook into” React state and lifecycle features from function components.
// Hooks don’t work inside classes — they let you use React without classes.

// Rules of Hooks
// Hooks are JavaScript functions, but they impose two additional rules:

//1. Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
//2. Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. We’ll learn about them in a moment.)

// Only Call Hooks from React Functions
// Don’t call Hooks from regular JavaScript functions. Instead, you can:

// ✅ Call Hooks from React function components.
// ✅ Call Hooks from custom Hooks 

// We released an ESLint plugin called eslint-plugin-react-hooks that enforces these two rules. 

// Some of the benefits of using Hooks in React include:

// Simplifies component logic and reduces code complexity
// Enables reusing stateful logic across components
// Makes it easier to test components with stateful logic
// Improves performance by reducing unnecessary re-renders

//********************/
//useState:

// The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.

// useState accepts an initial state and returns two values:
// The current state.
// A function that updates the state.

//********************/
//useEffect:
// useEffect is a built-in hook in React that allows you to perform side effects in functional components. Side effects are any actions that are not directly related to rendering the UI, such as fetching data from an API, setting up event listeners, or updating the document title.

// The useEffect hook takes two arguments: a function and an optional array of dependencies. The function is the effect you want to perform, and the dependencies array tells React when the effect should be executed.

// The useEffect hook takes two arguments: a function and an optional array of dependencies.

// The useEffect hook can cause a re-render in your React component in certain cases, depending on the dependencies that you pass to it.

// By default, the useEffect hook is executed after every render of the component. However, you can control when the effect runs by specifying an array of dependencies as the second argument to the useEffect function. The effect will only re-run if any of the dependencies change between renders.

// 1. When the component first mounts: If you pass an empty array as the second argument to useEffect, the effect will only run once, when the component is first mounted. This means that the component will be re-rendered once after the effect has completed.

// 2. When a state variable changes: If you pass a state variable as a dependency to useEffect, the effect will re-run whenever that state variable changes. This can cause a re-render of the component if the state variable is used in the component's render method.

// 3. When a prop changes: If you pass a prop as a dependency to useEffect, the effect will re-run whenever that prop changes. This can cause a re-render of the component if the prop is used in the component's render method.

// 4. When a context value changes: If you use a context value in your component and pass it as a dependency to useEffect, the effect will re-run whenever the context value changes.

// It's important to be careful when choosing which dependencies to include in your useEffect hook. Including too many dependencies can cause unnecessary re-renders and impact the performance of your application. On the other hand, omitting important dependencies can lead to bugs in your application.

// In React, when you use the useEffect hook to subscribe to an event, it's important to unsubscribe from that event when the component is unmounted. Failing to do so can result in memory leaks and other unexpected behavior.

// To unsubscribe from an event in useEffect, you can return a function from the callback function that will be executed when the component is unmounted. This function should perform the cleanup necessary to unsubscribe from the event.

//********************/
//useContext:useContext is a hook that allows you to access data and functions from a parent component without having to pass them down as props to each child component. It is useful when you have data that needs to be shared across many components.

// When deciding whether to use useContext or Redux, it's important to consider the specific requirements of your application. For simpler applications with basic state management needs, useContext may be a good option to consider. On the other hand, for more complex applications with multiple data sources and complex state updates, Redux may provide a more efficient and scalable solution.

// A component calling useContext will always re-render when the context value changes. If re-rendering the component is expensive, you can optimize it by using memoization.

// We then create a user object and pass it as the value prop to the UserContext.Provider component.
// The Consumer component is used to consume the context object and access its value. It is typically used in child components that need to access the context object.

//********************/
// useReducer: useReducer is a hook in React that allows state management through a reducer function. It is similar to useState, but instead of updating state directly, you dispatch actions to update state. The reducer function takes in the current state and an action, and returns a new state based on the action type and payload.

// The useReducer Hook accepts two arguments: useReducer(<reducer>, <initialState>)
// The useReducer Hook returns the current state and a dispatch method.

// useReducer is often used in situations where state management becomes more complex than a simple value, especially when state changes require some sort of calculation or conditional logic. Here are some situations where you might want to consider using useReducer:

// When you have complex state objects that require multiple updates based on different actions.

// When you have a deeply nested state object that needs to be updated frequently.

// When state updates depend on previous state values.

// When you want to perform some sort of calculation or logic before updating the state.

// When you want to pass down state and update functions to child components using context API.

// useReducer can also be a good alternative to useState when you need to update state based on the previous state value, to avoid issues with race conditions or stale state.

// Overall, useReducer can be a powerful tool for managing complex state and reducing the number of state updates required in your application. However, it's important to note that useReducer can add additional complexity to your code, so it's important to weigh the benefits and drawbacks before deciding to use it in your application.

// useReducer and Redux are both tools for managing state in a React application, but they have different use cases and benefits.

// useReducer is a built-in React hook that allows you to manage state in a component using a reducer function. It can be useful for simple to medium state management needs within a single component. It allows you to keep your state and state management logic within the component and avoids the need for a separate library or tool. Additionally, useReducer can be easier to learn and integrate into your existing React codebase.

// On the other hand, Redux is a separate library that provides a centralized store for managing state across your entire application. It is best suited for complex applications that have a lot of state, as it provides a single source of truth for all of your state data. It also has a rich ecosystem of tools and middleware that can provide additional benefits, such as time-travel debugging, logging, and API integration. However, Redux can have a steeper learning curve and add additional complexity to your application.

// In summary, useReducer is a good choice when you have simple to medium state management needs within a single component, while Redux is a good choice for larger, more complex applications with a lot of state to manage across multiple components.

// Yes, useReducer can be used in large applications to manage state within individual components. However, it's important to keep in mind that as an application grows in size and complexity, managing state within individual components using useReducer can become more difficult to maintain.

// In a large application, you might have multiple components that need access to the same state data. In these cases, you may want to consider using a centralized state management tool, such as Redux or the React Context API, to manage state across your application.

// That being said, useReducer can still be a useful tool for managing state within individual components, even in a large application. You can use it to keep the state management logic localized within a component, which can make it easier to reason about and maintain. Additionally, using useReducer can help you avoid the need to pass state down through multiple levels of components, which can make your code cleaner and easier to understand.

// In summary, while useReducer can be used in large applications to manage state within individual components, it's important to consider centralized state management tools when your application grows in size and complexity.

// The major advantage of using Redux over useReducer is its ability to manage global state across an entire application. Redux provides a centralized store for managing state, which can be accessed by any component in the application. This eliminates the need for passing down state as props or using context API, making it easier to manage and access state data.

// Another advantage of Redux is its ability to manage complex state transformations and side-effects using middleware. Middleware can intercept and modify actions before they reach the reducers, which can be used for tasks such as logging, async operations, and API integration. This can help keep your application logic organized and maintainable.

// Additionally, Redux provides tools such as the Redux DevTools, which allow you to debug your application state and actions in real-time. This can be incredibly helpful when developing and debugging complex applications.

// While useReducer can be a useful tool for managing state within individual components, it doesn't provide the same level of global state management and tooling that Redux does. Therefore, Redux is generally a better choice for larger, more complex applications with a lot of state to manage across multiple components.

//********************/
// useCallback is a hook in React that returns a memoized callback function. The primary purpose of useCallback is to optimize performance by avoiding unnecessary re-renders caused by passing new callback functions as props to child components.

// Think of memoization as caching a value so that it does not need to be recalculated.
// The useCallback Hook only runs when one of its dependencies update.This can improve performance.

// Here are some cases when you should use useCallback:

// When passing a callback function to a child component that needs to be memoized to avoid unnecessary re-renders.
// When creating a memoized version of a function that has expensive calculations or operations.
// When using useEffect with a dependency array that includes a function to avoid re-triggering the effect unnecessarily.

// Here are some cases when you should not use useCallback:

// When the callback function is simple and doesn't have any dependencies. In this case, the performance gains from memoization may be negligible or even negative.
// When creating a new function every time is not a performance issue and/or the function is not being passed to child components. In these cases, the overhead of useCallback may outweigh any potential performance gains.

// In summary, useCallback can be a useful tool for optimizing performance by memoizing callback functions. It is best used when passing memoized callback functions to child components or when creating a memoized version of a function that has expensive calculations or operations.

// The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

//********************/

// useMemo: useMemo is a hook in React that memoizes the result of a function, similar to useCallback, but for general values instead of functions. The primary purpose of useMemo is to optimize performance by avoiding unnecessary calculations and re-renders of components.


// useMemo() is a React Hook that we can use to wrap functions within a component. We can use this to ensure that the values within that function are re-computed only when one of its dependencies change

// useMemo, on the other hand, is a hook that you can use to memoize a value. It takes two arguments: a function that computes the value you want to memoize, and an array of dependencies that the function depends on. The function is only re-executed if one of the dependencies has changed, otherwise, it returns the cached value. Here's an example:

import React, { useMemo } from 'react';

const MyComponent1 = ({ propA, propB }) => {
  const myMemoizedValue = useMemo(() => {
    // Expensive computation
    return someValue;
  }, [propA, propB]);

  // Render logic that uses myMemoizedValue
};

export default MyComponent1;

// In this example, myMemoizedValue is only re-computed if either propA or propB changes, but not if any other props or state changes. This is useful for expensive computations or for preventing unnecessary re-renders caused by the use of complex or heavy dependencies.


// React.memo() is a higher-order component that we can use to wrap components that we do not want to re-render unless props within them change

// React.memo is a higher-order component that you can use to memoize a functional component. It works by caching the result of the component's rendering so that if the props passed to the component haven't changed, React can skip the rendering process altogether and reuse the cached result. Here's an example:

import React, { memo } from 'react';

const MyComponent = memo(({ propA, propB }) => {
  // Render logic
});

export default MyComponent;

// In this example, MyComponent will only re-render if either propA or propB changes, but not if any other props or state changes.

// In summary, React.memo memoizes the rendering of a component, while useMemo memoizes the value returned by a function.

// use useMemo when:

// 1. You have a function that performs a complex computation and you want to cache its result.
// 2. The result of your function depends on certain props or state, and you want to re-compute the value only when one of the dependencies changes.
// 3. You want to prevent unnecessary re-renders caused by the use of complex or heavy dependencies.

// Use React.memo when:

// 1. Your functional component renders frequently with the same props.
// 2. The rendering of your functional component is expensive and you want to avoid unnecessary re-renders.
// 3. You want to improve the overall performance of your application by reducing the number of re-renders.

// React.memo() is a higher-order component (HOC) that we can use to wrap components that we do not want to re-render unless props within them change

// useMemo() is a React Hook that we can use to wrap functions within a component. We can use this to ensure that the values within that function are re-computed only when one of its dependencies change

//********************/
// useRef
// In React, useRef is a Hook that provides a way to access and manipulate a DOM element or a value that persists between re-renders of a component without triggering a re-render.

// Here are some common use cases for useRef in React:

// Accessing DOM elements: Use useRef to access DOM elements, such as to set focus or measure dimensions, without triggering a re-render.

// Storing mutable values: Use useRef to store mutable values that need to persist between re-renders of a component, such as previous state or props, or a timeout or interval ID.

// Caching expensive computations: Use useRef to cache the result of an expensive computation, so that it can be reused on subsequent re-renders without re-computing it.

// Managing uncontrolled components: Use useRef to get the value of an uncontrolled component, such as an input element, without using state.

// Interacting with third-party libraries: Use useRef to interact with third-party libraries that require a mutable reference, such as D3.js or video players.

//********************/
// custom hook: 

// Custom hooks are a powerful feature in React that allow you to extract reusable logic from your components into reusable functions. A custom hook is simply a function that starts with the word "use" (e.g. useMyCustomHook), and can contain any other hooks, state, or logic that you want to reuse across multiple components.

// Here are some use cases for custom hooks:

// API requests: If your application makes a lot of API requests, you can create a custom hook to handle the fetching and caching of data. This can help to reduce duplication and improve performance, since you can reuse the same fetch logic across multiple components.

// Form validation: Form validation can be a complex and repetitive task, but a custom hook can simplify the process by encapsulating the validation logic. You can create a custom hook that takes in a set of validation rules and returns a function that can be used to validate form fields.

// Authentication: Authentication is a common requirement in many applications, and a custom hook can help to manage the authentication state across multiple components. You can create a custom hook that handles login/logout functionality, as well as managing the user's authentication state.

// Local storage: If you need to store data locally in the browser, you can create a custom hook to handle the interaction with local storage. This can help to simplify the code and ensure consistency across multiple components.

// Animation: Animating components in React can be challenging, but a custom hook can help to encapsulate the animation logic and make it easier to reuse. You can create a custom hook that takes in an animation configuration and returns a set of hooks and functions that can be used to animate components.

// Overall, custom hooks are a powerful tool that can help to simplify your code and make it more reusable. By encapsulating complex logic into reusable functions, you can create more modular and maintainable code that's easier to reason about and debug.

// What Are The 2 Rules You Must Follow While Using Hooks?
// There are 2 rules which are imposed while you are coding with Hooks:

// React Hooks should only be called at the Top Level. They shouldn’t be called inside loops, nested functions or conditions.
// Hooks can only be called from React Function Components.

// Call Hooks at the top level only:

// Make sure not to call Hooks within loops, nested functions, or conditions. It is important to note that Hooks must always be utilized at the superior level of the React functions. It suggests that Hooks are invoked in the same order every time a component is rendered.

// Call Hooks from React functions only:

// It is not allowed to call Hooks from standard JavaScript functions. The alternative is you can call Hooks from React function components. It is allowed to call Hooks from custom Hooks.


// useState
// The useState hook is used for managing state in functional components. It takes an initial value as an argument and returns an array with two values - the current state value and a function to update the state value

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// useEffect
// The useEffect hook is used for managing side effects in functional components. It takes a function as an argument and runs it after every render cycle. It can also take a second argument, an array of dependencies, to control when the function should be run.

import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p>Time: {time} seconds</p>;
}

// useContext
// The useContext hook is used for consuming a context in functional components. It takes a context object as an argument and returns the current context value.

import React, { useContext } from 'react';
import MyContext from './MyContext';

function MyComponent() {
  const value = useContext(MyContext);

  return <p>{value}</p>;
}


// useReducer
// The useReducer hook is used for managing complex state in functional components. It takes a reducer function and an initial state value as arguments and returns an array with two values - the current state value and a dispatch function to update the state value.

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}


// useCallback
// The useCallback hook is used for optimizing performance in functional components. It takes a function and an array of dependencies as arguments and returns a memoized version of the function that only changes when the dependencies change.

import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count => count + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// useMemo is a hook in React that is used to memoize the results of a function call. 
// Memoization is an optimization technique used to cache the results of a function call, so that the function doesn't have to be called again with the same arguments. useMemo is useful when you have a function that is expensive to compute and doesn't change frequently.

// Here's an example of how to use useMemo:

import React, { useState, useMemo } from 'react';

function Fibonacci({ n }) {
  const [fib, setFib] = useState(0);

  const calculateFibonacci = (n) => {
    if (n <= 1) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  };

  const memoizedFibonacci = useMemo(() => {
    return calculateFibonacci(n);
  }, [n]);

  return (
    <div>
      <p>The {n}th Fibonacci number is {memoizedFibonacci}</p>
      <button onClick={() => setFib(fib + 1)}>Calculate next number</button>
    </div>
  );
}

// In this example, the Fibonacci component takes a prop n which is used to calculate the nth Fibonacci number. The calculateFibonacci function is used to calculate the Fibonacci number recursively.

// The useMemo hook is used to memoize the result of the calculateFibonacci function. The memoizedFibonacci variable will only be recomputed when the n prop changes. This means that if the component is rerendered due to some other state change, the memoizedFibonacci value will be reused instead of recalculated.

// Note that useMemo should only be used when the computation is expensive or if you need to avoid unnecessary re-renders. If the computation is cheap or if you want to recompute the value on every render, use const instead of useMemo.

// useRef is a hook in React that provides a way to access and store a mutable value that persists across component renders. It returns a mutable ref object that can be used to store any value, similar to how ref works in a class component.

// Here's an example of how to use useRef:

import React, { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter some text:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

// In this example, the TextInput component renders a form with a text input field and a submit button. The useRef hook is used to create a reference to the input field.

// The handleSubmit function is called when the form is submitted. It logs the value of the input field to the console and then clears the input field by setting its value to an empty string.

// Note that useRef should only be used when you need to store a mutable value that persists across component renders. If you only need to store a value during a single render, use a normal variable instead.
