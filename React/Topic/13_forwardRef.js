// In React.js, forwardRef is a method that allows you to pass a ref to a child component, allowing you to access its underlying DOM node or React component instance. This is useful when you want to pass a ref to a child component that is not a direct descendant of the parent component.

// Here's an example of how forwardRef works:

const MyComponent = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    );
  });
  
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
  
    componentDidMount() {
      console.log(this.myRef.current); // logs the <div> element
    }
  
    render() {
      return (
        <div>
          <MyComponent title="Hello" text="World" ref={this.myRef} />
        </div>
      );
    }
  }

//   In this example, the MyComponent component is created using React.forwardRef and takes a ref as a second argument. It renders a div with a title and text, and sets the ref to the div element.

//   The App component creates a ref using React.createRef() and passes it to the MyComponent component using the ref prop. When the component is mounted, the componentDidMount method logs the div element to the console.
  
//   Using forwardRef in this way allows you to pass a ref to a child component that is not a direct descendant of the parent component, making it easier to access the underlying DOM node or React component instance.  

// forwardRef is a higher-order component in React that allows a parent component to pass a ref down to one of its children. This is useful when you need to access the DOM node of a child component from the parent component.

import React, { forwardRef } from 'react';

const TextInput = forwardRef((props, ref) => {
  return (
    <input type="text" ref={ref} {...props} />
  );
});

function ParentComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <TextInput ref={inputRef} />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
}


// In this example, the TextInput component is wrapped in forwardRef. The ref argument is passed to the input element so that the parent component can access its DOM node.

// The ParentComponent component creates a ref using the useRef hook and passes it down to the TextInput component. When the button is clicked, the handleClick function is called, which focuses the input element by calling its focus method.

// Note that forwardRef should only be used when you need to pass a ref down to a child component. If you don't need to access the child component's DOM node from the parent component, you can use a normal component instead.