import React, { Component } from 'react';
import axios from "axios"

class AddNewAfrica extends Component {

    state ={
        africa:[{}]
    }

    
    handleChange = event => {
        const newState = { ...this.state.africa };
        newState[event.target.name] = event.target.value;
        this.setState({ africa: newState });
      };
    
      handleSubmit = event => {
        event.preventDefault();
        const newAfrica = this.state.africa;
       
        
        axios.post("/api/africa", newAfrica).then(res => {
          this.props.getAllAfrica();
          
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
                name="afCountryName"
                value={this.state.africa.afCountryName}
                onChange={this.handleChange}
          />
                <input
                class="input inputForm"
                type="text"
                placeholder="Description"
                name="afDescription"
                value={this.state.africa.afDescription}
                onChange={this.handleChange}
          />
                <input
                class="input inputForm"
                type="text"
                placeholder="Would You Visit Again?"
                name="afVisitAgain"
                value={this.state.africa.afVisitAgain}
                onChange={this.handleChange}
          />
                <input
                class="input inputForm"
                type="text"
                placeholder="Insert Image"
                name="afImage"
                value={this.state.africa.afImage}
                onChange={this.handleChange}
          />
          <button class="button is-warning">Submit</button>
          </form>
            </div>
        );
    }
}

export default AddNewAfrica;