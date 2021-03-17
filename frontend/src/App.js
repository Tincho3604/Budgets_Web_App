import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/index';
import Register from '../src/Pages/Register/index';
import Statistics from  '../src/Pages/Statistics/index';
import Records from '../src/Pages/Records/index';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/statistics' component={Statistics} />
          <Route path='/records' component={Records} />
        </Switch>
      </Router>
    </>
  );
}

export default App;