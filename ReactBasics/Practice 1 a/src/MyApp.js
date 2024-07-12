import React from "react";
import ReactDOM from 'react-dom';

//import MovieInfo from "./MovieInfo";
class Movie extends React.Component {
  render() {
    return (
      <div style={{ 
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
        width: '300px'
      }}>
        <h3>{this.props.title}</h3>
        <p>Theatre: {this.props.theatre}</p>
        <p>Starting time: {this.props.time}</p>
      </div>
    )
  }
}

class MyApp extends React.Component {
  render() {
    return (
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <h1>Movie Schedule</h1>
        <Movie title="Frozen 2" theatre="Tennispalatsi - Sali 1" time="10:30" />
        <Movie title="Joker" theatre="Tennispalatsi - Sali 2" time="12:30" />
        <Movie title="Terminator" theatre="Tennispalatsi - Sali 3" time="14:30" />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyApp />);

export default MyApp;
