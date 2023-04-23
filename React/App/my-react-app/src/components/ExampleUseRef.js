import React,{useState, useRef} from 'react'

function ExampleUseRef() {
    const myRef = useRef(null);
    const [count, setCount] = useState(0);
    // We can also use useRef to store values that persist between re-renders of a component. Here's an example:
    const prevCountRef = useRef();

    function handleClick() {
      myRef.current.focus();
      prevCountRef.current = count;
      setCount((prevCount) => prevCount + 1);
    }
  
    return (
      <div>
        <p>Current count: {count}</p>
        <p>Previous count: {prevCountRef.current}</p>
        <input type="text" ref={myRef} />
        <button onClick={handleClick}>Focus Input</button>
      </div>
    );
}

export default ExampleUseRef