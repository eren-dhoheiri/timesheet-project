import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Popup from "reactjs-popup";
import Header from "../../Header/header";
import Update from "../Update/updateUser";
import Add from "../Add/addUser";
import ReactDatatable from "@ashvin27/react-datatable";

import { usersListAction, userDeleteAction } from "../../../_actions/user";

class ListComponent extends Component {
  state = {
    users: [],
    user: undefined,
  };

  columns = [
    {
      key: "id",
      text: "ID",
      sortable: true,
    },
    {
      key: "username",
      text: "Username",
      sortable: true,
    },
    {
      key: "email",
      text: "Email",
      sortable: true,
    },
    {
      key: "action",
      text: "Action",
      cell: (user, index) => {
        return (
          <Fragment>
            <Popup
              trigger={
                <button className="btn btn-warning btn-sm mr-2 text-white">
                  Edit
                </button>
              }
              modal
            >
              <Update props={user} />
            </Popup>
            <button
              className="btn btn-danger btn-sm"
              onClick={this.deleteRecord.bind(this, user, index)}
            >
              Delete
            </button>
          </Fragment>
        );
      },
    },
  ];

  config = {
    page_size: 10,
    length_menu: [10, 20, 50],
    show_filter: true,
    show_pagination: true,
    button: {
      excel: false,
      print: false,
    },
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

  deleteRecord(user, index) {
    this.props.dispatch(
      userDeleteAction({
        id: user.id,
      })
    );

    window.location.reload();
  }

  render() {
    // console.log(this.state);
    if (this.state.users === undefined || this.state.users.length === 0) {
      return <div>No user</div>;
    }

    const { match } = this.props;

    return (
      <div>
        <Header />
        <div className="container mt-4">
          <Popup
            trigger={
              <button className="btn btn-success mb-2">Create User</button>
            }
            modal
          >
            <Add />
          </Popup>
          <ReactDatatable
            config={this.config}
            records={this.state.users}
            columns={this.columns}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ListComponent);
