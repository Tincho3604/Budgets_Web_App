import React,{useState,useEffect} from 'react';
import Field from '../Field/index';
import {fieldInfoRecords, formatDate} from '../../Constants/index';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import './style.css';
import swal from 'sweetalert';
import {updateRecords} from '../../Redux/actions/recordsActions';


const FormUpdate = ({id, uniqueItem, handleItem}) => {
    const {register, handleSubmit, errors } = useForm({
        defaultValues: {
            concept: uniqueItem[0]?.concept,
            amount: uniqueItem[0]?.amount,
            date: (formatDate(uniqueItem[0]?.date)),
        }
    });
console.log(formatDate(uniqueItem[0]?.date))
    const onSubmit = (data,e) => {
        handleItem(false)
        const objParams = {id, ...data};
        e.preventDefault();
        console.log('objParams',objParams)
        updateRecords(objParams)
        swal("Your record has been edit!", {
            icon: "success",
        })
    }


return <>

    <div className="mainUpdateFormContainer">
    <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Form Update</h3>
            <div className="updater">
            {fieldInfoRecords.map((item,index) => {
                            return( 
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
                        
                </div>
                <input type="submit" className="buttonUpdater" value="Update operation"/>
        </form>
    </div>
</>
}

const mapDispatchToProps ={
    updateRecords,  
}
export default  connect(null, mapDispatchToProps)(FormUpdate)




