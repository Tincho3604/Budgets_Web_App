import React from 'react'
import Header from '../../Component/Header/index'; 
import DashTable from '../../Component/DashTable/index';

const DashBoard = () => {
return (
<>
    <Header/>
    <div className="DashBoard">
        <DashTable/>
    </div>
</>
    )
}

export default DashBoard