import React from "react";

const LearnCustomHooks = () => {
  return (
    <>
      <h2>Custom Hooks: </h2>
      <h3>Why do we need these?</h3>
      <p>
        Custom Hooks let you share stateful logic but not state itself. Each
        call to a Hook is completely independent from every other call to the
        same Hook
      </p>
      <p>
        They are essential for code reusability and maintainability, especially
        when dealing with complex logic and state management across multiple
        components. They allow you to extract and share common functionality,
        making your code cleaner and easier to understand.
      </p>
    </>
  );
};

export default LearnCustomHooks;
