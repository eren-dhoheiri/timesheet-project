import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Header from "../../Header/header";
import UpdateMenu from "../UpdateMenu/updateMenu";
import AddMenu from "../AddMenu/addMenu";
import Popup from "reactjs-popup";
import ReactDatatable from "@ashvin27/react-datatable";

import { menuAction, menuDeleteAction } from "../../../_actions/menu";

export class MenuComponent extends Component {
  state = {
    menus: [],
    menu: undefined,
  };

  columns = [
    {
      key: "id",
      text: "ID",
      sortable: true,
    },
    {
      key: "label",
      text: "Label",
      sortable: true,
    },
    {
      key: "parent",
      text: "Parent",
      sortable: true,
    },
    {
      key: "path",
      text: "Path",
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
              <UpdateMenu props={user} />
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
    this.props.dispatch(menuAction());
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.menuReducer.hasOwnProperty("response")) {
      return {
        menus: nextProps.menuReducer.response,
      };
    }

    return {
      menus: [],
    };
  }

  deleteRecord(menu, index) {
    this.props.dispatch(
      menuDeleteAction({
        id: menu.id,
      })
    );

    window.location.reload();
  }

  render() {
    // console.log(this.props);
    console.log(this.state);
    if (this.state.menus === undefined || this.state.menus.length === 0) {
      return (
        <div>
          <Header />
          <div>No menu</div>;
        </div>
      );
    }

    const { match } = this.props;

    return (
      <div>
        <Header />
        <div className="container mt-4">
          <Popup
            trigger={
              <button className="btn btn-success mb-2">Create Menu</button>
            }
            modal
          >
            <AddMenu />
          </Popup>
          <ReactDatatable
            config={this.config}
            records={this.state.menus}
            columns={this.columns}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(MenuComponent);
