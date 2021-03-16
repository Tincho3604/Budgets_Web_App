import React,{useState,useEffect} from 'react';
import Header from '../../Component/Header/index';
import Footer from '../../Component/Footer/index';
import GlobalTable from '../../Component/GlobalTable/index';
import Filter from '../../Component/Filter/index';
import {getAllRecords} from '../../Redux/actions/recordsActions';
import { connect, useDispatch } from 'react-redux';
import './style.css';


const Records = (props) => {
    const dispatch = useDispatch()

    const [records, setRecords] = useState([])

    useEffect(() => {
        dispatch(getAllRecords())
        setRecords(props.recordsList)
    },[]);

return(
    <>
        <Header/>
        <div className="mainRecordsContainer">
            <Filter/>
            <GlobalTable 
            recordsList={records}
            />
        </div>
    </>
    )
}

const mapStateToProps = (state) => {
    return{
        recordsList: state.recordsReducer.records
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllRecords
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Records)

