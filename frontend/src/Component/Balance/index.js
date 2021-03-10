import React, {useState} from 'react'
import './style.css'

const Balance = () => {
    const [list, showList] = useState(false);

    const toggleList = () => {
        showList(!list)
    }

return ( 
    <>
    <div className="mainBalanceContainer">
        
        <div className="balanceTitle">
            <h1>Current balance</h1>
        </div>

        <div className="infoContainer">
            
            <div className="incomeContainer">
                <h2>Current income</h2>
                <p>10000000$</p>
            </div>
            
            <div className="egressContainer">
                <h2>Current Egress</h2>
                <p>10000000$</p>
            </div>
        
        </div>
    </div>
        
    <div className="listContainer" style={{display: !list ? 'none' : 'block'}}>
                <p>Contenido</p>
        </div>
        <button className="buttonSeeMore" onClick={toggleList}>Show List</button>
    </>
)}

export default Balance