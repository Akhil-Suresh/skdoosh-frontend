import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../components/dashboard'
import DashboardRoute from './dashboard'
import Home  from '../components/home'
import HomeRoute from './home'
import PrivateRoute from './common';
import React from 'react'

const Routes = () => {
    debugger;
    return (
        <BrowserRouter>
            <PrivateRoute exact path='/' />
            <HomeRoute exact path='/login' component={Home}/>            
            <DashboardRoute exact path='/dashboard' component={Dashboard} />
        </BrowserRouter>
    )
}


export default Routes