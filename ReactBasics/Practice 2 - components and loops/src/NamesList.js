import React from 'react';
import ReactDOM from 'react-dom';
const names = ["Arska", "Basso", "Mixu"];

function NamesList() {
  const nameItems = names.map((name, index) =>
    <p key={index}>Hello {name}!</p>
  );
  return (
    <div>
      {nameItems}
    </div>
  );
}
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<NamesList />);
export default NamesList;


