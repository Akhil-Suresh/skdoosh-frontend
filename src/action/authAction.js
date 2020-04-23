import {
  LOGIN_FAILURE,
  LOGIN_REFRESH,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../constants/actionType'
import { OBTAIN_TOKEN, REFRESH_TOKEN } from '../apis/urls'

import apiBase from '../apis/apiBase';
import { stopSubmit } from 'redux-form';

export const login = formValues => {
    return  async dispatch => {
        try {
            const response = await apiBase.post(OBTAIN_TOKEN, formValues)
            console.log(response.data)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            })
        } catch (err) {
            debugger;
            dispatch({
                type: LOGIN_FAILURE,
            });
            debugger;
            dispatch(stopSubmit('loginForm', err.response.data));
        }
    }
}

export const refresh = refresh => {
  return async dispatch => {
    debugger;
    try {
      const response = await apiBase.post(REFRESH_TOKEN, { refresh })
      console.log(response.data)
      dispatch({
          type: LOGIN_REFRESH,
          payload: response.data
      })
    } catch (err) {
      dispatch({
        type: LOGIN_FAILURE,
      })
    }
  }
}


// Helper function
export const tokenConfig = getState => {
    // Get token
    const token = getState().auth.token;

    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
};


export const logout = (state) => {
  return {
    type: LOGOUT_SUCCESS
  }
}