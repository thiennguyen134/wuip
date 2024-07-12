import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isOn, setIsOn] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (isOn) {
      interval = setInterval(() => setTimer(timer => timer + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isOn, timer]);

  const reset = () => {
    setIsOn(false);
    setTimer(0);
  }

  return (
    <div className="App">
      <h1>Stopwatch App</h1>
      <div className="timer">{timer}</div>
      <div className="btn-group">
        {!isOn && (
          <button type="button" onClick={() => setIsOn(true)}>Start</button>
        )}
        {isOn && (
          <button type="button" onClick={() => setIsOn(false)}>Stop</button>
        )}
        <button type="button" disabled={timer === 0} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
