import logo from './logo.svg';
import './App.css';
import ImageSlidder from './components/image-slider';

function App() {
  return (
    <div className="App">
      {/* Image Slider Component */}
      <ImageSlidder url = {'https://picsum.photos/v2/list'} page={"1"} limit={'4'}/>
    </div>
  );
}

export default App;
