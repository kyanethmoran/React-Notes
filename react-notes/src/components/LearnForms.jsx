import React, { useState } from "react";

const LearnForms = () => {
  // state that is going to handle the data in the form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleSubmit = (e) => {
    // prevent default is going to stop the default settings from taking, so the page will not reload and then
    // trigger our own logic in this case that logic will be console logging the data that was submitted
    e.preventDefault();
    console.log("form was submitted: ", formData);
  };

  return (
    <>
      <h2>Dealing With Forms In React:</h2>
      <p>
        Forms in React are used to collect user input and are a fundamental part
        of interactive web applications. Unlike traditional HTML forms where the
        DOM manages input values, React forms typically leverage controlled
        components to manage form state and handle user input changes.
      </p>
      <label htmlFor="form-key-aspects">Key Aspects of React Forms:</label>
      <ul>
        <li>
          <strong>Form Submission:</strong> The onSubmit event handler on the
          &lt;form&gt; element is used to capture form submissions. You
          typically call event.preventDefault() inside this handler to prevent
          the default browser behavior of refreshing the page.
        </li>
        <li>
          <strong>Form Validation:</strong> You can implement validation logic
          within your component or use dedicated form libraries.
        </li>
        <li>
          <strong>Form Libraries:</strong> For more complex forms, libraries
          like React Hook Form or Formik offer powerful features for state
          management, validation, and error handling, reducing boilerplate code.
        </li>
      </ul>
      <h3>Example of Forms:</h3>
      <ul>
        <li>
          This is the form tag that will hold all of our data being put into the
          form:
          <br />
          <br />
          {/* onsubmit the form will call the handle submit function */}
          <form action="" onSubmit={handleSubmit}>
            {/* enter the first name */}
            First Name:
            {/* give the input type, give it the name of the data, the value will be the form data, on change we are setting the form data to the new data */}
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <br />
            {/* enter the last name */}
            Last Name:
            {/* give the input type, give it the name of the data, the value will be the form data, on change we are setting the form data to the new data */}
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            <br />
            {/* the submit button is given type submit so the form knows when it is ready */}
            <button type="submit">Submit</button>
          </form>
          {/* display the form data */}
          <p>
            Name: {formData.firstName} {formData.lastName}
          </p>
        </li>
      </ul>
    </>
  );
};

export default LearnForms;
