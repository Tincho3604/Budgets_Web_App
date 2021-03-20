import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk' ;
import rootReducer from './Redux/reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import {PersistGate} from 'redux-persist/es/integration/react'

const myStore = createStore(
  rootReducer, 
  composeWithDevTools(
  applyMiddleware(thunk)
    )
  )
  const persistor = persistStore(myStore);

ReactDOM.render(
<Provider store={myStore}>
    <React.StrictMode>
      <PersistGate persistor={persistor}>
        <App/>
      </PersistGate>
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);


