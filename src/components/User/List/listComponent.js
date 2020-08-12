import React, { Component } from "react";
import { connect } from "react-redux";
import ListView from "./listView";
import Update from "../Update/dialog";
import Add from "../Add/registerPage";
import Header from "../../Header/header";

import {
  usersListAction,
  userUpdateAction,
  userDeleteAction,
} from "../../../_actions/user";

class HomeComponent extends Component {
  state = {
    users: [],
    success: undefined,
    message: undefined,
    isDialog: false,
    user: undefined,
  };

  componentDidMount() {
    this.props.dispatch(usersListAction());
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.homeReducer.hasOwnProperty("response")) {
      return {
        users: nextProps.homeReducer.response.results.data,
      };
    }

    return {
      users: [],
      success: undefined,
      message: undefined,
    };
  }

  onUpdateHandle(user) {
    if (this.state.isDialog) {
      this.setState({ isDialog: false });
    } else {
      this.setState({ isDialog: true }, () => {
        this.state.users.map((item) => {
          if (item.id === user.id) {
            this.setState({ user: item });
          }
        });
      });
    }
  }

  onHandleUpdate(event) {
    event.preventDefault();
    // console.log("masuk");
    const user = {
      id: this.state.user.id,
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    // console.log(user);
    this.props.dispatch(
      userUpdateAction({
        user: user,
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
      userDeleteAction({
        id: id,
      })
    );

    window.location.reload();
  }

  render() {
    // console.log(this.props);
    // console.log(this.state);
    if (this.state.users === undefined || this.state.users.length === 0) {
      return <div>No user</div>;
    }

    const { match } = this.props;

    return (
      <div>
        <Header />
        <Add />
        <ListView
          users={this.state.users}
          match={match}
          onUpdateHandle={this.onUpdateHandle.bind(this)}
          onDeleteHandle={this.onDeleteHandle.bind(this)}
        />
        <Update
          onShow={this.state.isDialog}
          user={this.state.user}
          onHandleAction={this.onHandleUpdate.bind(this)}
          onHandleClose={this.onHandleClose.bind(this)}
          props={this.props}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(HomeComponent);
