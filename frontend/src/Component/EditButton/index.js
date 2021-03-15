import React from 'react';
import './style.css';
import {editButtonText} from '../../Constants/index';

const EditButton = (func,textButton) => {
return <button className="editButton">{editButtonText}</button>
}

export default EditButton