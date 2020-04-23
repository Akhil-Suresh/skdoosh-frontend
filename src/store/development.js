import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';


import reducer from '../reducers';

const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const configureStore = (initialState, history) => {
    // Add so dispatched route actions to the history
    // const reduxRouterMiddleware = routerMiddleware(history);

    const middleware = applyMiddleware(thunk);
    const composeEnhancers = composeEnhancer(middleware); 

    return createStore(reducer, initialState, composeEnhancers);
}

export default configureStore