import * as React from "react";
import * as ReactDOM from "react-dom";
import 'normalize.css';
import './app.css';

interface Props {
  title: string
};

const App = (props: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th><input type="checkbox" name="id" /></th>
          <th>Name</th>
          <th>Birthday</th>
          <th>Gender</th>
          <th>Group</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" name="id" /></td>
          <td>Tom Jenkinson</td>
          <td>Jan 17, 1975</td>
          <td>Male</td>
          <td>Squarepusher</td>
        </tr>
        <tr>
          <td><input type="checkbox" name="id" /></td>
          <td>Thomas Bangalter</td>
          <td>Jan 3, 1975</td>
          <td>Unknown</td>
          <td>Daft Punk</td>
        </tr>
        <tr>
          <td><input type="checkbox" name="id" /></td>
          <td>Guy-Manuel de Homem-Christo</td>
          <td>Feb 8, 1974</td>
          <td>Unknown</td>
          <td>Daft Punk</td>
        </tr>
        <tr>
          <td><input type="checkbox" name="id" /></td>
          <td>Midori Hara</td>
          <td>Feb 2, 1966</td>
          <td>Female</td>
          <td>Spank Happy</td>
        </tr>
      </tbody>
    </table>
  );
}

ReactDOM.render(
  <App title="hello world" />,
  document.querySelector("#app")
);
