import React from 'react';
import Field from '../../Component/Field/index';
import {fieldsSignIn} from '../../Constants/index';
import { useForm } from 'react-hook-form';

const SignIn = () => {
    const {register, handleSubmit, errors } = useForm();


    const onSubmit = (data,e) => {
    console.log(data)
    }
return (
<div className="mainSignContainer">
    <form onSubmit={handleSubmit(onSubmit)}>
        <h1>SIGN IN</h1>
            {fieldsSignIn.map((item,index) => {
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
                classInput={'inputsGlobalTable'}
            />
        )
    })}  
</form>
</div>)
}

export default SignIn