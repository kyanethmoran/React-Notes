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
      <h3>Here is why custom hooks are useful:</h3>
      <ol>
        <li>
          <strong> Code Reusability:</strong>
          <ul>
            <li>
              Custom hooks allow you to encapsulate logic that is used in
              multiple components, preventing redundancy and promoting a DRY
              (Don't Repeat Yourself) approach.
            </li>
            <li>
              Instead of repeating the same code in different components, you
              can create a custom hook that encapsulates that logic and reuse it
              across your application.
            </li>
          </ul>
        </li>
        <li>
          <strong>Improved Maintainability:</strong>
          <ul>
            <li>
              By extracting complex logic into custom hooks, you can make your
              components smaller and more focused.
            </li>
            <li>
              This makes it easier to understand, test, and debug your code, as
              the logic is separated and organized.
            </li>
            <li>
              When changes are needed, you only need to modify the hook, rather
              than multiple components.
            </li>
          </ul>
        </li>
        <li>
          <strong>Reduced Code Bloat:</strong>
          <ul>
            <li>
              Custom hooks help prevent code duplication, which can lead to
              bloated components and make it harder to manage your codebase.
            </li>
            <li>
              By extracting logic into reusable hooks, you can keep your
              components concise and focused on their specific responsibilities.
            </li>
          </ul>
        </li>
        <li>
          <strong>Avoiding Prop Drilling:</strong>
          <ul>
            <li>
              Custom hooks can help you avoid prop drilling, where you pass
              props through multiple layers of components to reach the one that
              needs them.
            </li>
            <li>
              By encapsulating the logic and data within a hook, you can
              directly provide the necessary information to the components that
              need it, simplifying your component hierarchy.
            </li>
          </ul>
        </li>
        <li>
          <strong>Abstraction and Organization:</strong>
          <ul>
            <li>
              Custom hooks allow you to abstract away complex logic, making your
              components cleaner and easier to read.
            </li>
            <li>
              They help you organize your code by grouping related
              functionalities together, making your codebase more modular and
              maintainable.
            </li>
          </ul>
        </li>
      </ol>
      <h3>Utilizing a useCounter Custom Hook:</h3>
      <p>
        This hook will be able to facilitate the incrementing, decrementing, and
        reseting of a counter.
      </p>
    </>
  );
};

export default LearnCustomHooks;
