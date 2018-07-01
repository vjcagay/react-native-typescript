import * as React from "react";
import * as renderer from "react-test-renderer";

import App from "../App";

test("It renders correctly", () => {
  const app = renderer.create(<App />);
  const message = app.root.find((element) => element.type === "Text");
  expect(message.props.children).toEqual("Hello World of React Native!");
});
