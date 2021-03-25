import React from 'react';
import Field from '../../Component/Field/index';
import {fieldInfo} from '../../Constants/index';
import './style.css';
import backGroundForm from '../../Images/registrerWallpaper.jpg';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import Axios from 'axios';
import {ROUTE_API} from '../../Constants/index';

const Form = ({title}) => {
    

    const {register, handleSubmit, errors } = useForm();
    

    const onSubmit = (data,e) => {
        e.preventDefault();
        e.target.reset();
        Axios.post(`${ROUTE_API}/createRegister`, {
            concept: data.concept,
            amount: data.amount,
            date: data.date,
            type: data.type
        }).then((res) => {
            swal("Your record has been saved!", {
                icon: "success",
            });
        }).catch((err) => {
            console.log(err)
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
                                    classInput={'inputs'}
                                    inputStyle={'eachInput'}
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





/*
  Axios.post(`${ROUTE_API}/createRegister`, {
        concept: data.concept,
        amount: data.amount,
        date: data.date,
        type: data.type
    }).then((res) => {
    
    }).catch((err) => {
        console.log(err)
    })
*/