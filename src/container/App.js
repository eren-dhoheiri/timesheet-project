import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from "./privateRoute";
import LoginPage from "../components/loginPage/loginPage";
import List from "../components/User/List/listComponent";
import Menu from "../components/Menu/menu";

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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
