import React, {useState} from 'react'
import './style.css'
import money from '../../Images/money.png'
import ATM from '../../Images/extrac_money.png'

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
<div id="main-container">
    <h1>{title}</h1>
    <div class="table-wrapper">
    
    <table class="fl-table">
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
        <tr className={content.type === 'Ingress' ? 'containerExtrac' : 'containerIngress'} key={index}>
            <td>{content.date}</td>
            <td>{content.type}<img className="iconImage" src={content.type === 'Ingress' ? money : ATM} alt="money"/></td>
            <td>{content.concept}</td>
            <td>{content.type === 'Ingress' ? '+' : '-'}{content.amount}</td>
        </tr>
        )
    })}
    </tbody>
    </table>
</div>
<button className="btn btn-1 btn-sep icon-info" onClick={toggleList}>{!list ? 'Collapse list in half' : 'Show 5 remaining'}</button>
</div>

)}

export default TableRecords