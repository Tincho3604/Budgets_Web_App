import React,{useEffect,useState} from 'react'
import Header from '../../Component/Header/index'
import Footer from '../../Component/Footer/index'
import Balance from '../../Component/Balance/index'
import './style.css'
import Axios from 'axios';
import {ROUTE_API, totalEgressIngress} from '../../Constants/index';


const Home = (props) => {
const[list, setList] = useState()
const [allList, setAllList] = useState()

const currentEgressAmount = totalEgressIngress(allList,'Egress')
const currentIngressAmount = totalEgressIngress(allList,'Ingress')

const currentValue =  currentIngressAmount - currentEgressAmount 

useEffect(() => {
    Axios.get(`${ROUTE_API}/getFirstTenRecords`).then((response) => {
        setList(response.data)
    })
    Axios.get(`${ROUTE_API}/getAllRegisters`).then((response) => {
        setAllList(response.data)
    })
    }, []);

    return (
    <>
        <Header/>
        <Balance
        numValue={[currentIngressAmount, currentEgressAmount]}
        currentValue={[currentValue]}
        listRecords={list}
        />
        <Footer/>
    </>
    )
}

export default Home

