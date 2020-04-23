import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class Signup extends Component {

    renderInput({input, type, placeholder}) {
        
        return (
            <div className="form-group">
                <input {...input} type={type} className="form-control"   placeholder={placeholder}  />
            </div>
        ) 
        
    }

    render () {
        return (
            <div className="tab-pane fade show" id="signup" role="tabpanel" aria-labelledby="profile-tab">
                <h3 className="register-heading">Signup</h3>
                <div className="row register-form">
                    <form className="col-md-12">

                        
                            <Field component={this.renderInput} name="email" type="email"  placeholder="Email *" />
                        
                        
                            <Field component={this.renderInput}  name="password" type="password"  placeholder="Password *" />
                            
                        
                            <Field component={this.renderInput}  name="confirmPassword" type="password"  placeholder="Confirm Password *" />
                        
                        
                            <Field component={this.renderInput}  name="phone" type="text" maxLength="10" minLength="10"  placeholder="Phone *" />
                        
                    </form>

                    <button type="submit" className="btn btn-lg btn-primary btn-block offset-md-6" value="Register">Signup</button>
                </div>
            </div>
        )
    }
}



export default reduxForm({
    form: "SignupForm"
})(Signup)