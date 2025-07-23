import React from "react";

const LearnLiftingStateUp = (props) => {
  // this is the function that will handle the button click to lift the state to App.jsx
  const handleClickLiftState = () => {
    let childData =
      "This console log came from parent component by liftinf the data from the child component";
    // get the function in the parent component to pass it the childData string
    props.getChildData(childData);
  };

  return (
    <>
      <h2>Lifting State Up: Data from Child to Parent</h2>

      <p>
        "Lifting state up" is a design pattern in component-based UI frameworks
        like React and Flutter, used to manage and share state between multiple
        components. It involves moving the state that is shared or manipulated
        by several child components to their closest common ancestor (parent
        component).
      </p>

      <h3>
        Lift state up to App.jsx from this child component using a button:
      </h3>
      {/* the data from this child component is going to be 'lifted' to the parent component in this case that will be App.jsx */}
      <button onClick={handleClickLiftState}>Click Here to Lift State</button>
    </>
  );
};

export default LearnLiftingStateUp;
