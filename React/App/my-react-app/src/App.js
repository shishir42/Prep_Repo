import React,{useState} from 'react';
import './App.css';
import ExampleCustomHook from './components/ExampleCustomHook';
import ExampleCustomHookFetch from './components/ExampleCustomHookFetch';
import ExampleUseEffect from './components/ExampleUseEffect';
import ExampleUseState from './components/ExampleUseState';
import { UserContext } from './context/UserContext';
import ExampleUseContext from './components/ExampleUseContext';
import ExampleUseReducer from './components/ExampleUseReducer';
import ExampleUseCallback from './components/ExampleUseCallback';
import ExampleUseMemo from './components/ExampleUseMemo';
import ExampleUseRef from './components/ExampleUseRef';
import MyHOCComponentWithData from './components/ExampleHOC';

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
        <ExampleUseCallback/>
        <ExampleUseMemo/>
        <ExampleUseRef/>
        <MyHOCComponentWithData dataSource="https://jsonplaceholder.typicode.com/users"/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
