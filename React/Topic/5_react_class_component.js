// The lifecycle of a React class component can be divided into four phases: initialization, mounting, updating, and unmounting. Each phase consists of a series of lifecycle methods that are invoked by React at different times during the component's lifetime.

// Here is an overview of the lifecycle methods for a class component:

// 1. Initialization:

// constructor(props): This is the first method called when a component is created. It is used to initialize the component's state and bind event handlers.

// static getDerivedStateFromProps(props, state): This method is called right before render() and is used to update the component's state based on changes in the props.

// 2. Mounting:

// render(): This method is required and returns the JSX that will be rendered to the DOM.

// componentDidMount(): This method is called after the component has been mounted to the DOM. It is used to perform side effects, such as fetching data or setting up event listeners.

// 3 Updating:

// shouldComponentUpdate(nextProps, nextState): This method is called before a component is re-rendered. It returns a boolean indicating whether the component should re-render or not.

// render(): This method is called again to re-render the component with the updated state and/or props.

// componentDidUpdate(prevProps, prevState): This method is called after the component has been re-rendered. It is used to perform side effects, such as updating the DOM or fetching new data.

// 4 Unmounting:

// componentWillUnmount(): This method is called before the component is removed from the DOM. It is used to perform cleanup, such as removing event listeners or canceling timers.

// Functional components, on the other hand, have a simpler lifecycle because they don't have their own instances. Instead, they are just functions that receive props and return JSX. They also support React hooks, which can be used to perform lifecycle-like actions.

// Here is an overview of the lifecycle-like hooks available for functional components:

// 1. Mounting:

// useEffect(() => {}, []): This hook is called after the component has been mounted to the DOM. It is used to perform side effects, such as fetching data or setting up event listeners.

// 2. Updating:

// useEffect(() => {}): This hook is called after every re-render of the component. It is used to perform side effects, such as updating the DOM or fetching new data.

// useEffect(() => {}, [prop1, prop2]): This hook is called only when the specified props have changed.

// 3. Unmounting:

// useEffect(() => { return () => {} }, []): This hook is called before the component is removed from the DOM. It is used to perform cleanup, such as removing event listeners or canceling timers.


// In React, there are several lifecycle methods that are called during the different stages of a component's lifecycle. Here's a list of the sequence of lifecycle methods in React, grouped by the stage of the component's lifecycle:

// Mounting stage:
// constructor()
// static getDerivedStateFromProps()
// render()
// componentDidMount()

// Updating stage:
// static getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()

// Unmounting stage:
// componentWillUnmount()

// Error handling stage:
// static getDerivedStateFromError()
// componentDidCatch()

// These lifecycle methods allow you to perform certain actions at different stages of a component's lifecycle, such as initializing state, updating the UI, handling errors, and cleaning up resources. Understanding these lifecycle methods is important for building performant and maintainable React applications.

// In React, functional components use Hooks to manage state and lifecycle methods. Here's the list of the sequence of lifecycle methods in React functional components, grouped by the stage of the component's lifecycle:

// Mounting stage:
// useState() or other Hooks to initialize state
// useEffect() with an empty dependency array ([]) to perform actions after the component has mounted

// Updating stage:
// useEffect() with a dependency array to perform actions when a specific state or prop changes

// Unmounting stage:
// useEffect() with a function that returns a cleanup function to clean up any resources when the component is unmounted

// Error handling stage:
// useErrorBoundary() or useEffect() with a try...catch block to handle errors
// These lifecycle methods allow you to perform certain actions at different stages of a functional component's lifecycle, such as initializing state, updating the UI, handling errors, and cleaning up resources. By using Hooks to manage state and lifecycle methods, functional components can have similar functionality to class components in React.