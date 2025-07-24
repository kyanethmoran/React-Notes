import React, { createContext } from "react";
import ChildA from "../helperComponents/childA";

//  #1 for use with context API create the context
export const contextExample = createContext();

const LearnUseContext = () => {
  // this is the data i will be prop drilling from here to ChildC
  const text = `"This string was prop drilled from the parent!"`;

  //   data for the context api to provide and consume, can be used with hook or contextName.comsumer
  const contextData = "This string came from using context";
  return (
    <>
      <h2>useContext Hook:</h2>
      <h3>What is it?</h3>
      <p>
        useContext is a React Hook that allows functional components to access
        and consume values from a React Context. It provides a way to share data
        between components without explicitly passing props through each level
        of the component tree, effectively avoiding "prop drilling".
      </p>
      <label htmlFor="need-to-know">
        There are two important things you should know before useContext:
      </label>
      <ol id="need-to-know">
        <li>
          <strong>Prop Drilling- </strong>the process of passing data (props)
          from a parent component down through multiple levels of child
          components until it reaches a deeply nested component that actually
          needs the data. This means that intermediate components in the
          hierarchy receive and pass down the data, even if they don't directly
          use it themselves.
        </li>
        <li>
          <strong>Context API-</strong> enables sharing data across the
          component tree without manually passing props down through every
          level. It provides a mechanism to create a "global" state or data that
          can be accessed by any component within a specific part of the
          application, regardless of its nesting depth.
        </li>
      </ol>
      <h3>Prop Drilling:</h3>
      <label htmlFor="drilling-order">
        The data gets explicitly pass from component to component with no skips
        in components.
      </label>
      <ol id="drilling-order">
        <li>LearnUseContext: data created here</li>
        <li>ChildA: passes through</li>
        <li>ChildB: passes through</li>
        <li>ChildC: get here and is displayed</li>
      </ol>
      <p>
        If we have data in this component that we want to get to childC it needs
        to pass through childA then childB first
      </p>
      <h3>Context API:</h3>
      <label htmlFor="three-context-api">
        When working with context API you need to keep three things in mind:
      </label>
      <ol>
        <li>
          <strong>Create: </strong> you need to create the context first
        </li>
        <li>
          <strong>Provide: </strong> The Context.Provider component is used to
          make the context value available to its children. Wrap the component
          tree that needs access to the context with the Provider. Pass the
          context value using the value prop.
          <ul>
            <li>The provider is used in both context API and useContext</li>
          </ul>
        </li>
        <li>
          <strong>Consumer: </strong> Use the useContext hook (for functional
          components) or the Context.Consumer component (for class components)
          to access the context value.
          <ul>
            <li>
              With context API we need to consume the context with
              <code> &lt;Context.Consumer&gt;</code>
            </li>
          </ul>
        </li>
      </ol>
      <h3>Lets see how they all work:</h3>
      <ul>
        <li>
          {/* wrap the component tree that needs access to the context*/}
          <contextExample.Provider value={contextData}>
            <ChildA text={text} />
          </contextExample.Provider>
        </li>
      </ul>
    </>
  );
};

export default LearnUseContext;
