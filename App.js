import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="heading" tabIndex="5">
    Hello World!
  </h1>
);

const HeadingCompnent = () => (
  <div id="container">
    <Title />
    <h1>This is a Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingCompnent />);
