import * as React from "react";
import * as ReactDOM from "react-dom";
import 'normalize.css';
import './app.css';
import data from "./data";
import * as DataTable from "./DataTable";

const filter: DataTable.Filter<any> = (value: any, index: number) => {
  return value.group == 'Daft Punk';
};

const App = (props: DataTable.Props) => {
  return (
    <DataTable.DataTable table={data} filter={filter} />
  );
}

ReactDOM.render(
  <App table={data} />,
  document.querySelector("#app")
);
