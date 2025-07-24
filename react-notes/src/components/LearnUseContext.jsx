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
        <li>
          <strong>Prop Drilling- </strong>the process of passing data (props)
          from a parent component down through multiple levels of child
          components until it reaches a deeply nested component that actually
          needs the data. This means that intermediate components in the
          hierarchy receive and pass down the data, even if they don't directly
          use it themselves.
        </li>
        <li>
          <strong>Context API-</strong> enables sharing data across the
          component tree without manually passing props down through every
          level. It provides a mechanism to create a "global" state or data that
          can be accessed by any component within a specific part of the
          application, regardless of its nesting depth.
        </li>
      </ol>
    </>
  );
};

export default LearnUseContext;
