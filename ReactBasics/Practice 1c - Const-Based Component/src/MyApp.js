import React from "react";


const Movie = (props) => (
  <div style={ { border: '1px solid black', padding: '10px', margin: '10px', width: '300px' } }>
    <p>{props.title}</p>
    <p>{props.theatre}</p>
    <p>{props.time}</p>
  </div>
);

const MyApp = () => (
  <div>
    <Movie title="Frozen 2" theatre="Tennispalatsi - sali 1" time="10:30" />
    <Movie title="Joker" theatre="Tennispalatsi - sali 2" time="12:30" />
    <Movie title="Terminator"theatre="Tennispalatsi - sali 3" time="14:30" />
  </div>
);

export default MyApp;

