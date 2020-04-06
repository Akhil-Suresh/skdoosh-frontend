import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Signup from '../containers/Signup'


const Routes = () => {   


    return (
        <BrowserRouter>
            <div className='container-fluid'>                
                <Route path="/" exact component={Signup} />                
            </div>
        </BrowserRouter>
    )
}


export default Routes