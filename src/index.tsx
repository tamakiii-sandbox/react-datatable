import * as React from "react";
import * as ReactDOM from "react-dom";
import 'normalize.css';
import './app.css';

interface Column {
  id: string;
  label: string;
};

// interface Row {
//   id: any;
//   name: string;
//   birthday: string;
//   gender: string;
//   group: string;
//   [key: string]: string;
// }

interface Table<R> {
  head: Array<Column>;
  body: Array<R>;
};

interface Props {
  table: Table<any>;
};

const App = (props: Props) => {
  return (
    <table>
      <thead>
        <tr>
          {props.table.head.map((head) => {
            return (
              <th>{head.label}</th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.table.body.map((row) => {
          return (
            <tr>
              {props.table.head.map((head) => {
                return (
                  <td>{row[head.id]}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const table = {
  head: [
    {
      id: "name",
      label: "Name",
    },
    {
      id: "birthday",
      label: "Birthday",
    },
    {
      id: "gender",
      label: "Gender",
    },
    {
      id: "group",
      label: "Group",
    }
  ],
  body: [
    {
      id: 1,
      name: "Tom Jenkinson",
      birthday: "Jan 17, 1975",
      gender: "Male",
      group: "Squarepusher",
    },
    {
      id: 2,
      name: "Thomas Bangalter",
      birthday: "Jan 3, 1975",
      gender: "Unknown",
      group: "Daft Punk",
    },
    {
      id: 3,
      name: "Guy-Manuel de Homem-Christo",
      birthday: "Feb 8, 1974",
      gender: "Unknown",
      group: "Daft Punk",
    },
    {
      id: 4,
      name: "Midori Hara",
      birthday: "Feb 2, 1966",
      gender: "Female",
      group: "Spank Happy",
    }
  ]
}

ReactDOM.render(
  <App table={table} />,
  document.querySelector("#app")
);
