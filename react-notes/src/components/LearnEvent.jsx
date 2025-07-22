const LearnEvent = () => {
  // variable to show if button is on or off
  let buttonOff = true;

  //this arrow function is the event that pressing the button will trigger
  const handleClick = () => {
    buttonOff = !buttonOff;
    if (buttonOff) {
      console.log("Event Button is clicked Off");
    } else if (!buttonOff) {
      console.log("Event Button is clicked On");
    } else {
      console.log("Event Button is Broken");
    }
  };

  // another function using inline arrow functions and passing data
  const handleClickAgain = (data) => {
    console.log(data);
  };

  return (
    <>
      <h2>How Do Events Work?</h2>
      <p>
        In React, events are user interactions or system actions that trigger a
        response within a web application. These can include actions like
        clicking a button, typing in a form field, submitting a form, or
        hovering the mouse over an element. React provides a system for handling
        these events efficiently and consistently across different browsers.
      </p>

      <label htmlFor="event-key-aspects">
        <strong>Here are key aspects of React events:</strong>
      </label>
      <ol id="event-key-aspects">
        <li>
          <strong>SyntheticEvent System:</strong> React wraps native browser
          events in a SyntheticEvent object. This creates a cross-browser
          wrapper that normalizes event behavior, ensuring consistency
          regardless of the browser being used.
        </li>
        <li>
          <strong>CamelCase Naming Convention:</strong> React event handlers are
          named using camelCase (e.g., onClick, onChange, onSubmit), unlike the
          all-lowercase convention in traditional HTML (e.g., onclick).
        </li>
        <li>
          <strong>Passing Event Handlers as Functions:</strong> In JSX, event
          handlers are passed as functions within curly braces (e.g., onClick=
          &#123;handleClick&#125;), rather than as strings like in HTML
          (onclick="shoot()").
        </li>
      </ol>

      <label htmlFor="common-event-types">
        <strong>Commen Event Types, </strong> React supports a wide range of
        event types, including:
      </label>
      <ul id="common-event-types">
        <li>
          <strong>Mouse Events:</strong> onClick, onDoubleClick, onMouseDown,
          onMouseUp, onMouseMove, onMouseEnter, onMouseLeave.
        </li>
        <li>
          <strong>Form Events:</strong> onChange (for input value changes),
          onSubmit (for form submissions).
        </li>
        <li>
          <strong>Keyboard Events:</strong> onKeyDown, onKeyPress, onKeyUp.
        </li>
      </ul>

      <h3>Event Button Example:</h3>
      <p>
        To see the button in action right click this page and select "inspect",
        then click the console tab in the inspector tools. Once the console is
        open on the inspector tools click the button and watch what happens.
      </p>
      {/* create the button that will trigger the event */}
      <button onClick={handleClick}>Click For An Event</button>
      <br />
      <br />
      {/* create the button that will trigger the event using inline arrow functions and passed data*/}
      <button
        onClick={() =>
          handleClickAgain("This function happened inline with passed data")
        }
      >
        Click For Another Event
      </button>
    </>
  );
};

export default LearnEvent;
