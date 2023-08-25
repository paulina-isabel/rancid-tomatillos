import logo from './logo.svg';
import './App.css';
import movieData from './movieData.js';
import {useState} from 'react'
import AllMovies from './AllMovies.js'

function App() {
const [movies, setMovies] = useState(movieData.movies)
console.log(movies)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <AllMovies data={movieData} />
    </div>
  );
}

export default App;
