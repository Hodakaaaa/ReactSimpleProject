import logo from './logo.svg';
import './App.css';
import ScrollIndicator from './Components/scroll-indicator';

function App() {
  return (
    <div className="App">
      {/* Scroll Indicator Componenets */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>
    </div>
  );
}

export default App;
