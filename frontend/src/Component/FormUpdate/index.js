import React,{useState,useEffect} from 'react';
import Field from '../Field/index';
import {fieldsEditForm, formatDate, ROUTE_API} from '../../Constants/index';
import { useForm } from 'react-hook-form';
import './style.css';
import swal from 'sweetalert';
import Axios from 'axios';

const FormUpdate = ({id, uniqueItem, handleItem}) => {
    
    const [types, setTypes] = useState('')


    useEffect(() => {
        setTypes(uniqueItem[0].types)
    }, []);
    
    const {register, handleSubmit, errors } = useForm({
        defaultValues: {
            concept: uniqueItem[0]?.concept,
            amount: uniqueItem[0]?.amount,
            date: (formatDate(uniqueItem[0]?.date)),
        }
    });

    
    const onSubmit = (data,e) => {
        const objParams = {id, ...data, types};
        e.preventDefault();
        Axios.put(`${ROUTE_API}/update/:id`, {
            value: objParams,
            id: objParams.id
        })
        swal("Your record has been edit!", {
            icon: "success",
        })
        handleItem(false,objParams)
    }


return <>

    <div className="mainUpdateFormContainer">
    <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Form Update</h2>
            <div className="updater">
            {fieldsEditForm.map((item,index) => {
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


export default  FormUpdate




