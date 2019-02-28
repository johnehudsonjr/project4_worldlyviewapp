import React, { Component } from 'react';
import axios from "axios"

class AddNewAsia extends Component {

    state ={
        asia:[{}]
    }

    
    handleChange = event => {
        const newState = { ...this.state.asia };
        newState[event.target.name] = event.target.value;
        this.setState({ asia: newState });
      };
    
      handleSubmit = event => {
        event.preventDefault();
        const newAsia = this.state.asia;
       
        
        axios.post("/api/asia", newAsia).then(res => {
          this.props.getAllAsia();
          
        });
      };
    
    render() {
        return (
            <div class="container" style={{width: "400px"}}>
                <form onSubmit={this.handleSubmit}>
                <input
                class="input inputForm"
                type="text"
                placeholder="Country Name"
                name="asCountryName"
                value={this.state.asia.asCountryName}
                onChange={this.handleChange}
          />
                <input
                class="input inputForm"
                type="text"
                placeholder="Description"
                name="asDescription"
                value={this.state.asia.asDescription}
                onChange={this.handleChange}
          />
                <input
                class="input inputForm"
                type="text"
                placeholder="Would You Visit Again?"
                name="asVisitAgain"
                value={this.state.asia.asVisitAgain}
                onChange={this.handleChange}
          />
                <input
                class="input inputForm"
                type="text"
                placeholder="Insert Image"
                name="asImage"
                value={this.state.asia.asImage}
                onChange={this.handleChange}
          />
          <button class="button is-warning">Submit</button>
          </form>
            </div>
        );
    }
}

export default AddNewAsia;