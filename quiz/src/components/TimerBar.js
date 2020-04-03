import React, { useState, useEffect } from 'react';
import './TimerBar.css';

function TimerBar({ fullTime }) {
  const [ time, setTime ] = useState(fullTime);
  const fullHeight = 400; // The bar is 400px high - TODO; Use refs?
  const height = Math.floor(time / fullTime * fullHeight);

  useEffect(() => {
    const timerId = setInterval(() => setTime(Math.max(time - 1, 0)), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div className="timer-bar">
      <div className="under-bar">
        <div className="bar-text">{ time }s</div>
        <div className="over-bar" style={{height: height + 'px'}}></div>
      </div>
    </div>
  );
}

export default TimerBar;