import React from "react";

const ChildC = (props) => {
  return (
    <>
      <div>
        ChildC : here is the data prop-drilled from 3 components up <br />
        {props.text}
      </div>
    </>
  );
};

export default ChildC;
