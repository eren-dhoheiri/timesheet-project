import React, { Component } from "react";
import { connect } from "react-redux";
import { roleAddAction } from "../../../_actions/role";

export class addRole extends Component {
  onHandleSubmit = (event) => {
    event.preventDefault();

    let label = event.target.label.value;

    const role = {
      label,
    };

    this.props.dispatch(roleAddAction(role));

    window.location.reload();
  };

  render() {
    return (
      <div className="container form mx-auto mb-5 mt-5 ">
        <div className="card text-black mb-3">
          <h3 className="card-header mb-4">Add Role Form</h3>
          {/* {!isSuccess ? <div>{message}</div> : <Redirect to="/role" />} */}
          <div className="card-body">
            <form onSubmit={this.onHandleSubmit}>
              <div className="form-group">
                <label htmlFor="label">Label</label>
                <input
                  className="form-control"
                  type="text"
                  username="label"
                  id="label"
                />
              </div>
              <div>
                <button className="btn btn-warning text white">Submit</button>
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

export default connect(mapStateToProps)(addRole);
