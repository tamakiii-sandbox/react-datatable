import * as React from "react";
import * as ReactDOM from "react-dom";

interface Props {
  title: string
};

const App = (props: Props) => {
  return (
    <p>{props.title}</p>
  );
}

ReactDOM.render(
  <App title="hello world" />,
  document.querySelector("#app")
);
