import './App.css';
import Accordion from './components/accordion';
import StarRating from './components/star-rating';
import WeatherApp from './components/weather-app';

function App() {
  return (
    <div className="App">
      <Accordion/>
      <StarRating/>
      <WeatherApp/>
    </div>
  );
}

export default App;
