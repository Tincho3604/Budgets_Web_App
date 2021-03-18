import React from 'react';
import Field from '../Field/index';
import {ROUTE_API, fieldInfoRecords} from '../../Constants/index';
import { useForm } from 'react-hook-form';
import './style.css';

const FormUpdate = () => {
    
    const {register, handleSubmit, errors } = useForm();
    const onSubmit = (data,e) => {
        e.preventDefault();
        e.target.reset();
        console.log(data)
    }
return <>
    <div className="mainUpdateFormContainer">
    <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Form Update</h2>
            <div className="updater">
            {fieldInfoRecords.map((item,index) => {
                            return( 
                                <td>
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
                                        disabled={''}
                                    />
                                </td>
                            )
                        })}
                </div>
            <input type="submit" className="buttonUpdater" value="Update operation"/>
        </form>
    </div>
</>
}

export default FormUpdate