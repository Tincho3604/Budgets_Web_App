import React from 'react';
import './style.css';
import {Ingress, formatDate} from '../../Constants/index';
import ModalError from '../ModalError/index';
import * as MdIcons from "react-icons/md";

const TableRecords = ({listRecords, textColumn, title}) => { 

if(listRecords?.length > 0){
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
        <tr className={content.types === Ingress ? 'containerExtrac' : 'containerIngress'} key={index}>
            <td>{formatDate(content.date)}</td>
            <td>{content.types === Ingress ? <MdIcons.MdAttachMoney/> : <MdIcons.MdMoneyOff/>}</td>
            <td>{content.concept}</td>
            <td>{content.types === Ingress ? '+' : '-'}{content.amount}</td>
        </tr>
        )
    })}
        </tbody>
    </table>
</div>
</div>

)}else{
    return <ModalError text={'RECORDS NOT FOUNDS'} />
}


}

export default TableRecords
