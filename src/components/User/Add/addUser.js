import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { registerUserAction } from "../../../_actions/authenticationActions";

class addMenu extends Component {
  onHandleRegistration = (event) => {
    event.preventDefault();

    let username = event.target.username.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    const user = {
      username,
      email,
      password,
    };

    this.props.dispatch(registerUserAction(user));

    // window.location.reload();
  };

  render() {
    return (
      <div className="container mx-auto mb-5 mt-5">
        <div className="card text-black mb-3">
          <h3 className="card-header mb-4">Add User Form</h3>
          <div className="card-body">
            <form onSubmit={this.onHandleRegistration}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  className="form-control"
                  type="text"
                  username="username"
                  id="username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  username="email"
                  id="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  username="password"
                  id="password"
                />
              </div>
              <div>
                <button className="btn btn-warning text-white">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  response,
});

export default connect(mapStateToProps)(addMenu);
