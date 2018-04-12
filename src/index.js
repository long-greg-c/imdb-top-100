import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import 'semantic-ui-css/semantic.min.css';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(
  createStore
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
