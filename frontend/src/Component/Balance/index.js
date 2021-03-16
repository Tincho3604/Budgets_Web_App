import React from 'react';
import './style.css';
import TableRecords from '../TableRecords/index';
import HomeTable from '../HomeTable/index';
import {columnInfo} from '../../Constants/index';

const Balance = (listRecords) => {

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
    listRecords={listRecords.listRecords}
    textColumn={columnInfo}
    title={'Summary of the record of income and expenses.'}
    />
    
    
    </div>
    )}
export default Balance
