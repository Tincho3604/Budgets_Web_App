import React,{useEffect, useState} from 'react';
import Header from '../../Component/Header/index';
import Footer from '../../Component/Footer/index';
import Balance from '../../Component/Balance/index';
import './style.css';
import {totalEgressIngress, ROUTE_API} from '../../Constants/index';
import Axios from 'axios';
import CreateAccount from '../../Pages/CreateAccount/index';
import SignIn from '../../Pages/SingIn'


const Home = ({props}) => {

const [allRecords, setAllRecords] = useState()
const [firstTenRecords, setFirstTenRecords] = useState()

const currentEgressAmount = totalEgressIngress(allRecords,'Egress')
const currentIngressAmount = totalEgressIngress(allRecords,'Ingress')
const currentValue =  currentIngressAmount - currentEgressAmount 

useEffect(() => {
    Axios.get(`${ROUTE_API}/getAllRegisters`).then((response) => {
        setAllRecords(response.data)
    })
    
    Axios.get(`${ROUTE_API}/getFirstTenRecords`).then((response) => {
        setFirstTenRecords(response.data)
        })
    }, []);

    return (
    <>

  <SignIn/>
  <CreateAccount/>
    </>
    )
}


export default Home

/*
  // 

       <Header/>
        <Balance
        numValue={[currentIngressAmount, currentEgressAmount]}
        currentValue={[currentValue]}
        listRecords={firstTenRecords}
        />
        <Footer/>

*/