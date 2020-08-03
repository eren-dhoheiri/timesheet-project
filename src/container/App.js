import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from "./privateRoute";
import LoginPage from "../components/loginPage/loginPage";
import RegisterPage from "../components/registerPage/registerPage";
import homePage from "../components/homePage/homePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <PrivateRoute path="/home" component={homePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
