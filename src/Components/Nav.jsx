import { Component } from "react";
import NavLink from "./NavLink";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <NavLink link="/about.html">About</NavLink>
          <NavLink link="/contact.html">Contact</NavLink>
          <NavLink link="/login.html">Log in</NavLink>
        </ul>
      </nav>
    );
  }
}

export default Nav;
