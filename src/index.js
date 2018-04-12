import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import LoadingView from './components/LoadingView';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);
const middleware = applyMiddleware(ReduxThunk, ReduxPromise);
const store = createStore(persistedReducer, middleware);
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<LoadingView />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
