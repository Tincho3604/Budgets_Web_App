import React,{useEffect,useState} from 'react';
import Header from '../../Component/Header/index';
import Footer from '../../Component/Footer/index';
import Balance from '../../Component/Balance/index';
import './style.css';
import {totalEgressIngress} from '../../Constants/index';
import {getAllRecords, getFirstTenRecords} from '../../Redux/actions/recordsActions';
import { connect } from 'react-redux';

const Home = (props) => {

const currentEgressAmount = totalEgressIngress(props.records,'Egress')
const currentIngressAmount = totalEgressIngress(props.records,'Ingress')

const currentValue =  currentIngressAmount - currentEgressAmount 

useEffect(() => {
    props.allRecords()
    props.allFirstRecords()
    }, []);

    return (
    <>
        <Header/>
        <Balance
        numValue={[currentIngressAmount, currentEgressAmount]}
        currentValue={[currentValue]}
        listRecords={props.firstTenRecords}
        />
        <Footer/>
    </>
    )
}

const mapStateToProps = state => {
    return {
        records: state.recordsReducer.records,
        firstTenRecords: state.recordsReducer.firstTenRecords
    }
}

const mapDispatchToProps = dispatch => {
    return {
        allRecords: () => dispatch(getAllRecords()),  
        allFirstRecords: () => dispatch(getFirstTenRecords())
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(Home)

