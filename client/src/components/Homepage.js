import React, { Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <div>
        <section class="hero is-warning is-fullheight ">
          <div class="hero-body">
            <div class="container">
              <p class="title">
                <p>Been There App</p>
                <h2 class="logoFont">John's Been There</h2>
                <p style={{ fontSize: "12pt" }}>
                  Search where you have been and add destinations for others to
                  view.
                </p>
                <div style={{ marginTop: "20px" }}>
                  <Link to="/europe">
                    <button class="button" style={{ marginRight: "15pt" }}>
                      Europe
                    </button>
                  </Link>
                  <Link to="/asia">
                    <button class="button" style={{ marginRight: "15pt" }}>
                      Asia
                    </button>
                  </Link>

                  <Link to="/africa">
                    <button class="button">Africa</button>
                  </Link>
                </div>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Homepage;
