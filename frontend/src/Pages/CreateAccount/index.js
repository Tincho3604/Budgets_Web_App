import React from 'react';
import Field from '../../Component/Field/index';
import {fieldsUserInfo} from '../../Constants/index';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import {ROUTE_API} from '../../Constants/index';
import swal from 'sweetalert';
import './style.css';



Axios.defaults.withCredentials = true
const CreateAccount = () => {
    const {register, handleSubmit, errors } = useForm();


    const onSubmit = (data,e) => {
        e.preventDefault();

    Axios.post(`${ROUTE_API}/createUser`, {
        email: data.email,
        password: data.password,
        username: data.username
    }).then((res) => {
        swal("Your user has been created!", {
            icon: "success",
        });
    }).catch((err) => {
        console.log(err)
    })
    
    e.target.reset();
    }
return (
<div className="mainCreateAccountContainer">
    <form onSubmit={handleSubmit(onSubmit)} className="forValue">
        <h1>Create Account</h1>
        <div className="CreateAccountInputsContainer">
            {fieldsUserInfo?.map((item,index) => {
                return (
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
            />
        )
        
    })}  
        {errors.email && <p className="errorMessages">{errors.email.message}</p>}
        </div>
        <input type="submit" className="CreateAccountButton" value="Create account"/>
    </form>


</div>)
}

export default CreateAccount