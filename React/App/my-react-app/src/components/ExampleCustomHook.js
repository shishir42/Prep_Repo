import React from 'react'
import useCounter from '../customHooks/useCounter';

function ExampleCustomHook() {
    const clickedButton = useCounter(0, "FirstComponent");
    return (
        <div>
            <h1> This is the First Component</h1>
            <button onClick={clickedButton}>
                Click here!
            </button>
        </div>
    )
}

export default ExampleCustomHook