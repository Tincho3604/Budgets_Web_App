import React,{useState, useEffect} from 'react';
import './style.css';
import {Ingress, 
        IngressIconColor, 
        EgressIconColor, 
        formatDate, 
        deleteButtonText, 
        editButtonText, 
        alertsForm, 
    } 
    from '../../Constants/index';
import * as MdIcons from "react-icons/md";
import Axios from 'axios';
import {ROUTE_API} from '../../Constants/index';
import deletedIcon from '../../Images/delete-icon.jpg'
import {setLocalStorage, loadLocalStorage} from '../../useLocalStorage/index'
import { connect } from 'react-redux';
import FormUpdate from '../FormUpdate/index';
import Filter from '../../Component/Filter/index'

const GlobalTable = ({
    recordsList,
    props
}) => {

    const [test, setTest] = useState()
    const [id, setId] = useState()
    const [disabled, setDisabled] = useState('')

    useEffect(() => {
    
    }, []);

    const onSubmit = (data,e,id) => {
        alert(data)
        /*e.preventDefault();
        /e.target.reset();
        alertsForm("Register Saved", 
        "Record saved succesfully", 
        'Continue',
        '100px'
        )
        */
        console.log(data)
    }
    const deleteRecord = (id) => {
        Axios.delete(`${ROUTE_API}/deleteRecord/${id}`).then((response) => {
            setTest(recordsList.filter((value) => {
                return value.id !== id;
            }))
        })
        alertsForm("Delete Record", 
        "Record delete Succesfully", 
        'Continue', 
        deletedIcon
        )
    }
    const updateRecord = (id, value) => {
        /* Axios.put(`${ROUTE_API}/updateAmount/`, {
            amount: value,
            id: id
        }).then((response) => {
            console.log('Response',response)
            }).catch((err) => {
                console.lof(err)
            })
             <FormUpdate/>
        */
    }

    return (
        <>
        <div class="formRecordContainer">
        <FormUpdate/>
        <Filter />
        </div>

        <div className="MainGlobalTable" style={{'overflowX':'auto'}}>
            <table className="styledTable">
                <thead>
                <tr>
                    <th>Concept</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
        {recordsList?.map((item,index) => {
            return (
                    <tr key={index}>
                        <td>{item.concept}</td>
                        <td style={item.type === Ingress ?{color:IngressIconColor} : {color:EgressIconColor}}>{item.amount}</td>
                        <td>{formatDate(item.date)}</td>
                        <td>{item.type === Ingress ? <MdIcons.MdAttachMoney color={IngressIconColor}/> : <MdIcons.MdMoneyOff color={EgressIconColor}/>}</td>
                        <td><button className="deleteButton" >{deleteButtonText}</button></td>
                        <td><button className="editButton" onClick={() => onSubmit(item.id)}>{editButtonText}</button></td>
                    </tr>
            )
        })}
            </tbody>
            </table>
        </div>
    </>
    )
}

const mapStateToProps = state => {
    return {
        records: state.recordsReducer.records
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(GlobalTable)
