import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from '../src/Pages/Home/index';
import Register from '../src/Pages/Register/index';
import Statistics from  '../src/Pages/Statistics/index';
import Records from '../src/Pages/Records/index';
import SignIn from './Pages/SignIn/index';
import CreateAccount from './Pages/CreateAccount/index';
import DashBoard from './Pages/DashBoard/index';


const token = localStorage.getItem('token')

function App() {
  
  if(token){
  
    return (
    <>
      <Router>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/statistics' component={Statistics} />
          <Route path='/records' component={Records} />
          <Route path='/dashBoard' component={DashBoard} />
          <Redirect to="/home" component={Home}/>
        </Switch>
      </Router>
    </>
  );
  }else if (!token){
      return(
      <Router>
          <Switch>
            <Route path='/signIn' exact component={SignIn} />
            <Route path='/createAccount' component={CreateAccount} />
            <Redirect to="/signIn" component={SignIn}/>
          </Switch>
      </Router>
    )
  }
}

export default App;