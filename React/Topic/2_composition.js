// Composition is a powerful concept in React that allows you to combine and reuse UI components. In React, composition is achieved by nesting components within other components, and passing props down to them.

// Here's an example of how composition works in React:

// Let's say we want to create a simple card component that displays a title, some content, and an image. We can start by creating a component for the title:

function CardTitle(props) {
    return <h2>{props.title}</h2>;
}

// Next, we create a component for the content:
function CardContent(props) {
    return <p>{props.content}</p>;
}

// And finally, we create a component for the image:
function CardImage(props) {
    return <img src={props.src} alt={props.alt} />;
}

// Now we can combine these components into a single Card component using composition:
function Card(props) {
    return (
      <div className="card">
        <CardTitle title={props.title} />
        <CardContent content={props.content} />
        <CardImage src={props.imageSrc} alt={props.imageAlt} />
      </div>
    );
}

// Now we can use the Card component anywhere in our application, and pass in the necessary props to customize it:

<Card 
  title="Card Title" 
  content="This is some content for the card." 
  imageSrc="https://example.com/image.jpg" 
  imageAlt="Alt text for the image" 
/>

// By using composition in this way, we can create complex UI components that are easy to understand and maintain, and can be reused throughout our application.

// Inheritance is a concept from object-oriented programming (OOP) that allows one class to inherit properties and methods from another class. However, in React, inheritance is not used as much as composition to build UI components.

// Instead of using inheritance, React encourages developers to use composition to create complex UI components. Composition is achieved by nesting components within other components, and passing props down to them. This approach is more flexible and easier to maintain than inheritance, as it allows you to reuse components and build complex UIs without creating tightly coupled classes.

// In React, you can still use inheritance if you want to create a new class that inherits properties and methods from an existing class. However, this is not the preferred approach for building UI components. If you find yourself repeating code or functionality across different components, you can instead extract that functionality into a separate component and reuse it using composition.

// In summary, inheritance is not as commonly used in React as composition, as React's component-based architecture encourages developers to build complex UIs using composition and props.
  




  
  

  

