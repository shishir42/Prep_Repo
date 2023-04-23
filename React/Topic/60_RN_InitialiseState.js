// Can you initialise state from a function? Provide and example
const StateFromFn = () => {
  const [token] = useState(() => {
    let token = window.localStorage.getItem("my-token");
    return token || "default#-token#"
  })

  return <div>Token is {token}</div>
}

// Do two components using the same Hook share state?

// No. Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.

// useState and useRef hooks

// - Updating a reference created by useRef doesn't trigger re-rendering, while updating the state (setState) makes the component re-render;

// - useRef returns an object with a current property holding the actual value. In contrast, useState returns an array with two elements.

// - useRef‘s current property is mutable, but useState‘s state variable is not.

// - The reference update is synchronous (the updated reference value is available right away), while the state update is asynchronous (the state variable is updated after re-rendering).

// Using useRef - no re-renders

const countRef = useRef(0);
  
const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
};


// Using useState - triggers re-render

const [count, setCount] = useState(0);
  
const handle1 = () => {
    const updatedCount = count + 1;
    console.log(`Clicked ${updatedCount} times`);
    setCount(updatedCount);
};

// How to use componentWillMount() in React Hooks?

// You cannot use any of the existing lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount etc.) in a hook. They can only be used in class components. And with Hooks you can only use in functional components.
// You can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
// 1. Code inside componentDidMount run once when the component is mounted. useEffect hook equivalent for this behaviour is

useEffect(() => {
 // Your code here
}, []);


// 2. Without the second parameter the useEffect hook will be called on every render (like componentDidUpdate) of the component which can be dangerous:

useEffect(() => {
 // Your code here
});

// 3. Hook equivalent of componentWillUnmount() code will be as follows

useEffect(() => {
 window.addEventListener('mousemove', () => {});

 // returned function will be called on component unmount 
 return () => {
   window.removeEventListener('mousemove', () => {})
 }
}, [])
