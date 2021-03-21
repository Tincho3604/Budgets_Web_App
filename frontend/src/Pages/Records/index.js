import React from 'react';
import Header from '../../Component/Header/index';
import Footer from '../../Component/Footer/index';
import GlobalTable from '../../Component/GlobalTable/index';
import './style.css';


const Records = (props) => {

return(
    <>
        <Header/>
        <div className="mainRecordsContainer">
            <GlobalTable/>
        </div>
     <Footer/>
    </>
    )
}


export default Records

