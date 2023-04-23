// Syntactic events in React refer to the use of event handlers in JSX syntax. In React, event handlers are written in camelCase and are passed to components as props.

// For example, consider the following code:

function MyButton(props) {
    function handleClick() {
      console.log('Button clicked');
    }
  
    return (
      <button onClick={handleClick}>
        {props.label}
      </button>
    );
  }

//   In the example above, we're creating a MyButton component that takes a label prop and renders a button with an onClick event handler. When the button is clicked, the handleClick function is called, which logs a message to the console.

//   Note that we're using camelCase to name the event handler (onClick), and we're passing a reference to the handleClick function as the prop value.
  
//   Syntactic events in React are convenient and easy to use, but they can have some limitations. For example, they can make it difficult to handle certain types of events, such as keyboard events or mouse hover events, that require more complex event handling logic.
  
//   In such cases, it may be necessary to use more advanced event handling techniques, such as using the addEventListener method or using a third-party library like React-Event-Listener. However, for simple event handling scenarios, syntactic events in React provide a convenient and straightforward way to handle user interactions with components.