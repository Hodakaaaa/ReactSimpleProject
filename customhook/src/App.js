
import './App.css';
import UseFetchHookTest from './components/test';
import UseOnClickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';


function App() {
  return (
    <div className="App">

      {/* use-fecth- Custom Hook */}
      {/* <UseFetchHookTest/> */}

      {/* Use OnClick Outside Hook Test */}
      {/* <UseOnClickOutsideTest/> */}

      {/* Use Window Resize Hook Test */}
      <UseWindowResizeTest/>
      
    </div>
  );
}

export default App;
