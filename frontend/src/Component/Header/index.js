import React from 'react';
import './style.css'

const Header = () => {

return<>
<div className="mainHeader">
    <div>
        <h1 id="title">Budget App</h1>
    </div>
    <div>
        <div className="linksContainer">
            <ul className="headerLinks">
                <li className="link">Register amount</li>
            </ul>
            <ul className="userLinks">
                <li className="link">Sign In</li>
                <li className="link">Sign Up</li>
            </ul>
        </div>
    </div>
</div>
<div className="bannerContainer">
    <div>
    </div>
</div>
</>
}

export default Header