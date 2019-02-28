import React, { Component } from 'react';
import axios from 'axios'
import AddNewEurope from './europe/AddNewEurope';
import EditEurope from './europe/EditEurope'
import Navbar from './Navbar';

class Europe extends Component {
    state = {
        europe: [{}]
    }

    componentDidMount() {
        this.getAllEurope()
    }

    getAllEurope = () => {
        axios.get('/api/europe').then(res => {
            this.setState({ europe: res.data })
        })
    }
    delete = europeId => {
        axios.delete(`/api/europe/${europeId}`).then(() => {
            this.setState({
                europe: this.state.europe.filter(euItem => euItem._id !== europeId)
            });
        });
    };

    update = europeId => {
        axios.patch(`/api/europe/${europeId}`).then(() => {
            console.log('edited')
        });
    };

    render() {
        return (

            <div>
                <Navbar />

                {this.state.europe.map((europeReview, i) =>
                    <div class="container" style= {{width: "500px", marginTop: "50px"}} key={i}>

                        <div class="card container">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src={europeReview.euImage} alt="Placeholder" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-48x48">
                                            <img src={europeReview.euImage} alt="Placeholder 2" />
                                        </figure>
                                    </div>


                                    <div class="content">
                                        <h1>{europeReview.euCountryName}</h1>
                                        <h1>{europeReview.euVisitAgain}</h1>
                                        {europeReview.euDescription} <br /> 
                                        <button class="button is-warning" onClick={() => this.delete(europeReview._id)}>Delete</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                            <EditEurope getAllEurope={this.getAllEurope} europeId={europeReview._id} />
                        </div>

                        )}
    
                      <h1>Add European Country Below</h1>

                        <AddNewEurope getAllEurope={this.getAllEurope} />

                    </div>


                );
                }
            }
            
export default Europe;