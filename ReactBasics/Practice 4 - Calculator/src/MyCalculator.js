import ReactDOM from 'react-dom';
import React, { useState } from 'react';

function MyCalculator() {
  const [number1, setNumber1] = React.useState(0);
  const [number2, setNumber2] = React.useState(0);
  const [result, setResult] = React.useState(0);

  const buttonPressed = (calc) => {
    if (calc === '+') setResult(parseInt(number1) + parseInt(number2));
    else if (calc === '-') setResult(parseInt(number1) - parseInt(number2));
    else if (calc === '*') setResult(parseInt(number1) * parseInt(number2));
    else if (calc === '/') setResult(parseInt(number1) / parseInt(number2));
  }

  return (
    <div>
      <h1>Calculator</h1>
      <div style={{ margin: '5px' }}>
        Number 1: <input value={number1} onChange={(e) => setNumber1(e.target.value)} style={{ textAlign: 'right' }} />
      </div>
      <div style={{ margin: '5px' }}>
        Number 2: <input value={number2} onChange={(e) => setNumber2(e.target.value)} style={{ textAlign: 'right' }} />
      </div>
      <div>
        <button onClick={(e) => buttonPressed('+')} style={{ width: '30px', margin: '5px' }}>+</button>
        <button onClick={(e) => buttonPressed('-')} style={{ width: '30px', margin: '5px' }}>-</button>
        <button onClick={(e) => buttonPressed('*')} style={{ width: '30px', margin: '5px' }}>*</button>
        <button onClick={(e) => buttonPressed('/')} style={{ width: '30px', margin: '5px' }}>/</button>
      </div>
      <div style={{ margin: '5px' }}>
        Result: <input value={result} style={{ textAlign: 'right' }} readOnly />
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(<MyCalculator />);

export default MyCalculator;




