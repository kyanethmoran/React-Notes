import React from "react";

const LearnMap = () => {
  const people = [
    { fName: "Tyler", lName: "Smith", age: 27, gender: "M" },
    { fName: "Kelly", lName: "Anne", age: 18, gender: "F" },
    { fName: "Joseph", lName: "White", age: 33, gender: "M" },
    { fName: "John", lName: "Paul", age: 25, gender: "F" },
    { fName: "Steven", lName: "Mills", age: 81, gender: "M" },
  ];
  return (
    <>
      <h2>Map Function In React:</h2>
      <h3>What is it?</h3>
      <p>
        The map() function in React, which is a standard JavaScript array
        method, is primarily used for rendering lists of dynamic content based
        on arrays. It allows you to transform each element of an array into a
        new element, typically a React component or JSX element, and return a
        new array containing these transformed elements.
      </p>
      <h3>How it works:</h3>
      <ul>
        <li>
          <strong>Iteration and Transformation:</strong> The map() method
          iterates over each item in an array and applies a provided callback
          function to each item. This callback function then returns a new value
          (often a JSX element) for that item.
        </li>
        <li>
          <strong>Dynamic List Rendering:</strong> In React, map() is commonly
          used within a component's render method or functional component's
          return statement to dynamically generate a list of elements. For
          example, you can have an array of data (e.g., users, products, or blog
          posts) and use map() to render a &lt;li&gt; element or a custom
          component for each item in that array.
        </li>
        <li>
          <strong>Key Prop Requirement:</strong> When using map() to render a
          list of elements in React, it's crucial to provide a unique key prop
          to each element returned by the map() function. This key helps React
          efficiently update the DOM by identifying which items have changed,
          been added, or been removed, especially when the order of items might
          change or items are added/deleted.
        </li>
      </ul>
      <h3>Look at react notes for example:</h3>
      <p>
        With all of the previous ordered and unordered lists in the source code
        you will see that each list item is being created by hand typing out all
        of the tags and filling in or "hardcoding" the text segments. This is
        not best practice but the way I have been doing it so far as to not skip
        through to much at once and make the code easier to read if you are
        using this at notes.If any of my notes segments change I would need to
        go back find the element and make a change inside it
      </p>
      <p>
        The way that you should go about making a page more dynamic and
        components more code line compact is my utilizing the Map function to
        take data and insert the elements or components on an as needed bases.
      </p>
      <h3>Map() Function Example:</h3>
      <p>
        lets say you have an array of objects and you want to list them out:
      </p>
      <pre>
        <code>
          {`
        const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
  ];
        `}
        </code>
      </pre>
      <p>
        Instead of creating each individual list element you can you can map the
        data over list elements so react will generate a list item for each
        object. It uses the key to put the correct data to each item.
      </p>
      <pre>
        <code>
          {`
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
        `}
        </code>
      </pre>
      <label htmlFor="map-example">
        This list of people was created using the map function:
      </label>
      <ul id="map-example">
        {people.map((item) => (
          <li key={item.fName}>
            {item.fName} {item.lName}: {item.age}, {item.gender}
          </li>
        ))}
      </ul>
      <p>
        **Instead of having to type out each list element I hand the map funtion
        my people data and let it populate the appropriate amount of list item
        elements to display all my people data**
      </p>
    </>
  );
};

export default LearnMap;
