import React,{useState} from 'react';
import Field from '../../Component/Field/index';
import {fieldInfo} from '../../Constants/index'
import './style.css'
import image from '../../Images/registrerWallpaper.jpg'



const Form = () => {
const handleSubmit = e => {
    console.log('Test')
}
return (    
    <div className="mainFormContainer">
        <div className="imgContainer">  
        <img src={image} alt="fondo" className="imgForm"/>
    </div> 
<div className="form-registrer">
    <form onSubmit={handleSubmit}>
        <div className="form-container">
            <h1>Transaction registration form</h1>
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
                />
                )
            })}
            <input type="submit" className="submitButton"/>
        </div>
    </form>
    </div>
</div>
)
}

export default Form