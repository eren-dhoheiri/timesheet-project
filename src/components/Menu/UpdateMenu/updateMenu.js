import React, { Component } from "react";
import "../../User/Update/dialog.css";

class UpdateMenu extends Component {
  state = {
    isDialog: false,
  };

  render() {
    if (this.props.menu === undefined) {
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
                Hit Enter to Finish Updating {this.props.menu.label}'s profile.
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
                    defaultValue={this.props.menu.label}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="parent">Parent</label>
                  <input
                    className="form-control"
                    type="text"
                    name="parent"
                    id="parent"
                    defaultValue={this.props.menu.parent}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="path">Path</label>
                  <input
                    className="form-control"
                    type="text"
                    name="path"
                    id="path"
                    defaultValue={this.props.menu.path}
                  />
                </div>
                <div>
                  <button className="btn btn-primary mr-4">
                    Update {this.props.menu.label}
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

export default UpdateMenu;
