import { Component } from "react";
import NavLink from "./NavLink";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <NavLink link="/about">About</NavLink>
          <NavLink link="/contact">Contact</NavLink>
          <NavLink link="/login">Log in</NavLink>
        </ul>
      </nav>
    );  
  }
}

export default Nav;
