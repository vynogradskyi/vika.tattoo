import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div id="mainHeader">
        <ul>
          <li>
            <NavLink activeClassName="active-link" exact={true} to="/">Me</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-link" to="/works">Works</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-link" to="/sketches">Sketches</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
export default Header;
