import React from 'react'
import notFound from '../../Images/not-found.jpg'
import './style.css';

const ModalError = () => {
return (
    <div className="modalContainer">
        <h2>RECORDS NOT FOUND</h2>
        <img src={notFound}  alt="not-found" id="modal"/>
    </div>
)
}

export default ModalError