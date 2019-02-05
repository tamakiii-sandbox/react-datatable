import * as React from "react";
import * as ReactDOM from "react-dom";

interface Props {};
interface State {};

class App extends React.PureComponent<Props, State> {
  render() {
    return (
      <p>hello</p>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#app")
);

