import React,{useState} from 'react';
import './App.css';
import ExampleCustomHook from './components/ExampleCustomHook';
import ExampleCustomHookFetch from './components/ExampleCustomHookFetch';
import ExampleUseEffect from './components/ExampleUseEffect';
import ExampleUseState from './components/ExampleUseState';
import { UserContext } from './context/UserContext';
import ExampleUseContext from './components/ExampleUseContext';
import ExampleUseReducer from './components/ExampleUseReducer';

function App() {
  const [user, setUser] = useState("John");

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <ExampleUseContext/>
        <ExampleUseState/>
        <ExampleUseEffect/>
        <ExampleCustomHook/>
        <ExampleCustomHook/>
        <ExampleCustomHookFetch/>
        <ExampleUseReducer/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
