// Normal functions and React custom hooks are different concepts that serve different purposes in a React application.

// Normal functions in JavaScript are used to encapsulate a set of statements that can be executed when the function is called. They can be defined with or without parameters, and can optionally return a value. Normal functions are not specific to React, and can be used in any JavaScript application for a wide range of purposes.

// On the other hand, React custom hooks are a specific type of function that allow you to reuse logic across multiple components in a React application. Custom hooks are defined using the use prefix (e.g. useCustomHookName) and follow a set of rules that enable them to access React's built-in hooks (such as useState and useEffect) and provide their own stateful and reusable logic.

// Custom hooks are especially useful when you need to share stateful logic between components, or when you want to extract complex behavior from a component into a separate function for readability and reusability. They can also be used to share non-UI related logic, such as API requests, validation, or business logic.

// In summary, normal functions in JavaScript are a general-purpose tool for encapsulating and executing a set of statements, while React custom hooks are a specialized tool for sharing stateful and reusable logic between multiple React components.

// you can use react js life cycle method inside custom hook

// Hooks use a stateful closure around the invocation of the function component to store the state on behalf of that component instance. That closure is maintained by React.

// - Custom hook will only be "stateful" if you use state with useState inside (or something that implements useState),
// - Hooks should be called from the React code only not from the regular JS functions. Hence, Hooks' scope is limited to the React code world and has more power to do a lot with React code,
// - In the class-based components, the Hooks won't work but regular functions will.
// - In the regular JS functions, you can't access useState, useEffect, useContext etc. but in react custom hooks I can.