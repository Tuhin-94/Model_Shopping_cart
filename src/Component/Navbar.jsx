import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav class="Nav">
        <a>My Re-active App - </a> <span>{this.props.counterNo} </span>
      </nav>
    );
  }
}

export default Navbar;
