import React from 'react';
import Header  from '../../Component/Header/index';
import Form from '../../Component/Form/index';
import Footer from '../../Component/Footer/index';
import {formRegisterTitle} from '../../Constants/index';


function Register() {
    return (
    <>
        <Header />
        <Form 
        title={formRegisterTitle}
        />
        <Footer/>
    </>
    )
}

export default Register
