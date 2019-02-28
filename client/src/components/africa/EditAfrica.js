import React, { Component } from "react";
import axios from "axios";

class EditAfrica extends Component {
  state = {
    africa: {
      afCountryName: "",
      afDescription: "",
      afVisitAgain: "",
      afImage: ""
    }
  };

  handleChange = event => {
    const newState = { ...this.state.africa };
    newState[event.target.name] = event.target.value;
    this.setState({ africa: newState });
  };

  handleSubmit = event => {
    event.preventDefault();
    const payload = this.state.africa;
    const africaId = this.props.africaId;
    console.log(africaId);
    axios.patch(`/api/africa/${africaId}`, payload).then(res => {
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

export default EditAfrica;