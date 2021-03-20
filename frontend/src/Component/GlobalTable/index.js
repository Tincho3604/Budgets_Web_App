import React,{useState,useEffect} from 'react';
import './style.css';
import {Ingress, 
        IngressIconColor, 
        EgressIconColor, 
        formatDate, 
        deleteButtonText, 
        editButtonText, 
        ROUTE_API,
        options
    } 
    from '../../Constants/index';
import * as MdIcons from "react-icons/md";
import Axios from 'axios';
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
    const [editBlock, setEditBlock] = useState(false)

    useEffect(() => {
            setDeleteFile(recordsList)
    }, []);

    const sendId = (id) =>  {
        if(editBlock){
            swal({
                title: "You can not edit other file now",
                text: "Do you want to cancel this operation?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((change) => {
            if (change) {
                setDisabled(id)
                setEditBlock(true)
                setShow(!show)
            }
        })
            }else{
        swal({
            title: "Are you sure?",
            text: `You are going to edit this registry:!`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((edit) => {
            if (edit) {
                setDisabled(id)
                setEditBlock(true)
                setShow(!show)
            } else {
                swal("Your record was not edit");
                }
            });  
        }  
    }

    const handleItems = (e) => {
        setShow(e)
        setEditBlock(e)
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
                {show &&  
                <FormUpdate 
                    id={disabled}
                    valueField={valueFields}
                    allList={recordsList}
                    uniqueItem={recordsList.filter(item => item.id === disabled)}
                    handleItem={handleItems}
                />
                }
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

export default  GlobalTable
