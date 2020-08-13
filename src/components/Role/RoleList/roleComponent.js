import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../Header/header";
import RoleView from "./roleView";
import UpdateRole from "../UpdateRole/updateRole";
import AddRole from "../addRole/addRole";

import {
  roleAction,
  roleUpdateAction,
  roleDeleteAction,
} from "../../../_actions/role";

export class RoleComponent extends Component {
  state = {
    roles: [],
    isDialog: false,
    role: undefined,
  };

  componentDidMount() {
    this.props.dispatch(roleAction());
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.roleReducer.hasOwnProperty("response")) {
      return {
        roles: nextProps.roleReducer.response,
      };
    }

    return {
      roles: [],
    };
  }

  onUpdateHandle(role) {
    if (this.state.isDialog) {
      this.setState({ isDialog: false });
    } else {
      this.setState({ isDialog: true }, () => {
        this.state.roles.map((item) => {
          if (item.id === role.id) {
            this.setState({ role: item });
          }
        });
      });
    }
  }

  onHandleUpdate(event) {
    event.preventDefault();
    const role = {
      id: this.state.role.id,
      label: event.target.label.value,
    };

    this.props.dispatch(
      roleUpdateAction({
        role: role,
      })
    );

    this.setState({ isDialog: false }, () => {
      window.location.reload();
    });
  }

  onHandleClose() {
    this.setState({ isDialog: false }, () => {
      window.location.reload();
    });
  }

  onDeleteHandle(id) {
    this.props.dispatch(
      roleDeleteAction({
        id: id,
      })
    );

    window.location.reload();
  }

  render() {
    if (this.state.roles === undefined || this.state.roles.length === 0) {
      return (
        <div>
          <Header />
          <div>No Role</div>;
        </div>
      );
    }
    console.log(this.state);
    console.log(this.props);

    const { match } = this.props;

    return (
      <div>
        <Header />
        <AddRole />
        <RoleView
          roles={this.state.roles}
          match={match}
          onUpdateHandle={this.onUpdateHandle.bind(this)}
          onDeleteHandle={this.onDeleteHandle.bind(this)}
        />
        <UpdateRole
          onShow={this.state.isDialog}
          role={this.state.role}
          onHandleAction={this.onHandleUpdate.bind(this)}
          onHandleClose={this.onHandleClose.bind(this)}
          props={this.props}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(RoleComponent);
