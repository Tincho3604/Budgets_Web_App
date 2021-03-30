import React,{useEffect, useState} from 'react';
import Field from '../../Component/Field/index';
import {fieldsUserInfo} from '../../Constants/index';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import {ROUTE_API, saveToken, saveIdUser} from '../../Constants/index';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';


Axios.defaults.withCredentials = true
const SignIn = () => {

    const {register, handleSubmit, errors } = useForm();
    
    const onSubmit = (data,e) => {
        e.preventDefault();
        Axios.post(`${ROUTE_API}/logInUser`, {
            email: data.email,
            password: data.password,
            username: data.username
        }).then((res) => {

            if(res.data.results){
            swal(res.data.message, {
                    icon: "success",
                }).then(() => {
                    
                    saveIdUser(res.data.results[0].idusers)
                    saveToken(res.data.token)
                    
                }).then(() => {
                    checkUserInfo()
                }) 
            }else{
                swal(res.data.message, {
                    icon: "warning",
                });
            }
        }).catch((err) => {
            console.log('User Error',err)
        })
        e.target.reset();
    }



    
const checkUserInfo = () => {
    Axios.get(`${ROUTE_API}/authUser`, {
        headers: {
            "authorization": localStorage.getItem('token'),
        },
    }).then((response) => {
        console.log(response)
    })
}




return (
<div className="mainUserFormContainer">
    <form onSubmit={handleSubmit(onSubmit)} className="forValue">
        <h1>SIGN IN</h1>
        <div className="secondaryUserContainer">
            {fieldsUserInfo?.filter(item => item.name !== 'username').map((item,index) => {
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
                    classInput={'inputSignIn'}
                    id={'idSignIn'}
                />
            )
        })}  
        </div>
        <input type="submit" className="buttonUserForm" value="Sign"/>
        <Link to='/createAccount' className="formAccountLink">
            <p>If you not have an account CREATE ONE</p>
        </Link>
    </form>
</div>
    )
}

export default SignIn