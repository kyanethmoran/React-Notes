import { useState } from "react";

// this is our custom hook that will handle all the functions of a counter, if the component does not give it an initial value then it will default to 0
function useCounter(initialValue = 0) {
  // create a state to hold the value of count and give us a setter function for updating the count, default value to the intial value
  const [count, setCount] = useState(initialValue);

  // this function will raise the count by 1
  const increment = () => {
    setCount(count + 1);
  };

  //   this function will lower the count by 1
  const decrement = () => {
    setCount(count - 1);
  };

  //   this function will reset the count back to its default value
  const resestCount = () => {
    setCount(initialValue);
  };
}

// make sure that you are exporting the useCounter hook so components are able to import and use it
export default useCounter;
