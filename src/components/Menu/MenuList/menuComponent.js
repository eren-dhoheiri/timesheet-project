import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../Header/header";
import HomeView from "./menuView";
import UpdateMenu from "../UpdateMenu/updateMenu";
import AddMenu from "../AddMenu/addMenu";

import {
  menuAction,
  menuUpdateAction,
  menuDeleteAction,
} from "../../../_actions/menu";

export class MenuComponent extends Component {
  state = {
    menus: [],
    isDialog: false,
    menu: undefined,
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

  onUpdateHandle(menu) {
    if (this.state.isDialog) {
      this.setState({ isDialog: false });
    } else {
      this.setState({ isDialog: true }, () => {
        this.state.menus.map((item) => {
          if (item.id === menu.id) {
            this.setState({ menu: item });
          }
        });
      });
    }
  }

  onHandleUpdate(event) {
    event.preventDefault();
    // console.log("masuk");
    const menu = {
      id: this.state.menu.id,
      label: event.target.label.value,
      parent: event.target.parent.value,
      path: event.target.path.value,
    };

    // console.log(menu);
    this.props.dispatch(
      menuUpdateAction({
        menu: menu,
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
      menuDeleteAction({
        id: id,
      })
    );

    window.location.reload();
  }

  render() {
    // console.log(this.props);
    // console.log(this.state);
    if (this.state.menus === undefined || this.state.menus.length === 0) {
      return (
        <div>
          <Header />
          <div>No menu</div>;
        </div>
      );
    }
    console.log(this.state);

    const { match } = this.props;

    return (
      <div>
        <Header />
        <AddMenu />
        <HomeView
          menus={this.state.menus}
          match={match}
          onUpdateHandle={this.onUpdateHandle.bind(this)}
          onDeleteHandle={this.onDeleteHandle.bind(this)}
        />
        <UpdateMenu
          onShow={this.state.isDialog}
          menu={this.state.menu}
          onHandleAction={this.onHandleUpdate.bind(this)}
          onHandleClose={this.onHandleClose.bind(this)}
          props={this.props}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(MenuComponent);
