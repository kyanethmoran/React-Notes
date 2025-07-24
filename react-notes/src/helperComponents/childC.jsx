import React from "react";

const ChildC = (props) => {
  return (
    <>
      <div>
        ChildC : here is the data prop-drilled from 3 components up -&gt;
        <br />
        <strong>{props.text}</strong>
      </div>
    </>
  );
};

export default ChildC;
