import React from 'react';
import Field from '../../Component/Field/index';
import {fieldsUserInfo} from '../../Constants/index';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import {ROUTE_API} from '../../Constants/index';
import './style.css';
import swal from 'sweetalert';


const SignIn = () => {
    const {register, handleSubmit, errors } = useForm({
        defaultValues: {
            username: 'martin',
            email: 'admin@root.com',
            password: 'data',
        }
    });
    const onSubmit = (data,e) => {
        e.preventDefault();
        console.log(data)
        Axios.post(`${ROUTE_API}/auth`, {
            email: data.email,
            password: data.password,
            username: data.username
        }).then((res) => {
            swal("¡Your login was successfully confirmed!", {
                icon: "success",
            });
        }).catch((err) => {
            console.log('ERROR ASHE',err)
        })
        e.target.reset();
    }



return (
<div className="mainSignContainer">
    <form onSubmit={handleSubmit(onSubmit)} className="forValue">
        <h1>SIGN IN</h1>
        <div className="signInputsContainer">
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
        <input type="submit" className="signInButton" value="Sign"/>
    </form>


</div>)
}

export default SignIn