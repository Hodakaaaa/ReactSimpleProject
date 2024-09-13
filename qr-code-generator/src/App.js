import logo from './logo.svg';
import './App.css';
import QRCodeGenerator from './compon/qr-code-generator';

function App() {
  return (
    <div className="App">
      {/* Qr Code Component */}
      <QRCodeGenerator/>
    </div>
  );
}

export default App;
