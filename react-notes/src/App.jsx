import { useState } from "react";
import "./App.css";

// add Hellow World Component via import
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <>
      <h1>React Notes: Annotated Code</h1>
      <h3>
        {/* the <i> tage makes thins italics, <em> will also by adding emphasis */}
        <i>This Source Code is Heavily Annotated</i>
      </h3>
      {/* add the Hello World component to utilize it in the app */}
      <HelloWorld />
    </>
  );
}

export default App;
