import ReactDOM from 'react-dom';
import React, { useState } from "react";

function CarGame() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount1 = () => {
    setCount1(count1 + 1);
  };

  const incrementCount2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <div>
      <h1>Car clicked</h1>
      <div>
        <p>Clicked: {count1} times</p>
        <img
          src="https://images.template.net/wp-content/uploads/2016/04/27093219/Pure-Black-Car-Wallpaper.jpg"
          alt="Car 1"
          onClick={incrementCount1}
        />
      </div>
      <div>
        <p>Clicked: {count2} times</p>
        <img
          src="https://images.template.net/wp-content/uploads/2016/04/27094717/Fantastic-Car-Wallpaper-for-Download.jpg"
          alt="Car 2"
          onClick={incrementCount2}
        />
      </div>
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <CarGame />
  </React.StrictMode>,
  document.getElementById("root")
);
export default CarGame;


