import React from 'react';
import Field from '../../Component/Field/index';
import {fieldFilterInfo} from '../../Constants/index';
import { useForm } from 'react-hook-form';
import './style.css';

const Filter = ({changeDate, restore,estado}) => {

    const {register, handleSubmit } = useForm()

const onSubmit = (data,e) => {  
    changeDate(data)
}
const collapseList = () => {
    restore()
}

    return(
    <div className="mainFilterContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Records filter</h2>
                <div className="filter">
                    {fieldFilterInfo.map((item,index) => {
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
                                refForm={register(item.registerInfo)}
                                idSelect={'selectFilter'}
                                classSelect={'classFilter'}
                                
                            />
                )
            })}
            </div>
            <input type="submit" className="buttonFilter" value="Filter Values"/>
        </form>
        <button className="buttonFilter" onClick={() => collapseList()}>Show all list</button>
    </div>
    )
} 
export default Filter


