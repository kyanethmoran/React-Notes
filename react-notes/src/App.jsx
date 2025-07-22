import { useState } from "react";
import "./App.css";

// add Components via import
import HelloWorld from "./components/HelloWorld";
import LearnJSX from "./components/LearnJSX";
import LearnProps from "./components/LearnProps";
import LearnEvent from "./components/LearnEvent";

function App() {
  // create data to pass down as prop to LearnProps.jsx child component
  let passItDown = "I came from App.jsx.";

  return (
    <>
      <h1>React Notes: Annotated Code</h1>
      <h3>
        {/* the <i> tage makes thins italics, <em> will also by adding emphasis */}
        <i>
          This Source Code is <strong>HEAVILY</strong> Annotated
        </i>
      </h3>
      {/* add the components to utilize it in the app */}
      <HelloWorld />
      <LearnJSX />
      {/* give Learn prop child of app.jsx some data (a prop) called passItDown  */}
      <LearnProps passItDown={passItDown} />
      <LearnEvent />
    </>
  );
}

export default App;
