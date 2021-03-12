import React,{useState} from 'react';
import { types, onShowInfo, fieldInfo } from '../../Constants/index';
import InfoModal from '../../Component/InfoModal/index';
import './style.css'

const Field = ({name, id, placeHolder, htmlFor, labelText, inputType, icon, type, optionText}) => {
    const handleSubmit = e => console.log("test")

    if(inputType === "input"){ 
        return(
            <div className="inputs">
                <label htmlFor={htmlFor} id="form-label">{labelText}</label>
                <div className="mainElementsContainer">
                    <div className="inputContainer">
                        {icon}
                        <input type={type} name={name} id={id} placeholder={placeHolder}/>
                    </div>
                    <div className="modalContainer">
                        <InfoModal/>
                    </div>
                </div>
            </div>
        )}else{
            return(
            <div className="inputs">
                <label>Type</label>
                <div className="mainElementsContainer">
                    <div className="inputContainer">
                        {icon}
                        <select className="selectForm">
                            {optionText.map((option,index) => {
                                return <option value={option} key={index}>{option}</option>
                            })}
                        </select>
                    </div>
                    <div className="modalContainer">
                        <InfoModal/>
                    </div>
                </div>
            </div>
    )}
}

export default Field

