import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import { signin } from '../../actions/authActions';
import { AUTH } from '../../constants/actionTypes';

import NavbarALogin from '../Navbar/Navbar.ALogin'
import Icon from "./Icon"

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(formData, history));
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });
      
      history.push('/dashboard');
      window.location = ('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => alert('Google Sign In was unsuccessful! Please try again later');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <NavbarALogin />
          <div className="container">
                <div style={{ marginTop: "4rem" }} className="row">
                <div className="col s8 offset-s2">
                    <Link to="/" className="btn-flat waves-effect">
                    <i className="material-icons left">keyboard_backspace</i> Back to
                    home
                    </Link>
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <h4>
                        <b>Login</b> below
                    </h4>
                    <p className="grey-text text-darken-1">
                        Don't have an account? <Link to="/signup" style={{color: '#438d80'}}>Register</Link>
                    </p>
                    </div>
                    <form noValidate onSubmit={handleSubmit}>
                    <div className="input-field col s12">
                        <input
                        error
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                        type="email"
                        />
                        <label htmlFor="email">Email</label>
                        <span className="red-text">
                        </span>
                    </div>
                    <div className="input-field col s12">
                        <input
                        onChange={handleChange}
                        handleShowPassword={handleShowPassword}
                        name="password"
                        value={formData.password}
                        type={showPassword ? 'text' : 'password'}
                        />
                        <label htmlFor="password">Password</label>
                        <span className="red-text">
                        </span>
                    </div>
                    <div className="col s12" style={{ paddingLeft: "11.250px", display: "flex", justifyContent: "space-between" }}>
                        <button
                        style={{
                            width: "100%",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                        }}
                        type="submit"
                        className="btn btn-large waves-effect waves-light hoverable #438d80 accent-3"
                        >
                          Sign In
                        </button>
                        </div>
                        <div className="col s12" style={{ paddingLeft: "11.250px", display: "flex", justifyContent: "space-between" }}>
                        <GoogleLogin
                          clientId="447473233277-gfa5mapacbrcvmjooq20hd4ct02t6rrv.apps.googleusercontent.com"
                          render={(renderProps) => (
                            <button 
                              style={{
                                width: "100%",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                
                              }}
                              className="btn btn-large waves-effect waves-light hoverable #438d80 accent-3"
                              onClick={renderProps.onClick} 
                              disabled={renderProps.disabled}
                              >
                              <Icon />
                              { window.innerWidth < 768 ? 'Google' : 'Google Sign In' }
                            </button>
                          )}
                          onSuccess={googleSuccess}
                          onFailure={googleError}
                          cookiePolicy="single_host_origin"
                        />
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </>
  );
};

export default SignIn;