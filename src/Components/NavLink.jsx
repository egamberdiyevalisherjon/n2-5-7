import { Component } from "react";
import { Link } from "react-router-dom";

class NavLink extends Component {
  render() {
    return (
      <li>
        <Link to={this.props.link}>
          <span>{">"}</span>
          {this.props.children}
        </Link>
      </li>
    );
  }
}

export default NavLink;
