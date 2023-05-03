//   How to avoid rerender <ExpensiveTree /> when input changed 
export default function App() {
    let [color, setColor] = useState('red');
    return (
      <div>
        <input value={color} onChange={(e) => setColor(e.target.value)} />
        <p style={{ color }}>Hello, world!</p>
        <ExpensiveTree />
      </div>
    );
  }
   
  function ExpensiveTree() {
    let now = performance.now();
    while (performance.now() - now < 100) {
      // Artificial delay -- do nothing for 100ms
    }
    return <p>slow component</p>;
  }
  
//   To avoid re-rendering the ExpensiveTree component when the input value changes, you can use the React.memo higher-order component to wrap the ExpensiveTree component. React.memo is a performance optimization that memoizes the component based on its props, so if the props don't change, the component won't re-render.

//   Here's an example of how to use React.memo in this scenario:

export default function App() {
    let [color, setColor] = useState('red');
    return (
      <div>
        <input value={color} onChange={(e) => setColor(e.target.value)} />
        <p style={{ color }}>Hello, world!</p>
        <ExpensiveTree />
      </div>
    );
  }
   
  const ExpensiveTree = React.memo(() => {
    let now = performance.now();
    while (performance.now() - now < 100) {
      // Artificial delay -- do nothing for 100ms
    }
    return <p>slow component</p>;
  });

// By wrapping the ExpensiveTree component in React.memo, the component will only re-render if its props change, which in this case, there are no props being passed to the component. Therefore, the ExpensiveTree component will only render once when it's initially mounted and won't re-render again when the input value changes.

// How to strict to render only once < ExpensiveTree/>

// To ensure that the ExpensiveTree component is only rendered once and never re-renders, you can use the React.useMemo hook to memoize the component's output. React.useMemo is similar to React.memo, but instead of memoizing a component, it memoizes the result of a function call.

// Here's an example of how to use React.useMemo to render the ExpensiveTree component only once:

export default function App() {
    let [color, setColor] = useState('red');
    const expensiveTree = React.useMemo(() => <ExpensiveTree />, []);
    return (
      <div>
        <input value={color} onChange={(e) => setColor(e.target.value)} />
        <p style={{ color }}>Hello, world!</p>
        {expensiveTree}
      </div>
    );
  }
   
  function ExpensiveTree() {
    let now = performance.now();
    while (performance.now() - now < 100) {
      // Artificial delay -- do nothing for 100ms
    }
    return <p>slow component</p>;
  }
  
//   In this example, we use React.useMemo to memoize the output of the ExpensiveTree component and store it in the expensiveTree variable. The second argument to React.useMemo is an array of dependencies, which are used to determine whether the memoized value should be recalculated. In this case, we pass an empty array as the second argument, indicating that the memoized value should only be calculated once, when the component mounts.

//   By rendering the memoized value of the ExpensiveTree component rather than the component itself, we ensure that the component is only rendered once and never re-renders, even if the input value changes.

// React.memo and React.useMemo are both React hooks that are used to optimize the performance of React components. However, they serve different purposes and are used in different scenarios.

// React.memo is a higher-order component that memoizes a component based on its props. When a component is wrapped with React.memo, React will only re-render the component if its props have changed. This can be useful for preventing unnecessary re-renders of expensive components or components that don't need to update frequently.

// React.useMemo, on the other hand, is a hook that memoizes the result of a function call. The memoized value is calculated lazily, meaning that it's only recalculated when one of the dependencies that are passed to the hook has changed. This can be useful for optimizing expensive calculations or complex computations that are used in a component.

// In summary, React.memo is used to optimize the rendering of a component based on its props, while React.useMemo is used to optimize the calculation of a value based on dependencies. Both can be useful tools for improving the performance of React components, but they are used in different scenarios and serve different purposes.
