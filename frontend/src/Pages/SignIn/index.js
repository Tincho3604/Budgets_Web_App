import React,{useEffect, useState} from 'react';
import Field from '../../Component/Field/index';
import {fieldsUserInfo} from '../../Constants/index';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import {ROUTE_API, saveToken} from '../../Constants/index';
import './style.css';
import swal from 'sweetalert';
import Header from '../../Component/Header';
import CreateAccount from '../CreateAccount/index';




Axios.defaults.withCredentials = true
const SignIn = () => {

    const [loginStatus, setLoginStatus] = useState(false)
    const [currentUser, setCurrentUser] = useState('')
    const {register, handleSubmit, errors } = useForm();




    const onSubmit = (data,e) => {
        e.preventDefault();
        Axios.post(`${ROUTE_API}/auth`, {
            email: data.email,
            password: data.password,
            username: data.username
        }).then((res) => {
            if(res.data.results){
            swal(res.data.message, {
                    icon: "success",
                }).then(() => {
                    saveToken(res.data.token)
                }) 
            
            }else{
                swal(res.data.message, {
                    icon: "warning",
                });
            }
        }).catch((err) => {
        
            console.log('ERROR DE USUARIO',err)
        })
        e.target.reset();
    }


useEffect(() => {
Axios.get(`${ROUTE_API}/login`).then((response) => {
    if(response.data.logged){
        setLoginStatus(response.data.logged)
        setCurrentUser(response.data.user[0].username)
    }
})
}, []);



const checkUserInfo = () => {
    Axios.get(`${ROUTE_API}/infoUser`, {
        headers: {
            "authorization": localStorage.getItem('token'),
        },
    }).then((response) => {
        console.log(response)
    })
}






return (
<>
<div className="mainSignContainer">
    <form onSubmit={handleSubmit(onSubmit)} className="forValue">
        <h1>SIGN IN</h1>
        <div className="signInputsContainer">
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


        {errors.email && <p className="errorMessages">{errors.email.message}</p>}
        </div>
        <input type="submit" className="signInButton" value="Sign"/>
    </form>
</div>
<CreateAccount/>
</>
)
}

export default SignIn