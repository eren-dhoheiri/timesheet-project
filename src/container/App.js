import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from "./privateRoute";
import LoginPage from "../components/loginPage/loginPage";
import List from "../components/List/listComponent";
import Home from "../components/Home/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/home" component={List} />
            <PrivateRoute path="/homeuser" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
