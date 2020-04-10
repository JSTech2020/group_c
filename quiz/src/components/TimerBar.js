import React, { useState, useEffect } from 'react';
import './TimerBar.css';

function TimerBar({ fullTime, resetTimer, resetTimerCallback, timeOutCallback }) {
  const [ time, setTime ] = useState(fullTime);


  const fullHeight = 400; // The bar is 400px high - TODO; Use refs?
  const height = Math.floor(time / fullTime * fullHeight);

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        const newTime = Math.max(time - 1, 0);
        if (newTime === 0) {
          timeOutCallback();
        }
        setTime(newTime);
      }, 1000);
      return () => clearInterval(timerId);
    }
  });

  useEffect(() => {
    if (resetTimer) {
      setTime(fullTime);
      resetTimerCallback();
    }
  }, [resetTimer, fullTime, resetTimerCallback]);

  const runningOut = time <= 5 ? 'running-out' : '';

  return (
    <div className="timer-bar">
      <div className="under-bar">
        <div className="bar-text">{ time }s</div>
        <div className={"over-bar " + runningOut } style={{height: height + 'px'}}></div>
      </div>
    </div>
  );
}

export default TimerBar;