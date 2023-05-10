import React, { useEffect, useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log("ParentComponent");
    }, []);
    return (
    <>
        <div>ParentComponent</div>
        <button onClick={() =>{
            // console.log('click me');
            setCounter(counter + 1)
        }}>Click Me</button>
        <ChildComponent data={counter}/>
    </>
  )
}

export default ParentComponent