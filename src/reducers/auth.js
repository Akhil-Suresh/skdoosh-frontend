import {
    AUTH_ERROR,
    LOGIN_FAILURE,
    LOGIN_REFRESH,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS
} from '../constants/actionType';

const INITIAL_STATE = {
    isAuthenticated: null,
    user: null,
    token: null,
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:            
            localStorage.setItem('refresh', action.payload.refresh);
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.access,                
            }
        case LOGIN_REFRESH:
           return {
               ...state,
               isAuthenticated: true,
               token: action.payload.access,               
           } 
        case AUTH_ERROR:
        case LOGIN_FAILURE:
            localStorage.removeItem('refresh')
            debugger;
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
            }
        case LOGOUT_SUCCESS:
            localStorage.removeItem('refresh')
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
            }
        default: 
            return state;
    }
}