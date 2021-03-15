import React from 'react';
import './style.css';
import {deleteButtonText} from '../../Constants/index';

const DeleteButton = () => {
return <button className="deleteButton">{deleteButtonText}</button>
}

export default DeleteButton