import React, { Component } from "react";
import {connect} from "react-redux";
import {roleUpdateAction} from "../../../_actions/role";

class UpdateRole extends Component {
  state = {
    isDialog: false,
  };

  render() {
    if (this.props.role === undefined) {
      return <div></div>;
    }

    console.log(this.props);

    let success = "Success";
    let message = "Oke";


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
                Hit Enter to Finish Updating {this.props.role.label}'s profile.
              </span>
              <form onSubmit={this.props.onHandleAction}>
                {/* <div>{message}</div> */}
                <div className="form-group">
                  <label htmlFor="label">Label</label>
                  <input
                    className="form-control"
                    type="text"
                    name="label"
                    id="label"
                    defaultValue={this.props.role.label}
                  />
                </div>
                <div>
                  <button className="btn btn-primary mr-4">
                    Update {this.props.role.label}
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

export default UpdateRole;
