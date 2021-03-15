import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import './style.css'

const Field = ({
    name, 
    id, 
    placeHolder, 
    htmlFor, 
    labelText, 
    inputType, 
    icon, 
    type, 
    optionText, 
    refForm, 
    errors}) => {
    
        if(inputType === "input"){ 
        return(
            <div className="inputs">
                <label htmlFor={htmlFor} id="form-label">{labelText}</label>
                <div className="mainElementsContainer">
                    <div className="inputContainer">
                        <div className="iconContainer">
                            {icon}
                        </div>
                        <input 
                            className="eachInput"
                            type={type} 
                            name={name} 
                            id={id} 
                            placeholder={placeHolder} 
                            ref={refForm}
                        />
                    </div>
                </div>
                    {name === "concept" ? errors?.concept && <span className="errorMessage">{errors?.concept?.message}</span>: ''}
                    {name === "date" ? errors?.date && <span className="errorMessage">{errors?.date?.message}</span>: ''}
                    {name === "amount" ? errors?.amount && <span className="errorMessage">{errors?.amount?.message}</span>: ''}
            </div>
        )}else{
            return(
            <div className="inputs">
                <label>{labelText}</label>
                <div className="mainElementsContainer">
                    <div className="inputContainer">
                        <div className="iconContainer">
                            {icon}
                        </div>
                        <select name={name} id="selectForm" className="eachInput" ref={refForm}>
                            {optionText.map((option,index) => {
                                return <option value={option} key={index}>{option}</option>
                            })}
                        </select>
                    </div>
                </div>
            </div>
    )}
}

export default Field

