import React, { useState, useMemo } from "react";

const LearnUseMemo = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(20000);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  // this will run everytime that anything changes and a rerender happens, this can be costly
  const sumOfNumbers = () => {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
  };

  //   useMemo will save the sum here and only recalculate it number changes as that will impact the calculation, instead of on every re-render
  const memoValue = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    console.log("memovalue got recalculated");
    return sum;
  }, [number]);

  console.log("Sum of Numbers non Memo version has been ran:", sumOfNumbers());

  return (
    <>
      <h2>useMemo Hook</h2>
      <h3>What is it?</h3>
      <p>
        useMemo is a React Hook that optimizes component performance by caching
        the result of a function and only recalculating it when its dependencies
        change. This prevents unnecessary re-renders and expensive computations,
        leading to a more responsive application. Think of it as: "Only re-do
        this work if the input values changed"
      </p>
      <p>It Looks like this:</p>
      <ul>
        <li>
          <pre>
            <code>{`
    const memoizedValue = useMemo(() => {
        // Expensive calculation here
        return result;
    }, [dependencies]);
           `}</code>
          </pre>
        </li>
      </ul>
      <br />
      <h3>
        Counter and a sumOfNumbers without useMemo function that returns a sum
        of numbers:
      </h3>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={resetCount}>Reset Count</button>
      <p>
        If you look at your console logs, everytime that the count is updated
        the sumOfNumbers function has to recalculate even those that number
        hasnt changed at all. This is costly and be avoided by having a useMemo.
        When you have a useMemo hook in effect it will only recalculate when you
        change the number you are summing up to. Try it:
      </p>
      <h3>
        Counter and a sumOfNumbers without useMemo function that returns a sum
        of numbers:
      </h3>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={resetCount}>Reset Count</button>
      <button onClick={() => setNumber(number + 1)}>Change Sum Number</button>
      <p>
        *be sure to look at the source code and check your console log for this
        exmaple*
      </p>
    </>
  );
};

export default LearnUseMemo;
