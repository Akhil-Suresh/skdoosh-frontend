import React from 'react'
import './signup.css'


class Signup extends React.Component {

    /*TODO: Convert below code into corresponding components*/

    signInSignupTab() {
        return (
            <div className="row col-md-12">
                <ul className="nav nav-tabs nav-justified offset-md-8" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#login" role="tab" aria-controls="home" aria-selected="true">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#signup" role="tab" aria-controls="profile" aria-selected="false">Signup</a>
                    </li>
                </ul>
            </div>
        )
    }

    loginComponent() {
        return (
            <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="home-tab">
                <h3 className="register-heading">Login</h3>
                <div className="row register-form">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password *" value="" />
                        </div>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block">Login</button>
                </div>
            </div>
        )
    }

    signUpComponent() {
        return (
            <div className="tab-pane fade show" id="signup" role="tabpanel" aria-labelledby="profile-tab">
                <h3 className="register-heading">Signup</h3>
                <div className="row register-form">
                    <div className="col-md-12">

                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Confirm Password *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" maxLength="10" minLength="10" className="form-control" placeholder="Phone *" value="" />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-lg btn-primary btn-block offset-md-6" value="Register">Signup</button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="register">
                <div className="row">
                    <div className="col-md-4 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                        <h3>Welcome</h3>
                        <p>A place to organize your tasks efficiently!</p>
                    </div>
                    <div className="col-md-8">
                        <div className="col-md-6 register-right offset-md-6">

                            {this.signInSignupTab()}

                            <div className="tab-content" id="myTabContent">
                                {this.loginComponent()}

                                {this.signUpComponent()}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default Signup

