import React from 'react';
import './style.css'
import NavBar from '../../Component/NavBar/index'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const Header = () => {
return (
        <>
        <Router>
            <NavBar/>
                <Switch>
                <Route path='/' />
            </Switch>
        </Router>
        </>
    )
}

export default Header