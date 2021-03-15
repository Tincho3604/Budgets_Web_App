import React from 'react';
import './style.css';
import TableRecords from '../TableRecords/index';
import HomeTable from '../HomeTable/index';
import {columnInfo} from '../../Constants/index';

const Balance = () => {

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
    
    return (
    <div className="balanceContainer">
    
    <HomeTable
    titleColumn={['Money Income', 'Money egress']}
    numValue={[15000, 15000]}
    title={'Balance sheet of money entered and withdrawn.'}
    />

    <HomeTable
    numValue={[200000]}
    titleColumn={['Total Amount']}
    title={'Current money'}
    />
    <TableRecords 
    listRecords={redux}
    textColumn={columnInfo}
    title={'Summary of the record of income and expenses.'}
    />
    
    
    </div>
    )}
export default Balance
