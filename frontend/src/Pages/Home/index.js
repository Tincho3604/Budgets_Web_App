import React,{useEffect, useState} from 'react';
import Header from '../../Component/Header/index';
import Footer from '../../Component/Footer/index';
import Balance from '../../Component/Balance/index';
import './style.css';
import {totalEgressIngress, ROUTE_API} from '../../Constants/index';
import Axios from 'axios';

const Home = ({props}) => {

const [allRecords, setAllRecords] = useState()
const [firstTenRecords, setFirstTenRecords] = useState()

const currentEgressAmount = totalEgressIngress(allRecords,'Egress')
const currentIngressAmount = totalEgressIngress(allRecords,'Ingress')
const currentValue =  currentIngressAmount - currentEgressAmount 

useEffect(() => {
    Axios.get(`${ROUTE_API}/getAllRegisters/${localStorage.getItem('email')}`).then((response) => {
        setAllRecords(response.data)
    })
    
    Axios.get(`${ROUTE_API}/getFirstTenRecords/${localStorage.getItem('email')}`).then((response) => {
        setFirstTenRecords(response.data)
        })
    }, []);

    return (
    <>
        <Header/>
            <Balance
                numValue={[currentIngressAmount, currentEgressAmount]}
                currentValue={[currentValue]}
                listRecords={firstTenRecords}
            />
        <Footer/>
    </>
    )
}


export default Home
