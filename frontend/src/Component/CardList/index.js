import React from 'react'
import './style.css'
import money from '../../Images/money.png'
const CardList = () => {
return (
<div className="cardList">
    
    <div className="leftContainer">
  
            <p>Money income</p>
 
        <div id="test">
            <img src={money} alt="money" className="moneyIcon"/>
            <p>$1500</p>
        </div>
    </div>

</div>
)}

export default CardList