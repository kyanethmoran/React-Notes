import React from "react";
import ChildB from "./childB";

const ChildA = (props) => {
  return (
    <>
      <div>ChildA</div>
      <ChildB text={props.text} />
    </>
  );
};

export default ChildA;
