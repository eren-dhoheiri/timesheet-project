import React, { Component } from "react";
import { Link } from "react-router-dom";

export class header extends Component {
  state = {
    navCollapsed: true,
  };

  _onToggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed });
  };

  render() {
    const { navCollapsed } = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/home" className="navbar-brand">
          Timesheet Celerates
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this._onToggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={(navCollapsed ? "collapse" : "") + " navbar-collapse"}>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link">
                Menu
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default header;