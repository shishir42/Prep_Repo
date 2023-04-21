import React, {useState, useEffect} from 'react'

function useCounter(initializer = 0, componentName) {
    const [counter, setCounter] = useState(initializer);
    const resetCounter = () =>{
        setCounter(counter + 1);
    }
    useEffect(() => {
        // Some logic that will be used in multiple components
        console.log("The button of the " 
        + componentName + " is clicked "
        + counter + " times.");
    } , [counter , componentName]);

  return resetCounter;
}

export default useCounter