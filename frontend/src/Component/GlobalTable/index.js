import React,{useState} from 'react';
import './style.css';
import {Ingress, 
        IngressIconColor, 
        EgressIconColor, 
        formatDate, 
        deleteButtonText, 
        editButtonText, 
        alertsForm, 
        ROUTE_API,
        options
    } 
    from '../../Constants/index';
import * as MdIcons from "react-icons/md";
import Axios from 'axios';
import {setLocalStorage, loadLocalStorage} from '../../useLocalStorage/index'
import { connect } from 'react-redux';
import FormUpdate from '../FormUpdate/index';
import Filter from '../../Component/Filter/index'
import swal from 'sweetalert';
import Swal from 'sweetalert2'




const GlobalTable = ({
    recordsList,
    props
}) => {
    
    const [show, setShow] = useState (false)
    const [deleteFile, setDeleteFile] = useState()
    const [valueFields, setValueFields] = useState()
    const [disabled, setDisabled] = useState('')



    const sendId = (id) =>  {
            setDisabled(id)
        Swal.fire({
            title: 'Select the option you want to change',
            confirmButtonText: 'Confirm',
            padding: '1rem',
            backdrop: true,
            timer: 10000,
            timerProgressBar: true,
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: true,
            input:'select', 
            inputOptions: options,
            cancelButtonAriaLabel: 'Cerrar Alerta',
            showCloseButton: true,
            imageAlt: 'Icon Deleted'
        }).then((result) => {
            setDisabled(id)
            setValueFields(options[result.value])
            setShow(!show)
        })

        
    }

    
    const deleteRecord = (id) => {
        
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this record file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                Axios.delete(`${ROUTE_API}/deleteRecord/${id}`).then((response) => {
                    setDeleteFile(recordsList.filter((value) => {
                        return value.id !== id;
                    }))
                })
                swal("Your record has been deleted!", {
                icon: "success",
            });
            } else {
                swal("Your record was not deleted");
            }
        });
    }

    return (
        <>
            <div className="formRecordContainer">
               
                <FormUpdate 
                    id={disabled}
                    valueField={valueFields}
                />
                
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
                        <td><button className="deleteButton" onClick={() => deleteRecord(item.id)}>{deleteButtonText}</button></td>
                        <td><button className="editButton" onClick={() => sendId(item.id)}>{editButtonText}</button></td>
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
