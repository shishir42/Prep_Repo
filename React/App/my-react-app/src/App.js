import './App.css';
import ExampleCustomHook from './components/ExampleCustomHook';
import ExampleUseEffect from './components/ExampleUseEffect';
import ExampleUseState from './components/ExampleUseState';

function App() {
  return (
    <div className="App">
      <ExampleUseState/>
      <ExampleUseEffect/>
      <ExampleCustomHook/>
      <ExampleCustomHook/>
    </div>
  );
}

export default App;
