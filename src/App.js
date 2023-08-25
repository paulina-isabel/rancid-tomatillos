
import './App.css';
import movieData from './movieData.js';
import {useState} from 'react'
import AllMovies from './AllMovies.js'

function App() {
const [movies, setMovies] = useState(movieData)
console.log(typeof movieData)
  return (
    <div className="App">
      <AllMovies movies={movies} />
    </div>
  );
}

export default App;
