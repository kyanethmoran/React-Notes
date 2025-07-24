import React from "react";
import ChildC from "./childC";

const ChildB = (props) => {
  return (
    <>
      <div>ChildB</div>
      <ChildC text={props.text} />
    </>
  );
};

export default ChildB;
