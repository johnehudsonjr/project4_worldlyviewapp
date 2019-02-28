import React, { Component } from 'react';
import axios from "axios"

class AddNewEurope extends Component {

    state ={
        europe:[{}]
    }

    
    handleChange = event => {
        const newState = { ...this.state.europe };
        newState[event.target.name] = event.target.value;
        this.setState({ europe: newState });
      };
    
      handleSubmit = event => {
        event.preventDefault();
        const newEurope = this.state.europe;
       
        
        axios.post("/api/europe", newEurope).then(res => {
          this.props.getAllEurope();
          
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
                name="euCountryName"
                value={this.state.europe.euCountryName}
                onChange={this.handleChange}
          />
                <input
                class="input inputForm"
                type="text"
                placeholder="Description"
                name="euDescription"
                value={this.state.europe.euDescription}
                onChange={this.handleChange}
          />
                <input
                class="input inputForm"
                type="text"
                placeholder="Would You Visit Again?"
                name="euVisitAgain"
                value={this.state.europe.euVisitAgain}
                onChange={this.handleChange}
          />
                <input
                class="input inputForm"
                type="text"
                placeholder="Insert Image"
                name="euImage"
                value={this.state.europe.euImage}
                onChange={this.handleChange}
          />
          <button class="button is-warning">Submit</button>
          </form>
            </div>
        );
    }
}

export default AddNewEurope;