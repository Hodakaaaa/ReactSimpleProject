
import './App.css';
import UseFetchHookTest from './components/test';
import UseOnClickOutsideTest from './components/use-outside-click/test';
import ScrollToTopAndBottom from './components/use-window-resize/scroll-to-top-buttom';
import ScrollToSection from './components/use-window-resize/scroll-to-top-buttom/scroll-to-top';
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
      {/* <ScrollToTopAndBottom/> */}

      {/* Scroll to a particular section */}
      <ScrollToSection/>
      
    </div>
  );
}

export default App;
