import { useState } from "react";
import "./App.css";

// add Components via import
import HelloWorld from "./components/HelloWorld";
import LearnJSX from "./components/LearnJSX";
import LearnProps from "./components/LearnProps";
import LearnEvent from "./components/LearnEvent";
import LearnLiftingStateUp from "./components/LearnLiftingStateUp";
import LearnUseState from "./components/LearnUseState";
import LearnUseEffect from "./components/LearnUseEffect";
import LearnUseMemo from "./components/LearnUseMemo";
import LearnUseContext from "./components/LearnUseContext";
import LearnUseRef from "./components/LearnUseRef";
import LearnCustomHooks from "./components/LearnCustomHooks";

function App() {
  // create data to pass down as prop to LearnProps.jsx child component
  let passItDown = "I came from App.jsx.";

  // use this function to get the data from the child component LearnLiftingStateUp into app.jsx
  // when the parent passes getChildData to the child, the child then gives the function the childData for the parent to display
  const getChildData = (childData) => {
    console.log(childData);
  };

  return (
    <>
      <h1>React Notes: Annotated Code</h1>
      <h3>
        {/* the <i> tage makes thins italics, <em> will also by adding emphasis */}
        <i>
          This Source Code is <strong>HEAVILY</strong> Annotated
        </i>
      </h3>

      <ol>
        <li>
          {/* add the components to utilize it in the app */}
          <HelloWorld />
          <hr />
        </li>
        <li>
          <LearnJSX />
          <hr />
        </li>
        <li>
          {/* give Learn prop child of app.jsx some data (a prop) called passItDown  */}
          <LearnProps passItDown={passItDown} />
          <hr />
        </li>
        <li>
          {/* handle an event like a button onClick */}
          <LearnEvent />
          <hr />
        </li>
        <li>
          {/* learn how to pass data from child to parent (lifting state) */}
          <LearnLiftingStateUp getChildData={getChildData} />
          <p>
            *Check your console logs to see the lifted data from child to parent
            component*
          </p>
          <hr />
        </li>
        <li>
          <LearnUseState />
          <hr />
        </li>
        <li>
          <LearnUseEffect />
          <hr />
        </li>
        <li>
          <LearnUseMemo />
          <hr />
        </li>
        <li>
          <LearnUseContext />
          <hr />
        </li>
        <li>
          <LearnUseRef />
          <hr />
        </li>
        <li>
          <LearnCustomHooks />
          <hr />
        </li>
        <li>useEffect Hook</li>
        <li>useEffect Hook</li>
        <li>useEffect Hook</li>
      </ol>
    </>
  );
}

export default App;
