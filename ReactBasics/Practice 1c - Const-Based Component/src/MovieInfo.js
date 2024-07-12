import React from "react";
import styled from "styled-components";

const MovieCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin: 10px;
  padding: 20px;
`;

const MovieTitle = styled.h2`
  margin-top: 0;
`;

const MovieDetails = styled.p`
  font-size: 1.1em;
`;

const MovieInfo = ({ title, cinema, hall, time }) => {
  return (
    <MovieCard>
      <MovieTitle>{title}</MovieTitle>
      <MovieDetails>
        <strong>Cinema:</strong> {cinema}
      </MovieDetails>
      <MovieDetails>
        <strong>Hall:</strong> {hall}
      </MovieDetails>
      <MovieDetails>
        <strong>Time:</strong> {time}
      </MovieDetails>
    </MovieCard>
  );
};

export default MovieInfo;
