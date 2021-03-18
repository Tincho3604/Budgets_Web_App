import React,{useState,useEffect} from 'react';
import Header from '../../Component/Header/index';
import Footer from '../../Component/Footer/index';
import GlobalTable from '../../Component/GlobalTable/index';
import Filter from '../../Component/Filter/index';
import './style.css';
import Axios from 'axios';
import {ROUTE_API} from '../../Constants/index';

const Records = (props) => {

    const [valuesFinal, setValuesFinal] = useState()
    
    useEffect(() => {
        Axios.get(`${ROUTE_API}/getAllRegisters`).then((response) => {
            setValuesFinal(response.data)
        })
    }, []);

return(
    <>
        <Header/>
        <div className="mainRecordsContainer">
            <GlobalTable
            recordsList={valuesFinal}
        />
        </div>
     
    </>
    )
}


export default Records

