import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./list.css";

class HomeView extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="container mb-5">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((li, index) => (
              <tr
                key={li.id}
                className={
                  this.props.users.length - 1 == index ? "last" : "none"
                }
              >
                <td>
                  {/* <Link
                    // className="name"
                    // to={`${this.props.match.path}/users/${li.id}`}
                    to="/"
                  >
                    {li.id}
                  </Link> */}
                  {li.id}
                </td>
                <td>
                  {/* <Link
                    // className="name"
                    // to={`${this.props.match.path}/users/${li.id}`}
                    to="/"
                  >
                    {li.username}
                  </Link> */}
                  {li.username}
                </td>
                <td>{li.email}</td>
                <td className="actions">
                  <button
                    className="links link btn btn-warning text-white mr-3"
                    onClick={() =>
                      this.props.onUpdateHandle({
                        id: li.id,
                        username: li.username,
                        email: li.email,
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
