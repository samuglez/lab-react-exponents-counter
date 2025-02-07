import { useState } from "react";

const Counter = ({base, decre, incr}) => {
 

  return (
    <div className="counter-container">
      <p className="counter-value">{base}</p>
      <button className="counter-button" onClick={decre}>-</button>
      <button className="counter-button" onClick={incr}>+</button>
    </div>
  );
};

export default Counter;

