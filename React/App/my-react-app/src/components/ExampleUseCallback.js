import React, {useCallback, useState} from 'react'

function ExampleUseCallback() {
  return (
    <>
        <div>ExampleUseCallback</div>
        <ParentComponentA/>
        <ParentComponentB/>
    </>
  )
}

function ParentComponentA() {
    const [count, setCount] = useState(0);
  
    const handleClick = () => {
        console.log('Handle A****');
      setCount(count + 1);
    };
  
    return (
      <div>
        <p>Count: {count}</p>
        <ChildComponentA onClick={handleClick} />
      </div>
    );
  }
  
  function ChildComponentA({ onClick }) {
    // Render some child component
    return <button onClick={onClick}>Increment count</button>;
  }

  function ParentComponentB() {
    const [count, setCount] = useState(0);
  
    const handleClick = useCallback(() => {
        console.log('Handle B****');
      setCount(count + 1);
    }, [count]);
  
    return (
      <div>
        <p>Count: {count}</p>
        <ChildComponentB onClick={handleClick} />
      </div>
    );
  }
  
  function ChildComponentB({ onClick }) {
    // Render some child component
    return <button onClick={onClick}>Increment count</button>;
  }

export default ExampleUseCallback