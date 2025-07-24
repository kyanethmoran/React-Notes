import React, { useContext } from "react";
// import context from parent component
import { contextExample } from "../components/LearnUseContext";

const ChildC = (props) => {
  // consume the data from the context to acces context value
  const contextData = useContext(contextExample);
  return (
    <>
      <div>ChildC : </div>
      <div>
        <ul>
          {/* this version uses just prop drilled from parent explicitly through all the children */}
          <li>PropDrilled Data: {props.text}</li>

          {/* This version uses just context api's consumer no hook to pass the data */}
          <contextExample.Consumer>
            {(value) => <li>Context API Data: {value}</li>}
          </contextExample.Consumer>

          {/* this version uses the useContext hook which removes the need to specify the consumer and value */}
          <li>UseContext Data: {contextData}</li>
        </ul>
      </div>
    </>
  );
};

export default ChildC;
