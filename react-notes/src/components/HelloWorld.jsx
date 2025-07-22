import UseRACFCE from "./UseRACFCE";

// arror function creates the component
const HelloWorld = () => {
  // return jsx
  return (
    <>
      {/* the smaller the number after the h the "less important" the header is and thus the smaller the text is*/}
      <h2>Hello World:</h2>
      {/* nest a component within a component */}
      <UseRACFCE />
      {/* a new generic container to break up the code */}
      <div>
        {/* create a paragraph */}
        <h3>Fragments:</h3>
        <p>
          When you return &lt;&gt;&lt;/&gt; within a jsx component you are
          creating a fragment. This fragment is used becaues in react you cannot
          have just siblings. You need the fragment to become the parent
          container and everything inbetween are the children to the parent.
          Think "everyone wants a parent".
          {/* this created an order list (a list that is numbered) */}
          <ol>
            {/* this created an item in the list, add more to <li></li> to make the list longer */}
            <li>
              You could do it with &lt;div&gt;&lt;/div&gt;, however that will
              affect SEO so the clean way to do it is with a
              {/* very old way to bold text */}
              <strong>Fragment</strong>
            </li>
          </ol>
        </p>
      </div>
    </>
  );
};

// to use a component you need to export it here and then import it in the file you want to use it in
export default HelloWorld;
