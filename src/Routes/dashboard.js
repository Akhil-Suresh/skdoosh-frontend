import React from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';

const DashboardRoute = ({ component: Component, auth, ...rest}) => (
    <Route 
        {...rest}
        render = { props => {
                if (!auth.isAuthenticated) {
                    debugger;
                   return <Redirect to='/login' />;
                } else {
                    return <Component {...props} />
                }   
            }
        }
    />
        
    
)

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(DashboardRoute)
