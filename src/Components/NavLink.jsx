import { Component } from "react";

class NavLink extends Component {
  render() {
    return (
      <li>
        <a href={this.props.link}>
          <span>{">"}</span>
          {this.props.children}
        </a>
      </li>
    );
  }
}

export default NavLink;
