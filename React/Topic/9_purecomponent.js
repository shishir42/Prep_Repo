// In React, a pure component is a component that only re-renders when its props or state change. Pure components are designed to optimize the rendering performance of React applications by reducing unnecessary re-renders.

// In class components, you can create a pure component by extending the React.PureComponent class instead of the React.Component class. The React.PureComponent class automatically implements a shouldComponentUpdate() method that performs a shallow comparison of the component's props and state, and only re-renders the component if there are changes. Here's an example:

import React from 'react';

class MyPureComponent extends React.PureComponent {
  render() {
    // Render logic
  }
}

// In functional components, you can create a pure component by using the React.memo() function. The React.memo() function takes a functional component as an argument and returns a memoized component that only re-renders when its props change. Here's an example:

import React from 'react';

const MyPureComponent = React.memo(({ propA, propB }) => {
  // Render logic
});

// In both examples, the MyPureComponent component will only re-render when its props or state change. This can improve the performance of your application by reducing the number of unnecessary re-renders.

// It's important to note that pure components only perform a shallow comparison of their props and state, so if you have complex data structures that are deeply nested, you may need to implement a custom shouldComponentUpdate() method or use the useMemo() hook to optimize your component's rendering.

import React from 'react';

class MyPureComponent extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

import React from 'react';

const MyPureComponent = React.memo(({ title, text }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
});

// If one of the props of a pure component is changed and the other one is not changed, the component will still re-render, even though one of the props has not changed.

// This is because pure components perform a shallow comparison of their props, which means that they only compare the top-level properties of the props object. If any of the top-level properties of the props object have changed, the component will re-render, even if the other properties of the props object are the same.