import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import app from './reducers'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(app)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
