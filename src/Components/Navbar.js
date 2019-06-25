import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light mb-10 fixed-top">
          <a style={{marginLeft: "50px", fontSize: "2em"}} className="navbar-brand" href="/">
            Health Calculator
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
