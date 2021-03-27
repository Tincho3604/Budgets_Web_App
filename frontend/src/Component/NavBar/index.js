import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { SidebarData, ROUTE_API } from '../../Constants/index';
import './style.css';
import { IconContext } from 'react-icons';
import Axios from 'axios';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [navItems, showNavItems] = useState(SidebarData)
  
  useEffect(() => {
    Axios.post(`${ROUTE_API}/bringUser`, {
      email: localStorage.getItem('email')
    }).then((response) => {
      setCurrentUser(response.data[0].username)
      if(response.data[0].username !== 'admin'){
        showNavItems(navItems.filter(item => item.title !== 'Dash Board'))
      }else{
        showNavItems(SidebarData)
      }
    })
  }, []);
    

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
            <div id="title" className="titleNavContainer">
              <Link to='/' className='menu-bars'>
                <h1>BUDGET APP</h1>
              </Link>
              <div className="userNav">
                <h2>{`${currentUser}`}</h2>
                <FcIcons.FcOk size={30}/>
              </div>
            </div>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
  
            {navItems?.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} onClick={item.func ? () => item.func() : ''}>
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;