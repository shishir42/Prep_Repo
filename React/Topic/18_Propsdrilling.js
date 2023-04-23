// Props drilling in React is the process of passing data from a parent component down to a child component through props, and then passing that same data down to another child component, and so on, until it reaches the component that needs it. This can lead to a situation where multiple components receive props that they don't use, making the code harder to read and maintain.

// Here's an example of how props drilling works:

function App() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <h1>Count: {count}</h1>
        <IncrementButton onIncrement={() => setCount(count + 1)} />
      </div>
    );
  }
  
  function IncrementButton(props) {
    return <button onClick={props.onIncrement}>Increment</button>;
  }

  
//   In this example, the App component has a state variable called count, and renders an instance of the IncrementButton component, passing a callback function as the onIncrement prop.

//   When the IncrementButton component is clicked, it calls the onIncrement function, which updates the count state variable in the App component. This is an example of props drilling, because the IncrementButton component doesn't need to know about the count variable, but it still receives it as a prop and passes it down to the button element.
  
//   To avoid props drilling, you can use other techniques like context, render props, or higher-order components. These patterns allow you to pass data down the component tree without having to pass it through every intermediate component.
  
//   Here's an example of how to use a higher-order component to avoid props drilling:  

function withIncrement(Component) {
    return function WithIncrement(props) {
      const [count, setCount] = useState(0);
  
      function handleIncrement() {
        setCount(count + 1);
      }
  
      return <Component count={count} onIncrement={handleIncrement} {...props} />;
    };
  }
  
  function IncrementButton(props) {
    return <button onClick={props.onIncrement}>Increment ({props.count})</button>;
  }
  
  const IncrementButtonWithIncrement = withIncrement(IncrementButton);
  
  function App() {
    return (
      <div>
        <h1>Count:</h1>
        <IncrementButtonWithIncrement />
      </div>
    );
  }

//   In this example, the withIncrement function is a higher-order component that takes a component as an argument and returns a new component that has the count and onIncrement props. The App component renders an instance of the IncrementButtonWithIncrement component, which is the result of calling withIncrement(IncrementButton).

// The IncrementButton component doesn't receive any props related to the count variable, but it still has access to it through the count prop that's injected by the higher-order component. This avoids props drilling and makes the code more maintainable.

// Render Prop
function Counter(props) {
    const [count, setCount] = useState(0);
  
    function handleIncrement() {
      setCount(count + 1);
    }
  
    return props.render(count, handleIncrement);
  }
  
  function IncrementButton(props) {
    return <button onClick={props.onIncrement}>Increment ({props.count})</button>;
  }
  
  function App() {
    return (
      <div>
        <h1>Count:</h1>
        <Counter
          render={(count, handleIncrement) => (
            <IncrementButton count={count} onIncrement={handleIncrement} />
          )}
        />
      </div>
    );
  }

//   In this example, the Counter component is a render prop that takes a function called render as a prop. Inside the Counter component, it has a state variable called count, and a callback function called handleIncrement that updates the count variable. The render function is called with count and handleIncrement as arguments, and returns the rendered child component.

//   The App component renders an instance of the Counter component, passing a function to the render prop that returns an instance of the IncrementButton component. The IncrementButton component receives the count and onIncrement props from the Counter component, without having to pass them through any intermediate components.  
