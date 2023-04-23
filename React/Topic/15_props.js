// In React.js, props are short for "properties", and are used to pass data from a parent component to a child component. Props are a way to make your components more reusable and configurable, as they allow you to customize the behavior of a component by passing in different data.

// Here's an example of how props work:

function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
  }
  
  function App() {
    return (
      <div>
        <Greeting name="Alice" />
        <Greeting name="Bob" />
        <Greeting name="Charlie" />
      </div>
    );
  }

  
//   In this example, the Greeting component takes a name prop, and uses it to render a personalized greeting. The App component renders three instances of the Greeting component, each with a different name prop.

// Using props in this way allows you to create reusable components that can be customized for different contexts. Props can be used to pass any kind of data, such as strings, numbers, arrays, objects, or even functions.

// Advantages of using props in React include:

// Reusability: Props make it easy to reuse components throughout your application, as you can customize their behavior by passing in different data.

// Configurability: Props allow you to configure the behavior of a component without changing its implementation, making it easier to maintain and debug your code.

// Data encapsulation: By passing data as props, you can encapsulate the data and behavior of a component, making it more modular and easier to reason about.

// Type safety: React provides a mechanism for defining the types of props that a component expects, which can help catch errors at compile time and improve the robustness of your code.

// Overall, props are a powerful and flexible feature of React that allow you to build reusable and configurable components, making it easier to create dynamic and interactive user interfaces.

// Here are the main differences between state and props in React:
// Source of data: Props are used to pass data from a parent component to a child component, whereas state is used to manage data within a component.
// Read-only vs mutable: Props are read-only, meaning that child components cannot modify the props they receive from their parent. In contrast, state is mutable and can be changed within a component using the setState() method.
// Scope: Props are scoped to a single component and its descendants, whereas state is scoped to a single component only.
// Changes: Props are typically passed in when a component is created and do not change during the component's lifecycle. In contrast, state can change multiple times during a component's lifecycle in response to user actions or other events.
// Defaults: Props can have default values specified in the parent component, whereas state must be initialized in the component itself.
// Updates: When props are updated in the parent component, the child component will receive the new values and re-render. In contrast, when state is updated using setState(), the component will re-render with the new state values.
// Passing data back up the component tree: Since props are read-only and can only be passed down from parent to child, if a child component needs to pass data back up to the parent component or to a sibling component, it must do so using a callback function passed down from the parent as a prop.
// Understanding the differences between state and props is important for writing effective and scalable React components.

// props : are immutable and are set by the parent and they are fixed throughout the lifetime of a component.
// state : is mutable. This means that state can be updated in the future while props can’t. we can initialize state in the constructor, and then call setState when we want to change it.
