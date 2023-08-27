import './MovieDetail.css'
import {useState, useEffect} from 'react'

const MovieDetail = ({ goHome, selectedMovieId }) => {
  const [selectedMovieDetails, setSelectedMovieDetails] = useState({})
  const [detailsLoading, setDetailsLoading] = useState(true)
  
  const getSingleMovieData = (selectedMovieId) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${selectedMovieId}`)
    .then(response => response.json())
    .then(data => { const movieStuff = data.movie
      setSelectedMovieDetails(movieStuff)
      console.log('yeehaw', data)})
      setDetailsLoading(false) 
    }
    
    useEffect(() => {
      getSingleMovieData(selectedMovieId)
    }, [])

    const backgroundImageUrl = selectedMovieDetails.backdrop_path
    
  
    const containerStyle = {
      backgroundImage: `url(${backgroundImageUrl})`,
      height: '100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }

    return (
      <div style={containerStyle}>
      {detailsLoading ? <p>Loading</p> : <><button onClick={goHome}>Go Back Home</button> <p className="title"></p></>}
      <p>{selectedMovieDetails.overview}</p>
      <p>{selectedMovieDetails.release_date}</p>
      <p>Runtime: {selectedMovieDetails.runtime}</p>
    </div>
  )
}


export default MovieDetail