import React, {useState, useEffect} from 'react'
import './style.css'
import TableRecords from '../TableRecords/index'
import GlobalTable from '../GlobalTable/index'

const Balance = () => {
    const titles = [
        {title:'Date'},
        {title:'Type'},
        {title:'Concept'},
        {title:'Amount'},
]



    const redux = [
        {date:'Primero', type:'Ingress', concept:'Contenido Info', amount:2000},
        {date:'23/1/1994', type:'Extract', concept:'Contenido Info',  amount:5000},
        {date:'23/1/1994', type:'Extract',concept:'Contenido Info', amount:5000},
        {date:'12/10/1997', type:'Ingress',concept:'Contenido Info', amount:2000},
        {date:'Segundo', type:'Extract',concept:'Contenido Info', amount:5000},
        {date:'11/05/2001', type:'Ingress',concept:'Contenido Info', amount:2000},
        {date:'12/10/1997', type:'Ingress',concept:'Contenido Info', amount:2000},
        {date:'23/1/1994', type:'Extract',concept:'Contenido Info', amount:5000},
        {date:'12/10/1997', type:'Ingress',concept:'Contenido Info', amount:2000},
        {date:'23/1/1994', type:'Extract',concept:'Contenido Info', amount:5000},
    ]
    

    const redux2 = [
        {type:'Ingress', total:2000},
        {type:'Extract', total:5000}
    ]
    return (
    <div className="balanceContainer">
    
    <GlobalTable
    titleColumn={['Money Income', 'Money egress']}
    numValue={[15000, 15000]}
    title={'Balance sheet of money entered and withdrawn.'}
    />

    <GlobalTable
    numValue={[200000]}
    titleColumn={['Total Amount']}
    title={'Current money'}
    />
    <TableRecords 
    listRecords={redux}
    textColumn={titles}
    title={'Summary of the record of income and expenses.'}
    />
    
    
    </div>
    )}
export default Balance
