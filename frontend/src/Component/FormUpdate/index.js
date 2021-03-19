import React,{useState, useEffect} from 'react';
import Field from '../Field/index';
import {ROUTE_API, fieldInfoRecords} from '../../Constants/index';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import * as FcIcons from "react-icons/fc"
import './style.css';
import swal from 'sweetalert';
const FormUpdate = (id, disabled, valueField) => {
    
    const {register, handleSubmit, errors } = useForm();
    const [idItem, setIdItem] = useState();
    const [target, setTarget] = useState();


    const setearId = (value) => {
        if(Object.values(value)[0] === ''){
            swal("You have not selected any fields to edit", {
                icon: "warning",
            });
        }else{
        setIdItem(value)
        setTarget(fieldInfoRecords.filter(item => item.name === value?.valueField?.toLowerCase()))
        }
    }

    

    const onSubmit = (data,e,id) => {
        const objEdit = {...idItem, ...data};

        e.preventDefault();
        e.target.reset();
/*
    Axios.put(`${ROUTE_API}/updateAmount/`, {
            value: target,
            id: target.id
        }).then((response) => {
            console.log(response)
            }).catch((err) => {
                console.lof(err)
            })
  */
 }



return <>
    <div className="mainUpdateFormContainer">
    <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Form Update</h3>
            <div className="updater">
                <div style={{display: target  ? 'none' : 'block'}} className="notFound"> 
                    <h2>No inputs Selected</h2>
                    <FcIcons.FcHighPriority size={40} />
                </div>
            {target?.map((item,index) => {
                            return( 
                                    <Field
                                        type={item.type}
                                        name={item.name}
                                        placeHolder={item.placeHolder}
                                        htmlFor={item.htmlFor}
                                        labelText={item.labelText}
                                        inputType={item.inputType}
                                        errors={errors}
                                        key={index}
                                        refForm={register(item.registerInfo)}
                                        classInput={'inputsGlobalTable'}
                                />
                            )
                        })}
                        
                </div>
                <input type="submit" className="buttonUpdater" value="Update operation" style={{display: !target  ? 'none' : 'block'}}/>
        </form>
        <button onClick={() => setearId(id)} className="loadInputs">Load Inputs</button>
    </div>
</>
}

export default FormUpdate



