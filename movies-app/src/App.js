import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import './App.css';

Modal.setAppElement('#root');

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a5fedf79d71a5958b33d9bf8621587df&append_to_response=videos')
      .then(response => {
        setMovies(response.data.results)
      })
  }, [])

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  }

  const movieItems = movies.map((movie,index) => (
    <div className="MovieItem" key={index} onClick={() => handleMovieClick(movie)}>
      <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
      <p>{movie.original_title}</p>
    </div>
  ));

  return (
    <div className="MovieListContainer">
      <div className="MovieList">
        {movieItems}
      </div>
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          closeModal={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

function MovieModal(props) {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    if (props.movie !== null) {
      axios.get(`https://api.themoviedb.org/3/movie/${props.movie.id}?api_key=a5fedf79d71a5958b33d9bf8621587df&append_to_response=videos`)
        .then(response => {
          setMovieData(response.data);
        });
    }
  }, [props.movie]);

  const trailerClick = (event) => {
    event.stopPropagation();
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Modal isOpen={props.movie !== null} onRequestClose={props.closeModal}>
      {movieData !== null && (
        <div className="MovieModalContent">
          <div className="MovieModalPoster">
            <img src={`http://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={props.movie.original_title} />
          </div>
          <div className="MovieModalDetails">
            <h2>{props.movie.original_title} ({new Date(props.movie.release_date).getFullYear()})</h2>
            <p>{movieData.overview}</p>
            <span>Genres: {movieData.genres.map(genre => genre.name).join(', ')}</span>
            {movieData.videos.results.length > 0 && (
              <div className="Trailer" onClick={trailerClick}>
                <h3>Trailer:</h3>
                <YouTube videoId={movieData.videos.results[0].key} opts={opts} />
              </div>
            )}
            <button onClick={props.closeModal}>Close</button>
          </div>
        </div>
      )}
    </Modal>
  );
}



function App() {
  return (
    <div className="App">
      <MovieList/>
    </div>
  );
}

export default App;
