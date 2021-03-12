import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/index';
import Register from '../src/Pages/Register/index';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;