import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';


import reducer from '../reducers';

const configureStore = (initialState, history) => {
    // Add so dispatched route actions to the history
    // const reduxRouterMiddleware = routerMiddleware(history);

    const middleware = applyMiddleware(thunk);

    return createStore(reducer, initialState, middleware);
}

export default configureStore