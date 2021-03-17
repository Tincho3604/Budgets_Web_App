import React,{useState} from 'react';
import './style.css';
import {Ingress, IngressIconColor, EgressIconColor, formatDate, deleteButtonText, editButtonText, alertsForm} from '../../Constants/index';
import * as MdIcons from "react-icons/md";
import Axios from 'axios';
import {ROUTE_API} from '../../Constants/index';
import Swal from 'sweetalert2'
import deletedIcon from '../../Images/delete-icon.jpg'
const GlobalTable = ({
    recordsList
}) => {

    const [id, setId] = useState()

    const deleteRecord = (id) => {
        //Axios.delete(`${ROUTE_API}/deleteRecord/${id}`)
        alertsForm("Delete Record", 
        "Record delete Succesfully", 
        'Continue', 
        deletedIcon
        )
    
    }
    
    return (
        <div className="MainGlobalTable" style={{'overflowX':'auto'}}>
            <table className="styledTable">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Concept</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
        {recordsList?.map((item,index) => {
            return (
                    <tr key={index}>
                        <td>{formatDate(item.date)}</td>
                        <td>{item.type === Ingress ? <MdIcons.MdAttachMoney color={IngressIconColor}/> : <MdIcons.MdMoneyOff color={EgressIconColor}/>}</td>
                        <td style={item.type === Ingress ?{color:IngressIconColor} : {color:EgressIconColor}}>{item.amount}</td>
                        <td>{item.concept}</td>
                        <td><button className="deleteButton" onClick={() => deleteRecord(item.id)}>{deleteButtonText}</button></td>
                        <td><button className="editButton">{editButtonText}</button></td>
                    </tr>
            )
        })}
            </tbody>
            </table>
        </div>
    
    )
}

export default GlobalTable
