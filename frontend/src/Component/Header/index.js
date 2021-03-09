import React from 'react';
import styles from './style.css'

const Header = () => {
return<>
<div class="mainHeader">
    <div>
        <h1>Budget App</h1>
    </div>
    <div>
        <div class="linksContainer">
            <ul class="headerLinks">
                <li class="link">Register amount</li>
            </ul>
            <ul class="userLinks">
                <li class="link" >Sign In</li>
                <li class="link" >Sign Up</li>
            </ul>
        </div>
    </div>
</div>
</>
}

export default Header