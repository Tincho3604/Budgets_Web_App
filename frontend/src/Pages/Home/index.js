import React,{useEffect,useState} from 'react'
import Header from '../../Component/Header/index'
import Footer from '../../Component/Footer/index'
import Balance from '../../Component/Balance/index'
import './style.css'
import { connect } from 'react-redux';
import {getFirstTenRecords, getTotalEgress, getTotalIngress} from '../../Redux/actions/recordsActions';
import {setLocalStorage, loadLocalStorage} from '../../useLocalStorage/index';
import {formatAmountArrays, calculateCurrentMoney } from '../../Constants/index'


const Home = (props) => {
const[list, setList] = useState(loadLocalStorage('value'))
const[amountEgress, setAmountEgress] = useState(loadLocalStorage('egressAmount'))
const[amountIngress, setAmountIngress] = useState(loadLocalStorage('ingressAmount'))

const infoFirstTable =  formatAmountArrays(amountIngress,amountEgress);

useEffect(() => {
        props.getFirstTenRecords()
        props.getTotalEgress()
        props.getTotalIngress()
        const f = async() => {
			const responseTenRecords = await props.getFirstTenRecords()
			const responseEgressAmount = await props.getTotalEgress()
            const responseIngressAmount = await props.getTotalIngress()
            setAmountEgress([...responseEgressAmount])
            setAmountIngress([...responseIngressAmount])
            setList([...responseTenRecords])
            }
        f()   
    }, []);

    useEffect(() => {
        setLocalStorage('value',list)
        setLocalStorage('egressAmount',amountEgress)
        setLocalStorage('ingressAmount',amountIngress)
    }, []);
    

    return (
    <>
        <Header/>
        <Balance
        numValue={[infoFirstTable]}
        currentValue={calculateCurrentMoney(infoFirstTable)}
        listRecords={list}
        />
        <Footer/>
    </>
    )
}

const mapStateToProps = (state) => {
    return{
        firstTenRecords: state.recordsReducer.firstTenRecords,
        totalAmountEgress: state.recordsReducer.totalAmountEgress
    }
}
const mapDispatchToProps = {
    getFirstTenRecords,
    getTotalEgress,
    getTotalIngress
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)



