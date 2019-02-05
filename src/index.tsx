import * as React from "react";
import * as ReactDOM from "react-dom";
import 'normalize.css';
import './app.css';
import data from "./data";
import * as DataTable from "./DataTable";

const App = (props: DataTable.Props) => {
  return (
    <DataTable.DataTable table={data} />
  );
}

ReactDOM.render(
  <App table={data} />,
  document.querySelector("#app")
);
