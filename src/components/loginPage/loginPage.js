import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./loginPage.css";
import LoginImg from "../../assets/celerates.jpg";
import LogoCelerates from "../../assets/logo.png";

import { loginUserAction } from "../../_actions/authenticationActions";
import { setCookie } from "../../_utils/cookies";

class LoginPage extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();

    let username = event.target.username.value;
    let password = event.target.password.value;

    const data = {
      username,
      password,
    };

    this.props.dispatch(loginUserAction(data));
  };

  componentDidMount() {
    document.title = "Timesheet Celerates";
  }

  render() {
    let isSuccess, message;

    if (this.props.response.login.hasOwnProperty("response")) {
      isSuccess = this.props.response.login.success;
      message = this.props.response.login.message;

      // if (isSuccess) {
      //   setCookie("token", this.props.response.login.response.token, 1);
      // }
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8 px-0 d-none d-sm-block">
            <img src={LoginImg} alt="login image" className="login-img" />
          </div>
          <div className="col-sm-4 login-section-wrapper">
            <div className="login-wrapper my-auto">
              <div className="brand-wrapper">
                <img src={LogoCelerates} alt="logo" className="logo" />
              </div>
              <h1 className="login-title">Log in</h1>
              <form onSubmit={this.onHandleLogin}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    className="form-control"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="enter your passsword"
                  />
                </div>
                <div>
                  <button type="submit" className="btn btn-block login-btn">
                    Submit
                  </button>
                </div>
              </form>
              <p className="login-wrapper-footer-text">
                Don't have an account? <Link to="register">Register here</Link>
              </p>
              {!isSuccess ? <div>{message}</div> : <Redirect to="home" />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(LoginPage);
