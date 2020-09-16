import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter">
      <h1 className="counter__label">
        {counter}
      </h1>
      <button className="counter__increaseBtn" onClick={() => setCounter(counter + 1)}>Increase</button>
      <button className="counter__decreaseBtn" onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
}

export default App;
