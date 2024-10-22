
import './App.css';
import UseFetchHookTest from './components/test';
import UseOnClickOutsideTest from './components/use-outside-click/test';
import ScrollToTopAndBottom from './components/use-window-resize/scroll-to-top-buttom';
import UseWindowResizeTest from './components/use-window-resize/test';


function App() {
  return (
    <div className="App">

      {/* use-fecth- Custom Hook */}
      {/* <UseFetchHookTest/> */}

      {/* Use OnClick Outside Hook Test */}
      {/* <UseOnClickOutsideTest/> */}

      {/* Use Window Resize Hook Test */}
      {/* <UseWindowResizeTest/> */}

      {/* Scroll to top and bottom */}
      <ScrollToTopAndBottom/>
      
    </div>
  );
}

export default App;
