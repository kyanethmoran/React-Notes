import React from "react";

// this element is being explicitly created to shwo how jsx works under the hood
const pElement = React.createElement(
  "p",
  null,
  "This <p> element was explicitly created using React.createElement"
);

const LearnJSX = () => {
  return (
    <>
      <h2>JSX Under The Hood:</h2>
      <p>
        When we are creating this component from the file and setting the h2,
        what is actually happening under the hood is that we are having React
        create an element for us and display it.
        <br />
        {/* using the 'id' property to connect the label and unordered list together */}
        <label htmlFor="my-example">
          For Example When Making "JSX Under The Hood" -&gt; we are actually
          doing the following behind the scenes:
        </label>
        <ul id="my-example">
          <li>
            const h2Element = React.createElement("h2", null, "JSX Under The
            Hood")
          </li>

          <li>
            <p>
              The following paragraph is actually going to be created
              dynamically by creating an element using React.createElement:
              {/* dynamically display the element created above */}
              {pElement}
            </p>
          </li>
        </ul>
      </p>
    </>
  );
};

export default LearnJSX;
