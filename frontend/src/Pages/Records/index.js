import React from 'react';
import Header from '../../Component/Header/index';
import Footer from '../../Component/Footer/index';
import GlobalTable from '../../Component/GlobalTable/index';
import Filter from '../../Component/Filter/index';
import './style.css';

const Records = () => {
return(
    <>
        <Header/>
        <div className="mainRecordsContainer">
        <Filter/>
        <GlobalTable/>
        </div>

    </>
    )
}

export default Records