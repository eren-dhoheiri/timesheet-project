import React, { Component } from "react";
import { connect } from "react-redux";
import { menuUpdateAction } from "../../../_actions/menu";

class UpdateMenu extends Component {
  state = {
    menus: [],
    menu: undefined,
  };

  onHandleUpdate = (event) => {
    event.preventDefault();

    let id = this.props.menu.id;
    let label = event.target.label.value;
    let parent = event.target.parent.value;
    let path = event.target.path.value;

    const menu = {
      id,
      label,
      parent,
      path,
    };
    console.log(menu);

    this.props.dispatch(menuUpdateAction(menu));

    window.location.reload();
  };

  render() {
    return (
      <div className="container mx-auto mt-5 mb-5">
        <div className="card">
          <div className="card-body">
            <span className="user-info h4">Edit Menu Form</span>
            <form onSubmit={this.onHandleUpdate}>
              <div className="form-group">
                <label htmlFor="label">Label</label>
                <input
                  className="form-control"
                  type="text"
                  name="label"
                  id="label"
                  // defaultValue={this.props.menu.label}
                />
              </div>
              <div className="form-group">
                <label htmlFor="parent">Parent</label>
                <input
                  className="form-control"
                  type="text"
                  name="parent"
                  id="parent"
                  // defaultValue={this.props.menu.parent}
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

export default connect(mapStateToProps)(UpdateMenu);
