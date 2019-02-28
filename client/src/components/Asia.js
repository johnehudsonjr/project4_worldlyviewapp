import React, { Component } from 'react';
import axios from 'axios'
import AddNewAsia from './asia/AddNewAsia';
import EditAsia from './asia/EditAsia'
import Navbar from './Navbar';

class Asia extends Component {
    state = {
        asia: [{}]
    }

    componentDidMount() {
        this.getAllAsia()
    }

    getAllAsia = () => {
        axios.get('/api/asia').then(res => {
            this.setState({ asia: res.data })
        })
    }
    delete = asiaId => {
        axios.delete(`/api/asia/${asiaId}`).then(() => {
            this.setState({
                asia: this.state.asia.filter(asItem => asItem._id !== asiaId)
            });
        });
    };

    update = asiaId => {
        axios.patch(`/api/asia/${asiaId}`).then(() => {
            console.log('edited')
        });
    };

    render() {
        return (

            <div>
                <Navbar />

                {this.state.asia.map((asiaReview, i) =>
                    <div class="container" style= {{width: "500px", marginTop: "50px"}} key={i}>

                        <div class="card container">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src={asiaReview.asImage} alt="Placeholder" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-48x48">
                                            <img src={asiaReview.asImage} alt="Placeholder 2" />
                                        </figure>
                                    </div>


                                    <div class="content">
                                        <h1>{asiaReview.asCountryName}</h1>
                                        <h1>{asiaReview.asVisitAgain}</h1>
                                        {asiaReview.asDescription} <br /> 
                                        <button class="button is-warning" onClick={() => this.delete(asiaReview._id)}>Delete</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                            <EditAsia getAllAsia={this.getAllAsia} asiaId={asiaReview._id} />
                        </div>

                        )}
    
                      <h1>Add Asian Country Below</h1>

                        <AddNewAsia getAllAsia={this.getAllAsia} />

                    </div>


                );
                }
            }
            
export default Asia;