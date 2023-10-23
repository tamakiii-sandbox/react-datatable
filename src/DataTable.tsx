import * as React from "react";
import * as ReactDOM from "react-dom";
import { any } from "prop-types";

export interface Column {
  id: string;
  label: string;
};

export interface Table<R> {
  head: Array<Column>;
  body: Array<R>;
};

export interface Filter<T> {
  (value: T, index: number, array: T[]): boolean
}

export interface Props {
  table: Table<any>;
  filter?: Filter<any>;
};

export class DataTable extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  getRows() {
    const body = this.props.table.body;
    return this.props.filter ? body.filter(this.props.filter) : body;
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.props.table.head.map((head, index) => {
              return (
                <th key={index}>{head.label}</th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {this.getRows().map((row: any, index: number) => {
            return (
              <tr key={index}>
                {this.props.table.head.map((head, idx) => {
                  return (
                    <td key={idx}>{row[head.id]}</td>
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