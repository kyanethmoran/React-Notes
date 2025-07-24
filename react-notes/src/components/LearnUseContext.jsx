import React from "react";

const LearnUseContext = () => {
  return (
    <>
      <h2>useContext Hook:</h2>
      <h3>What is it?</h3>
      <p>
        useContext is a React Hook that allows functional components to access
        and consume values from a React Context. It provides a way to share data
        between components without explicitly passing props through each level
        of the component tree, effectively avoiding "prop drilling".
      </p>
      <label htmlFor="need-to-know">
        There are two important things you should know before useContext:
      </label>
      <ol>
        <li>Prop Drilling</li>
        <li>Context API</li>
      </ol>
    </>
  );
};

export default LearnUseContext;
