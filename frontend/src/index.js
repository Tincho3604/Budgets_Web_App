import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk' 
import rootReducer from './Redux/reducers/rootReducer'

const myStore = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={myStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);


