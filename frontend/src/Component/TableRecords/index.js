import React, {useState,useEffect} from 'react'
import './style.css'
import {Ingress, showHalf, hideHalf, formatDate} from '../../Constants/index'
import * as MdIcons from "react-icons/md";

const TableRecords = ({listRecords, textColumn, title}) => { 
return ( 
<div className="main-container-table">
    <h1>{title}</h1>
    <div className="table-wrapper">
    
    <table className="fl-table">
    <thead className="currentBalance">
            <tr>
                {textColumn?.map((titles,index) => {
                    return(
                        <th key={index}>{titles.title}</th>
                        )
                    })}
            </tr>
        </thead>
        <tbody>
        {listRecords?.map((content,index) => {
        return (
        <tr className={content.type === Ingress ? 'containerExtrac' : 'containerIngress'} key={index}>
            <td>{formatDate(content.date)}</td>
            <td>{content.type === Ingress ? <MdIcons.MdAttachMoney/> : <MdIcons.MdMoneyOff/>}</td>
            <td>{content.concept}</td>
            <td>{content.type === Ingress ? '+' : '-'}{content.amount}</td>
        </tr>
        )
    })}
    </tbody>
    </table>
</div>
 
</div>

)}

export default TableRecords
