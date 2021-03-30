import React,{useState, useEffect} from 'react'
import Axios from 'axios';
import {ROUTE_API} from '../../Constants/index';
import swal from 'sweetalert';
import './style.css';

const DashTable = () => {


const [users, setUsers] = useState()

useEffect(() => {
    Axios.get(`${ROUTE_API}/getAllUsers`).then((response) => {
        setUsers(response.data)
    })

}, []);


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
<div className="tableContainer">
    <table className="content-table">
        <thead>
            <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Delete User</th>
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
                        </tr>
                    </>
                )})}
        </tbody>
    </table>
</div>
    )
}

export default DashTable