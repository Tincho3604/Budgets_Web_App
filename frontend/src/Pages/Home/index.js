import React,{useEffect,useState} from 'react'
import Header from '../../Component/Header/index'
import Footer from '../../Component/Footer/index'
import Balance from '../../Component/Balance/index'
import './style.css'
import { connect } from 'react-redux';
import {getFirstTenRecords} from '../../Redux/actions/recordsActions';

import {setLocalStorage, loadLocalStorage} from '../../useLocalStorage/index';

// const localStorageInfo = JSON.parse(localStorage.getItem('value'))

const Home = (props) => {
const[list, setList] = useState(loadLocalStorage())

useEffect(() => {
        props.getFirstTenRecords()
        const f = async() => {
			const respuesta = await props.getFirstTenRecords()
			setList([...respuesta])
    }
    f()   
    }, []);

    useEffect(() => {
        setLocalStorage('value',list)
    }, []);

 

console.log('Lista Home',list)
    
return (
    <>
        <Header/>
        <Balance
        listRecords={list}
        />
        <Footer/>
    </>
    )
}

const mapStateToProps = (state) => {
    return{
        firstTenRecords: state.recordsReducer.firstTenRecords
    }
}
const mapDispatchToProps = {
    getFirstTenRecords
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)



