import React, { useState, useMemo } from "react";


function ExampleUseMemo() {
  return (
    <>
        <div>ExampleUseMemo</div>
        <MyComponentA/>
        <MyComponentB/>
    </>
  )
}


function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function MyComponentA() {
  const [number, setNumber] = useState(0);

  const result = fibonacci(number);

  return (
    <div>
      <p>Fibonacci of A {number} is {result}</p>
      <input type="number" value={number} onChange={e => setNumber(Number(e.target.value))} />
    </div>
  );
}

function MyComponentB() {
    const [number, setNumber] = useState(0);
  
    const result = useMemo(() => {
      return fibonacci(number);
    }, [number]);
  
    return (
      <div>
        <p>Fibonacci of B {number} is {result}</p>
        <input type="number" value={number} onChange={e => setNumber(Number(e.target.value))} />
      </div>
    );
  }

export default ExampleUseMemo