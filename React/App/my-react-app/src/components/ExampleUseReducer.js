import React, { useReducer } from 'react'

function ExampleUseReducer() {
    const initialState = { count: 0 };
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count !== 0 ? state.count - 1 : (state.count = 0) };
            default:
                throw new Error();
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    )
}

export default ExampleUseReducer