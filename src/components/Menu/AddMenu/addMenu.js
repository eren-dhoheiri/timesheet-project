import React, { Component } from "react";
import { connect } from "react-redux";
import { menuAddAction } from "../../../_actions/menu";

export class addMenu extends Component {
  onHandleSubmit = (event) => {
    event.preventDefault();

    let label = event.target.label.value;
    let parent = event.target.parent.value;
    let path = event.target.path.value;

    const menu = {
      label,
      parent,
      path,
    };

    this.props.dispatch(menuAddAction(menu));

    window.location.reload();
  };

  render() {
    return (
      <div className="container form mx-auto mb-5 mt-5 ">
        <div className="card text-black mb-3">
          <h3 className="card-header mb-4">Add Menu Form</h3>
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
              <div className="form-group">
                <label htmlFor="parent">Parent</label>
                <input
                  className="form-control"
                  type="text"
                  username="parent"
                  id="parent"
                />
              </div>
              <div className="form-group">
                <label htmlFor="path">Path</label>
                <input
                  className="form-control"
                  type="text"
                  username="path"
                  id="path"
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
