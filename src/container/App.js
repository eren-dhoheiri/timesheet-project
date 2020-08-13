import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from "./privateRoute";
import LoginPage from "../components/loginPage/loginPage";
import List from "../components/User/List/listComponent";
import Menu from "../components/Menu/MenuList/menuComponent.js";
import Role from "../components/Role/RoleList/roleComponent.js";
import Logout from "../components/logoutPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/home" component={List} />
            <PrivateRoute path="/menu" component={Menu} />
            <PrivateRoute path="/role" component={Role} />
            <PrivateRoute path="/logout" component={Logout} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
