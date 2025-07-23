import React, { useState } from "react";

const LearnUseState = () => {
  // with usestate you create an array with the current button click count and a setter function to
  // update the current button click count, useState(0) means that for this hook we are starting with 0
  // as our default number
  const [buttonClicks, setButtonClicks] = useState(0);

  //   utilize useState with an object
  const [devInfo, setDevInfo] = useState({
    devName: "SKM",
    projectName: "react-notes",
    hours: 3,
  });
  //   function to handle devInfo useState data
  const handleDevInfo = () => {
    // ... is the spread operator that allows us to copy all the keys and override the hours key
    setDevInfo({ ...devInfo, hours: devInfo.hours + 1 });
  };
  return (
    <>
      <h2>useState Hook:</h2>
      <h3>What is it?</h3>
      <p>
        useState is a React Hook that allows functional components to manage and
        update their internal state. Before Hooks were introduced in React 16.8,
        state management was primarily handled by class components. useState
        enables functional components to have their own "memory" for data that
        changes over time or based on user interactions.
        <br />
        <br /> It looks alot like this:
      </p>
      <ul>
        <li>const [variable, setVariable] = useState(defaultValue)</li>
      </ul>
      <br />
      {/* quick example of how to use setting function of useStat Hook with a simple number variable */}
      <h3>Button Click Counter Example</h3>
      <p>Total button clicks: {buttonClicks}</p>
      {/* add a click using setter function*/}
      <button onClick={() => setButtonClicks(buttonClicks + 1)}>
        Add A Click
      </button>
      <br />
      {/* reset clicks using setter function */}
      <button onClick={() => setButtonClicks(0)}>Reset Clicks</button>
      <br />
      <br />
      {/* quick example of how to use setting function of useStat Hook with a simple number variable */}
      <h3>Now Lets Try UseState With An Object</h3>
      <p>The following information will be populated from devInfo variable:</p>
      <ul>
        <li>Developer's Name: {devInfo.devName}</li>
        <li>Project Name: {devInfo.projectName}</li>
        <li>
          Hours Taken: {devInfo.hours} <br />
          <ul>
            <li>
              {/* call the function onClick that will make use of the setter for devInfo */}
              Add Hours To the project Creation Time:
              <button onClick={handleDevInfo}>Add an Hour</button>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default LearnUseState;
