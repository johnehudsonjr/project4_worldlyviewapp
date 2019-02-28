import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Homepage extends Component {
    render() {
        return (
            <div>
                <section class="hero is-link is-fullheight ">
  <div class="hero-body">
    <div class="container">
      <p class="title">
      <p>My Country Review App</p>
      <h1 class="logoFont">CountryReviewApp</h1>
      <p style={{fontSize: "12pt"}}>Search and view my country reviews!</p>
      <div style={{marginTop: "20px"}}> 

      <Link to="/europe">
                    <button class="button" style={{marginRight: "15pt"}}>Europe</button>
        </Link>
        <Link to="/asia">
                    <button class="button" style={{marginRight: "15pt"}}>Asia</button>
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