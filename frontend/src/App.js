import React from 'react';
import './App.css';
import Navbar from './Component/NavBar/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/index';
// import Form from './Component/Form/index';
// import Statistics from './Component/Statistics/index';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;