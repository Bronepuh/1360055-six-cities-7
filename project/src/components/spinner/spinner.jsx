import React from 'react';
import '../spinner/spinner.css';

function Spinner() {

  return (
    <div className="loader" data-testid="spinner">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
}

export default Spinner;
