import * as React from "react";
import * as ReactDOM from "react-dom";

export interface Column {
  id: string;
  label: string;
};

export interface Table<R> {
  head: Array<Column>;
  body: Array<R>;
};

export interface Props {
  table: Table<any>;
};

export class DataTable extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.props.table.head.map((head) => {
              return (
                <th>{head.label}</th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {this.props.table.body.map((row) => {
            return (
              <tr>
                {this.props.table.head.map((head) => {
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
}