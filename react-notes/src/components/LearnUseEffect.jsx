import React, { useState, useEffect } from "react";

const LearnUseEffect = () => {
  // state variable for count to use with the countdown button
  const [count, setCount] = useState(100);
  const [isCounting, setIsCounting] = useState(false);

  // utilizing useEffect to carry out the down down
  useEffect(() => {
    if (!isCounting || count == 0) return;

    const countdown = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    // we want to clear the timeout so we can rerun the effect and prevent overlapping timers from repeat renders
    return () => clearTimeout(countdown);
  }, [isCounting, count]);

  //  this function will trigger the use effect and start the timer
  const startTimer = () => {
    setIsCounting(true);
  };

  //   this function is just a simple reset to make the start timer button a repeatable action
  const resetTimer = () => {
    setIsCounting(false);
    setCount(100);
  };

  return (
    <>
      <h2>useEffect Hook</h2>
      <h3>What is it?</h3>
      <p>
        useEffect is a React Hook that lets you run side effects in functional
        components. Think of side effects as anything that affects things
        outside the component
      </p>
      <p>It looks alot like this:</p>
      <ul>
        <li>
          <pre>
            <code>
              {`import { useEffect } from 'react';

 useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
 });`}
            </code>
          </pre>
          <ul>
            <li>
              See the above code in action:
              <br />
              <button onClick={startTimer}>Start Timer</button>
              Current count is: {count}
              <br />
              <button onClick={resetTimer}>Reset Timer</button>
              Stop and reset the Count
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default LearnUseEffect;
