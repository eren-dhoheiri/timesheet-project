import React, { Component } from "react";
import "./dialog.css";

class Dialog extends Component {
  state = {
    isDialog: false,
    isShow: false,
  };

  onFocus() {
    console.log("aksjhdkajsdh");
    this.setState({ isShow: true });
  }

  onBlur() {
    this.setState({ isShow: false });
  }

  render() {
    if (this.props.user === undefined) {
      return <div></div>;
    }

    console.log(this.props);

    let success = "Success";
    let message = "Oke";

    // if (this.props.props.updateuserReducer.hasOwnProperty("response")) {
    //   success = this.props.props.updateUserReducer.response.success;
    //   message = this.props.props.updateUserReducer.response.message;
    // }

    return (
      <div className="container mx-auto mt-5 mb-5">
        <div
          className={this.props.onShow ? "backdrop show" : "backdrop hide"}
          onClick={this.props.onHandleClose}
        ></div>
        <div className="card">
          <div className="card-body">
            <div className={this.props.onShow ? "dialog show" : "dialog hide"}>
              <span className="user-info h4">
                Hit Enter to Finish Updating {this.props.user.username}'s
                profile.
              </span>
              <form onSubmit={this.props.onHandleAction}>
                {/* <div>{message}</div> */}
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    id="username"
                    defaultValue={this.props.user.username}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    defaultValue={this.props.user.email}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    id="password"
                    defaultValue="********"
                    onClick={this.onFocus.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                  />
                </div>
                <div>
                  <button className="btn btn-primary mr-4">
                    Update {this.props.user.username}
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.props.onHandleClose}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dialog;
