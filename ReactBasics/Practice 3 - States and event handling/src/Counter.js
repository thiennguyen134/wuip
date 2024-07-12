import ReactDOM from 'react-dom';
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(4);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button className="counter-button">{count}</button>
      <br />
      <button className="counter-button" onClick={handleIncrease}>
        Increase
      </button>
      <button className="counter-button" onClick={handleDecrease}>
        Decrease
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<Counter />);
export default Counter;




