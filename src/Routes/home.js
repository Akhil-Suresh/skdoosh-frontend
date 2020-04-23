import React from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { refresh } from '../action/authAction'

const HomeRoute = ({ component: Component, auth, refresh, ...rest}) => (
    <Route
        {...rest}
        render = { props => {            
            if(auth.isAuthenticated) {                
                return <Redirect to='/dashboard' />;
            } else {                
                const refreshToken = localStorage.getItem('refresh')
                console.log('refresh TOken', refreshToken)
                if (refreshToken){
                    refresh(refreshToken)
                    return <div> Loading... </div>
                }
                return <Component {...props} />;                
            }
        }}
    />    
)

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {refresh})(HomeRoute) 
