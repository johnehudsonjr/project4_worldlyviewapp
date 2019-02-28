import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          class="navbar is-info"
          role="navigation"
          aria-label="main navigation"
        >
          <div class="navbar-brand">
            <h1 class="navbarFont"> Country Review</h1>
            <button
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <Link to="/" className="navbar-item navLinks">
                Home
              </Link>
              <Link to="/europe" className="navbar-item navLinks">
                Europe
              </Link>
              <Link to="/asia" className="navbar-item navLinks">
                Asia
              </Link>
              <Link to="/africa" className="navbar-item navLinks">
                Africa
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
