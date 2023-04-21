import React, {useState} from 'react'

function ExampleUseState() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={()=> setCount(count + 1)}>
            Click Me   
        </button>
        <div>
            <p>age: {age}</p>
            <p>fruit: {fruit}</p>
            {
                todos.length>0 && todos.map((data, index)=> {
                    return <div key={index}>{data.text}</div>
                })
            }
        </div>
    </div>
  )
}

export default ExampleUseState