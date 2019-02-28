import React, { Component } from 'react';
import axios from 'axios'
import AddNewAfrica from './africa/AddNewAfrica';
import EditAfrica from './africa/EditAfrica'
import Navbar from './Navbar';

class Africa extends Component {
    state = {
        africa: [{}]
    }

    componentDidMount() {
        this.getAllAfrica()
    }

    getAllAfrica = () => {
        axios.get('/api/africa').then(res => {
            this.setState({ africa: res.data })
        })
    }
    delete = africaId => {
        axios.delete(`/api/africa/${africaId}`).then(() => {
            this.setState({
                africa: this.state.africa.filter(afItem => afItem._id !== africaId)
            });
        });
    };

    update = africaId => {
        axios.patch(`/api/africa/${africaId}`).then(() => {
            console.log('edited')
        });
    };

    render() {
        return (

            <div>
                <Navbar />

                {this.state.africa.map((africaReview, i) =>
                    <div class="container" style= {{width: "500px", marginTop: "50px"}} key={i}>

                        <div class="card container">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src={africaReview.afImage} alt="Placeholder" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-48x48">
                                            <img src={africaReview.afImage} alt="Placeholder 2" />
                                        </figure>
                                    </div>


                                    <div class="content">
                                        <h1>{africaReview.afCountryName}</h1>
                                        <h1>{africaReview.afVisitAgain}</h1>
                                        {africaReview.afDescription} <br /> 
                                        <button class="button is-warning" onClick={() => this.delete(africaReview._id)}>Delete</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                            <EditAfrica getAllAfrica={this.getAllAfrica} africaId={africaReview._id} />
                        </div>

                        )}
    
                      <h1>Add African Country Below</h1>

                        <AddNewAfrica getAllAfrica={this.getAllAfrica} />

                    </div>


                );
                }
            }
            
export default Africa;