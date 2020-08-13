import React, { Component } from "react";
import { connect } from "react-redux";
import { userUpdateAction } from "../../../_actions/user";

export class updateMenu extends Component {
  state = {
    users: [],
    user: undefined,
  };

  onHandleUpdate = (event) => {
    event.preventDefault();

    let id = this.props.props.id;
    let username = event.target.username.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    const user = {
      id,
      username,
      email,
      password,
    };

    this.props.dispatch(userUpdateAction(user));

    window.location.reload();
  };

  render() {
    console.log(this.props);
    return (
      <div className="container mx-auto mb-5 mt-5 ">
        <div className="card text-black mb-3">
          <h3 className="card-header mb-4">Edit User Form</h3>
          <div className="card-body">
            <form onSubmit={this.onHandleUpdate}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  className="form-control"
                  type="text"
                  username="username"
                  id="username"
                  defaultValue={this.props.props.username}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  username="email"
                  id="email"
                  defaultValue={this.props.props.email}
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

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(updateMenu);
