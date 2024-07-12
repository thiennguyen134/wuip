import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import YouTube from 'react-youtube';

function MovieListItem(props) {
  const [movie, setMovie] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${props.movie.id}?api_key=your_api_key&append_to_response=videos`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.movie.id]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const videoPressed = (videoId) => {
    setSelectedVideo(videoId);
    setModalIsOpen(true);
  };

  const getYoutubeVideoId = () => {
    if (movie && movie.videos && movie.videos.results) {
      const youtubeVideos = movie.videos.results.filter((video) => video.site === 'YouTube');
      if (youtubeVideos.length > 0) {
        return youtubeVideos[0].key;
      }
    }
    return null;
  };

  const customModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const youtubeVideoId = getYoutubeVideoId();

  return (
    <div className="movie-item">
      <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={props.movie.original_title} />
      <div className="movie-info">
        <h2 className="movie-title">{props.movie.original_title}</h2>
        <p className="movie-overview">{props.movie.overview}</p>
        <div className="movie-genres">
          {movie.genres && movie.genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
        </div>
        {youtubeVideoId && (
          <div className="movie-video">
            <span onClick={() => videoPressed(youtubeVideoId)}>Watch Trailer</span>
          </div>
        )}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customModalStyles}>
        {selectedVideo && <YouTube videoId={selectedVideo} />}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default MovieListItem;
