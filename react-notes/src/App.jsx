import { useState } from "react";
import "./App.css";

// add Components via import
import HelloWorld from "./components/HelloWorld";
import LearnJSX from "./components/LearnJSX";
import LearnProps from "./components/LearnProps";

function App() {
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
      <LearnProps />
    </>
  );
}

export default App;
