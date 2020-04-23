import '../../styles/component/home.scss';

import React, { Component } from 'react';

import Login from './login';

class Home extends Component {

    render() {
        
        return (
            <div className="home">                
                    <Login />                
            </div>
        )
    }
}


export default Home
