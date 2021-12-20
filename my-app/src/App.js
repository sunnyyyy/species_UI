import ReactDOM from "react-dom";
import React from "react";

import {
    WireframeContainer, withWireframeAnnotation,
} from "@matt-dunn/react-wireframes";

const MyComponent = () => <article>Hello world</article>;

const AnnotatedMyComponent = withWireframeAnnotation({
    title: "MyComponent title",
    description: "MyComponent description.",
})(MyComponent);

const app = (
  <WireframeContainer>
      <AnnotatedMyComponent />
  </WireframeContainer>
);

ReactDOM.render(
  app,
  document.getElementById("app"),
);