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
