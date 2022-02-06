import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { signup } from '../../actions/authActions';

import Navbar_ALogin from '../Navbar/Navbar.ALogin'

const initialState = { name: '', email: '', password: '', password2: '' };

const SignUp = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(signup(formData, history));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
        <>
            <Navbar_ALogin />
            <div className="container">
                <div className="row">
                <div className="col s8 offset-s2">
                    <Link to="/" className="btn-flat waves-effect">
                    <i className="material-icons left">keyboard_backspace</i> Back to
                    home
                    </Link>
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <h4>
                        <b>Register</b> below
                    </h4>
                    <p className="grey-text text-darken-1">
                        Already have an account? <Link to="/signin" style={{color: '#438d80'}}>Log in</Link>
                    </p>
                    </div>
                    <form noValidate onSubmit={handleSubmit}>
                    <div className="input-field col s12">
                        <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        />
                        <label htmlFor="name">Name</label>
                        <span className="red-text"></span>
                    </div>
                    <div className="input-field col s12">
                        <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        />
                        <label htmlFor="email">Email</label>
                        <span className="red-text"></span>
                    </div>
                    <div className="input-field col s12">
                        <input
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange}
                        handleShowPassword={handleShowPassword}
                        />
                        <label htmlFor="password">Password</label>
                        <span className="red-text"></span>
                    </div>
                    <div className="input-field col s12">
                        <input
                        name="password2"
                        type="password"
                        value={formData.password2}
                        onChange={handleChange}
                        />
                        <label htmlFor="password2">Confirm Password</label>
                        <span className="red-text"></span>
                    </div>
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
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
                        Sign up
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </>
  );
};

export default SignUp;