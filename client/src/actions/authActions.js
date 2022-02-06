import { AUTH, SET_CURRENT_USER, USER_LOADING } from '../constants/actionTypes';
import * as api from '../api/index';

// Sign In
export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/dashboard');
    window.location = ('/dashboard');
  } catch (error) {
    console.log(error);
  }
};

// Sign Up
export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/dashboard');
  } catch (error) {
    console.log(error);
  }
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};