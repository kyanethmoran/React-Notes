import { useState } from "react";
import "./App.css";

// add Hellow World Component via import
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <>
      <h1>React Notes</h1>
      {/* add the Hello World component to utilize it in the app */}
      <HelloWorld />
    </>
  );
}

export default App;
