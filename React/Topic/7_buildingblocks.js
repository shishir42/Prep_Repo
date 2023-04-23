// different part of components in react 

// In React, components are the building blocks of a user interface. There are two main types of components: functional components and class components.

// Functional Components:
// Functional components are simply JavaScript functions that accept props as arguments and return JSX. They are used for simple UI components that don't require state or lifecycle methods.
// Here's an example of a simple functional component:

function Button(props) {
    return <button>{props.label}</button>;
}

//   Class Components:
//   Class components are JavaScript classes that extend the React.Component class. They have access to state and lifecycle methods, and are used for more complex UI components.
//   Here's an example of a simple class component:

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    increment() {
      this.setState({ count: this.state.count + 1 });
    }
  
    render() {
      return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={() => this.increment()}>Increment</button>
        </div>
      );
    }
  }

// Presentational Components:
// Presentational components are components that are primarily focused on the presentation of data. They are often functional components and are responsible for rendering a specific part of the UI.
// Here's an example of a presentational component:

function ProductList(props) {
    return (
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    );
  }

  
// 4. Container Components:
// Container components are components that are primarily focused on managing state and passing data down to presentational components. They are often class components and are responsible for managing the business logic of the application.
// Here's an example of a container component:

class ProductPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = { products: [] };
    }
  
    componentDidMount() {
      fetch('/api/products')
        .then((response) => response.json())
        .then((data) => this.setState({ products: data }));
    }
  
    render() {
      return (
        <div>
          <h1>Products</h1>
          <ProductList products={this.state.products} />
        </div>
      );
    }
  }
  