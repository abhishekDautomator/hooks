import './App.css';
import React, { useState } from 'react';

function UseState() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("Learn Hook");

  function increaseCount(){
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <div>
      {counter} <button className="btn-primary" onClick={increaseCount}>+</button>
      </div>
      <div>
        <input onChange={(event) => {setText(event.target.value)}} placeholder="type here"></input>
        {text}
      </div>
    </div>
  );
}

export default UseState;
