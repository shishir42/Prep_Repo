//In React.js, you can handle errors by using a combination of error boundaries and error handling methods.

//Error Boundaries:
//Error boundaries are a React component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of crashing the entire component tree. You can create an error boundary component by defining a new method componentDidCatch(error, info) in your class component:

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // Log the error
        console.error(error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

// In this example, the componentDidCatch method is called whenever an error is thrown in any of the child components. It sets the state to hasError and displays a fallback UI. You can wrap your component tree with the ErrorBoundary component to handle any errors that might occur.

// Error Handling Methods:
// Apart from error boundaries, you can also use try-catch blocks, Promise.catch(), and event handlers to handle errors in React.

// Try-catch blocks:

try {
    // code that might throw an error
} catch (error) {
    // handle the error
}

//   Promise.catch():
myPromise
    .then(response => {
        // handle the response
    })
    .catch(error => {
        // handle the error
    });

// Event handlers:
function handleClick() {
    try {
        // code that might throw an error
    } catch (error) {
        // handle the error
    }
}

<button onClick={handleClick}>Click Me</button>

