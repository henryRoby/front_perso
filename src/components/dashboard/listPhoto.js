import React, { Component } from 'react';
import axios from 'axios';
//import { confirmAlert } from 'react-confirm-alert';
//import 'react-confirm-alert/src/react-confirm-alert.css';

import { Link } from 'react-router-dom';

export default class PropAtelier extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    

    componentDidMount() {
        axios.get(`https://perso-back.herokuapp.com/api/users/newPhoto`)
            .then(response => {
                console.log('user-article ==== ', response.data)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    liste() {
        return <div >
        
        <div className="container-fluid" >
            
            <div className="row view-group">
                {
                    (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {

                        return <div key={obj._id} className="item col-xs-4 col-lg-4 card" id="suivie">
        

                            <center >
                                <img width="200px" height="140px" src={'https://perso-back.herokuapp.com/api/users/newPhotoImage/' + obj.image} alt="pdp" />  
                            </center>
                            
                            <p>
                
                                <button  class="btn btn-danger" onClick={(e)=>{
                                   // e.preventefault()
                                    axios.delete("https://perso-back.herokuapp.com/api/users/delete/"+ obj._id)
                                    .then(
                                        console.log("suppression photo avec succes"),
                                        console.log(obj._id)
                                        )
                                    .catch(error => console.log(error))
                                }}>supprimer</button>
                            </p>

                        </div>

                    })) : ('')
                }
            </div>
        </div>
       </div>
    }
    render() {
        return (
            <div className='app'>
                {this.liste()}
            </div>
        );
    }
}