import '../../styles/component/dashboard.scss';

import React from 'react'
import { connect } from 'react-redux';
import Navbar from './navbar';




class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
            
                <div className="jumbotron">
                    <h1 className="display-4">GoodDay Akhil!</h1>
                    <p className="lead">How you spend time today?</p>
                    <hr className="my-4" />
                    <input className="form-control form-control-lg" type="text" placeholder="What do you achieved today?"></input>
                    <button className='btn btn-success'> Submit </button>
                </div>
            </div> 
        )
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(Dashboard)