import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { loginUserAction } from "../actions/authenticationActions";
import { setCookie } from "../utils/cookies";

class LoginPage extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email,
      password,
    };

    this.props.dispatch(loginUserAction(data));
  };

  componentDidMount() {
    document.title = "React Login";
  }

  render() {
    let isSuccess, message;

    if (this.props.response.login.hasOwnProperty("response")) {
      isSuccess = this.props.response.login.response.success;
      message = this.props.response.login.response.message;

      if (isSuccess) {
        setCookie("token", this.props.response.login.response.token, 1);
      }
    }

    return (
      <div className="container mt-5">
        <div className="row">
          <div class="col-sm">
            <h1>ini nanti gambar</h1>
          </div>
          <div class="col-sm mt-5">
            <h3>Sign In</h3>
            {!isSuccess ? <div>{message}</div> : <Redirect to="dashboard" />}
            <form onSubmit={this.onHandleLogin}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div>
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
              </div>
            </form>
            Don't have account? <Link to="register">Register here</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(LoginPage);
