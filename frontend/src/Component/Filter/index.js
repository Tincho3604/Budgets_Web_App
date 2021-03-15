import React from 'react';
import Field from '../../Component/Field/index';
import {fieldFilterAmount, fieldFilterMonths, FilterButtonText} from '../../Constants/index';
import './style.css';

const Filter = () => {
    //name ref value={option}
return(
    <div className="mainFilterContainer">
        <h2>Filter Records</h2>
        <div className="filter">
            {fieldFilterAmount.map((item,index) => {
                return (
                    <Field
                    name={item.name}
                    inputType={item.inputType}
                    placeHolder={item.placeHolder}
                    htmlFor={item.htmlFor}
                    type={item.type}
                    labelText={item.labelText}
                    id={item.id}
                    optionText={item.optionText}
                    key={index}
                />
                )
            })}
            {fieldFilterMonths.map((item,index) => {
                return (
                    <Field
                    name={item.name}
                    inputType={item.inputType}
                    placeHolder={item.placeHolder}
                    htmlFor={item.htmlFor}
                    type={item.type}
                    labelText={item.labelText}
                    id={item.id}
                    optionText={item.optionText}
                    key={index}
                />
                )
            })}
        </div>
        <button className="buttonFilter">{FilterButtonText}</button>
    </div>
    )
} 
export default Filter


