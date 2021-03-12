import React, {useState} from 'react'
import './style.css'
import {Ingress, showHalf, hideHalf} from '../../Constants/index'
import * as MdIcons from "react-icons/md";

const TableRecords = ({listRecords, textColumn, title}) => { 


const [list, showList] = useState(false);
const [infoTable, applyInfoTable] = useState(listRecords)

const toggleList = () => {
    showList(!list)
    if(!list){
        applyInfoTable(infoTable.slice(0,4))
    }else{
        applyInfoTable(listRecords)
    }
}

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
        {infoTable?.map((content,index) => {
        return (
        <tr className={content.type === Ingress ? 'containerExtrac' : 'containerIngress'} key={index}>
            <td>{content.date}</td>
            <td>{content.type === Ingress ? <MdIcons.MdAttachMoney/> : <MdIcons.MdMoneyOff/>}</td>
            <td>{content.concept}</td>
            <td>{content.type === Ingress ? '+' : '-'}{content.amount}</td>
        </tr>
        )
    })}
    </tbody>
    </table>
</div>
    <div className="Button">
        <button className="btn btn-1 btn-sep icon-info" onClick={toggleList}>{!list ? hideHalf : showHalf}</button>
    </div>
</div>

)}

export default TableRecords
