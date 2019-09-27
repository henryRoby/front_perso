import React, { Component } from 'react';
import axios from 'axios';
//import { confirmAlert } from 'react-confirm-alert';
//import 'react-confirm-alert/src/react-confirm-alert.css';
//import { Link } from 'react-router-dom';
import Header from '../menu'

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
        return <div>
           <Header/>
        <div >
            
            <div className="container-fluid">

                <div className="row view-group">
                {
                    (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {

                        return <div key={obj._id} className="item col-xs-3 col-lg-3" id="suivi">
                            <center >
                                <img width="290px" height="220px" src={'http://localhost:8080/api/users/newPhotoImage/' + obj.image} alt="pdp" />    
                            </center>
                        </div>

                    })) : ('')
                }
                </div>
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


