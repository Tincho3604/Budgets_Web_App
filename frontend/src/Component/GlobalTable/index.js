import React from 'react';
import './style.css';
import DeleteButton from '../DeleteButton/index';
import EditButton from '../EditButton';
import {Ingress, IngressIconColor, EgressIconColor} from '../../Constants/index';
import * as MdIcons from "react-icons/md";

const GlobalTable = () => {

    const obj = [
                {amount: "5000", concept: "Cuotas alimentaria", date: "2021-01-10",type: "Ingress"},
                {amount: "5000", concept: "Pago de luz", date: "2021-01-10",type: "Egress"}
            ]
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
        {obj?.map((item,index) => {
            return (
                    <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.type === Ingress ? <MdIcons.MdAttachMoney color={IngressIconColor}/> : <MdIcons.MdMoneyOff color={EgressIconColor}/>}</td>
                        <td style={item.type === Ingress ?{color:IngressIconColor} : {color:EgressIconColor}}>{item.amount}</td>
                        <td>{item.concept}</td>
                        <td><DeleteButton/></td>
                        <td><EditButton/></td>
                    </tr>
            )
        })}
            </tbody>
            </table>
        </div>
    
    )
}

export default GlobalTable


