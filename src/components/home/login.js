import { Field, reduxForm } from 'redux-form'
import { login, refresh } from '../../action/authAction'

import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Login extends React.Component {

    getInputClass({touched, error}) {
        
        const className = "form-control"
        if(touched && error){
            return className + " is-invalid"
        } else if(touched) {
            return className + " is-valid "
        }
        return className
    }

    renderInput = ({ input, type, placeholder, meta: {touched, error} }) => {        
        const inputClassName = `form-control ${error && touched? 'is-invalid': touched? 'is-valid': ''}`;

        return (
             
            <div className="form-group">
                <input {...input} type={type} className={inputClassName} placeholder={placeholder} autoComplete="off"/>
                <div className="invalid-feedback">
                    { (error)? error: "" }
                </div>
                
            </div>
        ) 
        
    }

    submitLogin = values => {
        this.props.login(values)
    }

    checkAuthenticationStatus = () => {
        if (this.props.isAuthenticated) {            
            return true
        } else if (refresh){          
            this.props.refresh(refresh)
        }
        return false
    }

    render() {       
        if(this.props.isAuthenticated) {
            return <Redirect to='/dashboard' />;
        } 
        
        const {handleSubmit} = this.props
        return (
            <div className="login">
                
                <div className="login-container" aria-labelledby="home-tab">
                    <h3 className="login-heading">Login</h3>
                    
                    <form className="row login-form" onSubmit={handleSubmit(this.submitLogin)}>
                        <div className="col-md-12">                                                            
                                <Field name="email" type="email" placeholder="Your Email *" component={this.renderInput}/> 
                                <Field name="password" type="password" placeholder="Password *" component={this.renderInput}/>                            
                        </div>
                        <div className="btn-login col-md-12">
                            <button className="btn login-form-btn">Login</button>
                        </div>
                    </form>
                    
                </div>
            </div>            
        )
    }
}

const validate = (values) => {
    const errors = {}
    if(!values.email) {
        errors.email = 'Email is needed'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if(!values.password){
        errors.password = "Password is needed"
    }
    return errors
    
}

const formWrappedRedux = reduxForm({
    form: "loginForm",
    validate
})(Login)


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login, refresh})(formWrappedRedux);