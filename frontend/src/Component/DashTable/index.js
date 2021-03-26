import React from 'react'
import './style.css';

const DashTable = () => {
return (
<>
<div className="infoDashTable">
    <h2>Dash Table information</h2>
    <p>In the following table you will be able to view each user registered in the app and the information of each registration that they make.</p>
</div>
<div className="dashTablesContainer">
    <table id="userTable" className="customers">
        <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Delete User</th>
            <th>Show user Info</th>
        </tr>
        <tr>
            <td>maria cardozo    </td>
            <td>maria@root.com    </td>
            <td><button id="deleteInfo" className="operationButton">Delete</button></td>
            <td><button id="seeInfo" className="operationButton">See Info</button></td>
        </tr>

    </table>
    <table id="infoTable" className="customers">
        <tr>
            <th>Money Egress</th>
            <th>Money Income</th>
            <th>Number of operations</th>
        </tr>
        <tr>
            <td>5000</td>
            <td>1000</td>
            <td>52</td>
        </tr>
    </table>
</div>

</>
    )
}

export default DashTable