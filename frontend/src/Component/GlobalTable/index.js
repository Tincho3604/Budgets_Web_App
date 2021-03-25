import React,{useState,useEffect} from 'react';
import './style.css';
import {Ingress, 
        IngressIconColor, 
        EgressIconColor, 
        formatDate, 
        deleteButtonText, 
        editButtonText, 
        ROUTE_API,
        replaceElement,
        filterDate,
    } 
    from '../../Constants/index';
import * as MdIcons from "react-icons/md";
import Axios from 'axios';
import FormUpdate from '../FormUpdate/index';
import Filter from '../../Component/Filter/index'
import swal from 'sweetalert';
import ModalError from '../../Component/ModalError';

const GlobalTable = () => {
    
    const [show, setShow] = useState (false)
    const [currentList, setCurrentList] = useState()
    const [idItem, setIdItem] = useState('')
    const [editBlock, setEditBlock] = useState(false)
    
    
    useEffect(() => {
        Axios.get(`${ROUTE_API}/getAllRegisters/${localStorage.getItem('email')}`).then((response) => {
            setCurrentList(response.data)
        })
        
    }, []);

    const editItem = (id) =>  {
        if(editBlock){
            swal({
                title: "You can not edit other file now",
                text: "Do you want to cancel this operation?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((change) => {
            if (change) {
                setIdItem(id)
                setEditBlock(true)
                setShow(!show)
            }
        })
            }else{
        swal({
            title: "Are you sure?",
            text: `You are going to edit this registry!`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((edit) => {
            if (edit) {
                setIdItem(id)
                setEditBlock(true)
                setShow(!show)
            } else {
                swal("Your record was not edit");
                }
            });  
        }  
    }

    const handleItems = (e, value) => {
        setShow(e)
        setEditBlock(e)
        setCurrentList(replaceElement(currentList,value))
    }

    const handleDate = (e) => {
        setCurrentList(filterDate(currentList, e.date, e.amount))
    }
    const restoreList = (e) => {
        window.location.reload(); 
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
                    setCurrentList(currentList?.filter((value) => {
                        return value.id !== id;
                    }))
                    console.log(response)
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
                    id={idItem}
                    uniqueItem={currentList?.filter(item => item.id === idItem)}
                    handleItem={handleItems}
                />
                }
                <Filter 
                changeDate={handleDate}
                restore={restoreList}
                estado={currentList}
                />
            </div>
            
        <div className="MainGlobalTable" style={{'overflowX':'auto'}}>
        {currentList?.length !== 0 ? (
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
    
        {currentList?.map((item,index) => {
            return (
                    <tr key={index}>
                        <td>{item.concept}</td>
                        <td style={item.type === Ingress ?{color:IngressIconColor} : {color:EgressIconColor}}>{item.amount}</td>
                        <td>{formatDate(item.date)}</td>
                        <td>{item?.type === Ingress ? <MdIcons.MdAttachMoney color={IngressIconColor}/> : <MdIcons.MdMoneyOff color={EgressIconColor}/>}</td>
                        <td><button className="deleteButton" onClick={() => deleteRecord(item.id)}>{deleteButtonText}</button></td>
                        <td><button className="editButton" onClick={() => editItem(item.id)}>{editButtonText}</button></td>
                    </tr>
            )
        })}
                </tbody>
            </table>
                ) : (<ModalError/>)}
        </div>
    </>
    )
}

export default  GlobalTable


