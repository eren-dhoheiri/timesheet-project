import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../User/List/list.css";

class HomeView extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="container mb-5">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Label</th>
              <th>Parent</th>
              <th>Path</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.menus.map((li, index) => (
              <tr
                key={li.id}
                // className={
                //   this.props.users.length - 1 == index ? "last" : "none"
                // }
              >
                <td>{li.id}</td>
                <td>{li.label}</td>
                <td>{li.parent}</td>
                <td>{li.path}</td>
                <td className="actions">
                  <button
                    className="links link btn btn-warning mr-3"
                    onClick={() =>
                      this.props.onUpdateHandle({
                        id: li.id,
                        label: li.username,
                        parent: li.email,
                        path: li.path,
                      })
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="links link btn btn-danger"
                    onClick={() => this.props.onDeleteHandle(li.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default HomeView;
