
import React, { useState, useEffect } from "react";
import CardSymbols from "./CardSymbols";
import "./hands.css";

function Card({ cardValue, isTable, index }) {
  const valueArray = cardValue.split('');
  const symbol = valueArray.pop();
  const value = valueArray.join('');

  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (isTable && index < 2) {
      setIsFlipped(true);
    }
  }, [isTable, index]);

  return (
    <li
      onClick={() => setIsFlipped(!isFlipped)}
      className={`card ${symbol} card-${value} ${isFlipped ? 'flipped' : ''}`}
    >
      <div className="card-container">
        <div className="card-front">
          <div className={`card-corner corner-1`}>
            <p>{symbol}</p>
            <p>{value}</p>
          </div>
          <div className={`card-corner corner-2`}>
            <p>{symbol}</p>
            <p>{value}</p>
          </div>
          <CardSymbols symbol={symbol} value={value} />
        </div>
        <div className="card-back"></div>
      </div>
    </li>
  );
}


export default Card