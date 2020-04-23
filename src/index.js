import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './styles/main.scss';

import App from './components/App'
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';

const initialState = {}
//const history = createHistory();
const store = configureStore(initialState, {})

const node = (
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </Provider>
)

const target = document.getElementById('base')

ReactDOM.render(node, target);