import * as React from "react";
import * as ReactDOM from "react-dom";

interface Props {
  title: string
};
interface State {};

class App extends React.PureComponent<Props, State> {
  render() {
    return (
      <p>{this.props.title}</p>
    );
  }
}

ReactDOM.render(
  <App title="hello" />,
  document.querySelector("#app")
);
