import React from "react";

const LearnUseMemo = () => {
  return (
    <>
      <h2>useMemo Hook</h2>
      <h3>What is it?</h3>
      <p>
        useMemo is a React Hook that optimizes component performance by caching
        the result of a function and only recalculating it when its dependencies
        change. This prevents unnecessary re-renders and expensive computations,
        leading to a more responsive application.{" "}
      </p>
      <p>It Looks like this:</p>
      <ul>
        <li>example</li>
      </ul>
    </>
  );
};

export default LearnUseMemo;
