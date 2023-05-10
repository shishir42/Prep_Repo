// https://legacy.reactjs.org/docs/react-component.html
// https://legacy.reactjs.org/docs/hooks-effect.html

// The lifecycle of a React class component can be divided into four phases: initialization, mounting, updating, and unmounting. Each phase consists of a series of lifecycle methods that are invoked by React at different times during the component's lifetime.

// Mounting-->
// constructor()
// static getDerivedStateFromProps()
// render()
// componentDidMount()

// UNSAFE_componentWillMount() is invoked just before mounting occurs. It is called before render(), therefore calling setState() synchronously in this method will not trigger an extra rendering. Generally, we recommend using the constructor() instead for initializing state.

//constructor
// Typically, in React constructors are only used for two purposes:
// Initializing local state by assigning an object to this.state.
// Binding event handler methods to an instance.
// You should not call setState() in the constructor(). Instead, if your component needs to use local state, assign the initial state to this.state directly in the constructor:
constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

// static getDerivedStateFromProps()
// static getDerivedStateFromProps(props, state)
// This method is called right before render() and is used to update the component's state based on changes in the props.It should return an object to update the state, or null to update nothing.
// This method exists for rare use cases where the state depends on changes in props over time. For example, it might be handy for implementing a <Transition> component that compares its previous and next children to decide which of them to animate in and out.

// render(): This method is required and returns the JSX that will be rendered to the DOM.

// componentDidMount(): This method is called after the component has been mounted to the DOM. It is used to perform side effects, such as fetching data or setting up event listeners.
// This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().



// Updating-->An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

// static getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()

// UNSAFE_componentWillUpdate()
// UNSAFE_componentWillReceiveProps()

// shouldComponentUpdate(nextProps, nextState): This method is called before a component is re-rendered. It returns a boolean indicating whether the component should re-render or not.

// shouldComponentUpdate() is invoked before rendering when new props or state are being received. Defaults to true. This method is not called for the initial render or when forceUpdate() is used.

// The purpose of shouldComponentUpdate is to improve the performance of React applications by reducing unnecessary re-renders. By default, whenever a component's props or state change, React re-renders the component and its child components. However, in certain cases, re-rendering may not be necessary if the new props or state values are the same as the previous ones.

// By implementing shouldComponentUpdate, you can define your own conditions to determine whether a component should re-render or not. If shouldComponentUpdate returns false, the component will not re-render, and thus its associated rendering and reconciliation process are skipped

// Currently, if shouldComponentUpdate() returns false, then UNSAFE_componentWillUpdate(), render(), and componentDidUpdate() will not be invoked. 

// getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle method will be passed as a parameter to componentDidUpdate().

// This use case is not common, but it may occur in UIs like a chat thread that need to handle scroll position in a special way.

// componentDidUpdate(prevProps, prevState, snapshot)
// componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.

// Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).

// You may call setState() immediately in componentDidUpdate() but note that it must be wrapped in a condition 

// The purpose of componentDidUpdate is to perform side effects or additional operations that are required after the component updates, such as fetching new data from an API, updating the DOM based on changes, or interacting with external libraries or services.


// Unmounting
// This method is called when a component is being removed from the DOM:
// componentWillUnmount()
// This method is called before the component is removed from the DOM. It is used to perform cleanup, such as removing event listeners or canceling timers.

// Error Handling
// These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

// static getDerivedStateFromError()
// componentDidCatch()






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




// If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

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