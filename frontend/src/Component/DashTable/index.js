import React,{useState, useEffect} from 'react'
import Axios from 'axios';
import {ROUTE_API, totalEgressIngress} from '../../Constants/index';
import swal from 'sweetalert';
import './style.css';

const DashTable = () => {

const [table, showTable] = useState(false)
const [users, setUsers] = useState()
const [totalUserIngress, setTotalUserIngress] = useState()
const [totalUserEgress, setTotalUserEgress] = useState()
const [operations, setOperations] = useState()

useEffect(() => {
    Axios.get(`${ROUTE_API}/getAllUsers`).then((response) => {
        console.log(response.data)
        setUsers(response.data)
    })
}, []);


const viewInfoUser = (email) => {
    showTable(!table)
    Axios.get(`${ROUTE_API}/getAllRegisters/${email}`).then((response) => {
        setOperations(response.data)
        setTotalUserIngress(totalEgressIngress(response.data, "Ingress"))
        setTotalUserEgress(totalEgressIngress(response.data, "Egress"))
    })
    
}

const deleteUser = (id) => {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this user user!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
    Axios.delete(`${ROUTE_API}/deleteUser/${id}`).then((response) => {
        setUsers(users?.filter((value) => {
            return value.idusers !== id;
    }))
        console.log('Response',response)
    })
        
        swal("Your user has been deleted!", {
            icon: "success",
        });
        } else {
            swal("Your user was not deleted");
        } 
    });
}


return (
<>
<div className="infoDashTable">
    <h2>Dash Table information</h2>
    <p>In the following table you will be able to view each user registered in the app and the information of each registration that they make.</p>
</div>
<div className="dashTablesContainer">
        <table id="userTable" className="customers">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Delete User</th>
                    <th>Show user Info</th>
                </tr>
            </thead>
            <tbody>
                {users?.filter(users => users.email !== "admin@root.com" ).map((user,index) => {
                    return (
                    <>
                <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td><button id="deleteInfo" className="operationButton" onClick={() => deleteUser(user.idusers)}>Delete</button></td>
                    <td><button id="seeInfo" className="operationButton" onClick={() => viewInfoUser(user.email)}>See Info</button></td>
                </tr>
                </>
                )})}
            </tbody>
        </table>
    <div style={{display: table ? 'block' : 'none'}}>
    <table id="infoTable" className="customers">
        <thead>
            <tr>
                <th>Money Egress</th>
                <th>Money Income</th>
                <th>Number of operations</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style={{color:'red'}}>{totalUserEgress}</td>
                <td style={{color:'green'}}>{totalUserIngress}</td>
                <td>{operations?.length}</td>
            </tr>
        </tbody>
    </table>
    </div>
</div>
</>
    )
}

export default DashTable