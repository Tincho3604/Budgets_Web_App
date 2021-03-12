import React,{useState} from 'react';
import { types, onShowInfo, fieldInfo } from '../../Constants/index';
import InfoModal from '../../Component/InfoModal/index';
import './style.css'

const Field = ({name, id, placeholder, htmlFor, labelText, inputType, icon}) => {

    const handleSubmit = e => console.log("test")
    const infoFunction = type => onShowInfo(type)
    const test = value => {
        if(value) return <h1>as</h1> 
    }
    return(
       <>
        {fieldInfo.map((item,index) => {
        if(item.inputType === "input"){ 
        return ( 
            <div className="inputs">
                <label htmlFor={item.htmlFor} id="form-label">{item.labelText}</label>
                <div className="mainElementsContainer">
                    <div className="inputContainer">
                        {item.icon}
                        <input type={item.type} name={item.name} id={item.id} placeholder={item.placeholder}/>
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
                        {item.icon}
                        <select className="selectForm">
                            {item.optionText.map((option,index) => {
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
        })}
        </>
    )
}

export default Field

