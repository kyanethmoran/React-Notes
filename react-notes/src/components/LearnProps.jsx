import React from "react";

// you need to specify that props are coming into LearnProps
const LearnProps = (props) => {
  return (
    <>
      <h2>Props Are Cruicial To React:</h2>
      <h3>Definition of Props:</h3>
      <p>
        In React, "props" (short for properties) are a mechanism for passing
        data from a parent component to a child component. They are a
        fundamental concept in React's unidirectional data flow, enabling
        components to receive and display dynamic information.
      </p>

      <label htmlFor="prop-key-aspects">
        <strong>Here are key aspects of React props:</strong>
      </label>
      <ol id="prop-key-aspects">
        <li>
          <strong>Unidirectional Data Flow:</strong> Props facilitate a one-way
          data flow, meaning data is passed down from parent to child
          components. Child components cannot directly modify the props they
          receive; they are read-only.
        </li>
        <li>
          <strong>Immutability:</strong> Props are considered immutable within
          the child component. Any attempt to directly modify a prop within a
          child component will not affect the parent component's state or the
          prop's value in other components.
        </li>
        <li>
          <strong>Passing Data:</strong> Props are passed as attributes when
          rendering a component in JSX. For example:
          <pre>
            <code>&lt;ChildComponent name="Alice" age={30} /&gt;</code>
          </pre>
        </li>
      </ol>

      <p>
        The following data is going to come as prop passed from the parent
        component (App.js) to the child component (LearnProps.jsx):
      </p>
      <ul>
        <li>
          <strong>String Data from App.js, the parent component:</strong>
          <br /> {props.passItDown}{" "}
        </li>
      </ul>
    </>
  );
};

export default LearnProps;
