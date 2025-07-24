import React, { useState, useRef } from "react";

const LearnUseRef = () => {
  // create a variable to use in the exmaple
  const [name, setName] = useState("");

  // arrow function to clear the textbox
  const clearTextBox = () => {
    // sets the textbox back to an empty string
    setName("");
  };
  return (
    <>
      <h2>UseRef Hook:</h2>
      <h3>UseRef Serves two primary purposes in a functional component:</h3>
      <ol>
        <li>
          <strong>Storing Mutable Values that Don't Trigger Re-renders:</strong>
          It allows you to create a "ref" object that can hold any mutable value
          (e.g., numbers, objects, arrays) which persists across component
          re-renders without causing the component to re-render when the value
          changes. This is useful for storing data that needs to be maintained
          but doesn't directly influence the UI, such as timer IDs, previous
          state values, or cached computation results.
        </li>
        <li>
          <strong>Accessing and Interacting with DOM Elements:</strong>
          useRef provides a way to directly reference and interact with DOM
          elements rendered by React. By attaching a ref to a JSX element you
          can then access the underlying DOM node through myRef.current and
          perform imperative actions on it, such as focusing an input field,
          managing media playback, or measuring element dimensions.
        </li>
      </ol>
      <h3>Key Characteristics of useRef:</h3>
      <ul>
        <li>
          <strong>Returns an object with a current property:</strong>The useRef
          hook returns an object, and the actual mutable value or DOM element
          reference is stored in its current property.
        </li>
        <li>
          <strong>Persists across renders:</strong>The value stored in useRef
          remains the same even when the component re-renders, unlike regular
          variables that are re-initialized on each render.
        </li>
        <li>
          <strong>Does not trigger re-renders:</strong>Changes to the current
          property of a ref do not cause the component to re-render, making it
          suitable for managing values that don't need to be reflected in the UI
          immediately.
        </li>
      </ul>
      <h3>Example of useRef:</h3>
      {/* create an input, the value inside the input will be our name variable
      whenever there is a change in the inputbox we are going to use the name setter function
      to update the name to the event (e) value. int his case the event is a change to the textbox */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      {/* extra function to clear the text box so we can repeat the process */}
      <button onClick={clearTextBox}>Clear</button>
    </>
  );
};

export default LearnUseRef;
