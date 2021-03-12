import React,{useState} from 'react';
import Field from '../../Component/Field/index';
import './style.css'


const Form = () => {

const handleSubmit = e => {
    console.log('Test')
}

return (
<div className="form-registrer">
    <form onSubmit={handleSubmit}>
        <div className="form-container">
            <h1>Transaction registration form</h1>
                <Field/>
            <input type="submit" className="submitButton"/>
        </div>
    </form>
</div>
)
}

export default Form