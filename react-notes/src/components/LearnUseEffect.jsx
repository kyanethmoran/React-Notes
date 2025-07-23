import React, { useEffect } from "react";

const LearnUseEffect = () => {
  return (
    <>
      <h2>use Effect Hook</h2>
      <h3>What is it?</h3>
      <p>
        useEffect is a React Hook that lets you run side effects in functional
        components. Think of side effects as anything that affects things
        outside the component — like:
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
          <ul></ul>
        </li>
      </ul>
    </>
  );
};

export default LearnUseEffect;
