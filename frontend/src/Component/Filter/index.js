import React from 'react';
import Field from '../../Component/Field/index';
import {fieldFilterAmount, fieldFilterMonths, FilterButtonText} from '../../Constants/index';
import './style.css';

const Filter = () => {
return(
    <div className="mainFilterContainer">
        <h2>Records filter</h2>
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
                    idSelect={'selectFilter'}
                    classSelect={'classFilter'}
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
                    idSelect={'selectFilter'}
                    classSelect={'classFilter'}
                />
                )
            })}
        </div>
        <button className="buttonFilter">{FilterButtonText}</button>
    </div>
    )
} 
export default Filter


