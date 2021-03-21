import React from 'react';
import TableRecords from '../TableRecords/index';
import HomeTable from '../HomeTable/index';
import {columnInfo} from '../../Constants/index';

const Balance = ({listRecords,numValue, currentValue}) => {

    return (
    <div className="balanceContainer">
    
    <HomeTable
    titleColumn={['Money Income', 'Money egress']}
    numValue={numValue}
    title={'Balance sheet of money entered and withdrawn.'}
    />

    <HomeTable
    numValue={currentValue}
    titleColumn={['Total Amount']}
    title={'Current balance of money'}
    />
    <TableRecords 
    listRecords={listRecords}
    textColumn={columnInfo}
    title={'List of the first 10 records'}
    />
    
    
    </div>
    )}
export default Balance
