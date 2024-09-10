import logo from './logo.svg';
import './App.css';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* Star Rating Component */}
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
