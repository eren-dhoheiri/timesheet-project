import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { registerUserAction } from "../../_actions/authenticationActions";

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
  };

  componentDidMount() {
    document.title = "Register";
  }

  render() {
    console.log(this.props);
    let message, isSuccess;

    if (this.props.response.register.hasOwnProperty("response")) {
      isSuccess = this.props.response.register.response.success;
      message = this.props.response.register.response.message;
    }

    return (
      <div>
        <h3>RegisterPage</h3>
        {!isSuccess ? <div>{message}</div> : <Redirect to="/login" />}
        <form onSubmit={this.onHandleRegistration}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" username="username" id="username" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" username="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" username="password" id="password" />
          </div>
          <div>
            <button>Register</button>
          </div>
        </form>
        Already have account? <Link to="login">Login here</Link>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  response,
});

export default connect(mapStateToProps)(RegisterPage);
