import React from "react";

const LearnConditionalRendering = () => {
  return (
    <>
      <h2>Conditional Rendering in React:</h2>
      <h3>What is it?</h3>
      <p>
        Conditional Rednering allows us to dynamically show or hide elements or
        change the way that a component renders based on different criteria that
        we set. This is important becuase we can use state to identify what the
        user may need to see or be able to access or interact with.
      </p>
      <h3>Key Concepts: </h3>
      <ul>
        <li>
          <strong>Dynamic UI:</strong> Conditional rendering enables the UI to
          change and adapt based on data and user interactions.
        </li>
        <li>
          <strong>State Management:</strong> Often, conditional rendering is
          used in conjunction with state management to update the UI based on
          changes in the application's state.
        </li>
        <li>
          <strong>Component Re-use:</strong> Instead of creating separate
          components for every possible state, conditional rendering allows you
          to reuse components and adjust their content or appearance based on
          conditions.
        </li>
      </ul>
      <h3>Common Techniques: </h3>
      <ul>
        <li>
          <code>if/else</code> statements: Suitable for simple scenarios with a
          few conditional branches.
        </li>
        <li>
          Ternary operator <code>(? :)</code>: Provides a concise way to handle
          two-way conditional rendering.
        </li>
        <li>
          Logical AND <code>(&&)</code>: Efficient for conditionally rendering a
          component only when a condition is true.
        </li>
        <li>
          switch statements: Useful for handling multiple conditional branches
          based on different values.
        </li>
        <li>
          Element variables: Assigning components to variables based on
          conditions and then rendering the variable.
        </li>
      </ul>
      <h3>Example Of Conditional Rendering: </h3>
    </>
  );
};

export default LearnConditionalRendering;
