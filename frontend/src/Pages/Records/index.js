import React,{useState,useEffect} from 'react';
import Header from '../../Component/Header/index';
import Footer from '../../Component/Footer/index';
import GlobalTable from '../../Component/GlobalTable/index';
import Filter from '../../Component/Filter/index';
import {getAllRecords} from '../../Redux/actions/recordsActions';
import { connect } from 'react-redux';
import {setLocalStorage, loadLocalStorage} from '../../useLocalStorage/index';
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
console.log('valuesFinal',valuesFinal)



return(
    <>
        <Header/>
        <div className="mainRecordsContainer">
            <Filter/>
            <GlobalTable 
            recordsList={valuesFinal}
            />
        </div>
    </>
    )
}

const mapStateToProps = state => {
    return {
	  test:state.recordsReducer.records
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllRecords
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Records)

