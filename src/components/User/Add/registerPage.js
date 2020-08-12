import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./register.css";

import { registerUserAction } from "../../../_actions/authenticationActions";

class RegisterPage extends Component {
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

    // console.log(this.props);
    // if (this.props.response.register.response.success) {
    //   window.location.reload();
    // } else {
    //   alert(this.props.response.register.response.password[0]);
    // }
    window.location.reload();
  };

  componentDidMount() {
    document.title = "Timesheet";
  }

  render() {
    console.log(this.props);
    let message, isSuccess;

    if (this.props.response.register.hasOwnProperty("response")) {
      isSuccess = this.props.response.register.response.success;
      message = this.props.response.register.response.message;
    }

    return (
      <div className="container form mx-auto mb-5 mt-5 ">
        <div className="card text-white bg-primary mb-3">
          <h3 className="card-header mb-4">Add User Form</h3>
          {!isSuccess ? <div>{message}</div> : <Redirect to="/home" />}
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
                <button className="btn btn-warning">Submit</button>
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

export default connect(mapStateToProps)(RegisterPage);
