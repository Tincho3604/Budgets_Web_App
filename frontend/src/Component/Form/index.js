import React,{useState} from 'react';
import Field from '../../Component/Field/index';
import {fieldInfo} from '../../Constants/index';
import './style.css';
import backGroundForm from '../../Images/registrerWallpaper.jpg';
import { useForm } from 'react-hook-form';
import {alertsForm} from '../../Constants/index';
import Axios from 'axios';

const Form = ({title}) => {
    const {register, handleSubmit, errors } = useForm();

    const onSubmit = (data,e) => {
        e.preventDefault();
        e.target.reset();
        alertsForm('Your Registry was successfully saved.','success','¡Done!','Ok')
        
        Axios.post("http://localhost:4000/create", {
            concept: data.concept,
            amount: data.amount,
            date: data.date,
            type: data.type
        }).then(() => {
            alert("Info send");
        })
    }
return (    
    <div className="mainFormContainer">
        <div className="imgContainer">  
            <img src={backGroundForm} alt="imgForm" className="imgForm"/>
        </div> 
            <div className="form-registrer">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-container">
                        <h1>{title}</h1>
                        {fieldInfo.map((item,index) => {
                            return( 
                                <Field
                                    type={item.type}
                                    name={item.name}
                                    id={item.id}
                                    placeHolder={item.placeHolder}
                                    htmlFor={item.htmlFor}
                                    labelText={item.labelText}
                                    inputType={item.inputType}
                                    icon={item.icon}
                                    optionText={item.optionText}
                                    errors={errors}
                                    key={index}
                                    refForm={register(item.registerInfo)}
                                    idSelect={'selectForm'}
                                    classSelect={'inputs'}
                                />
                            )
                        })}
                    <input type="submit" className="submitButton" value="Register operation"/>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Form