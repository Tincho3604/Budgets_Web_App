import React from 'react'
import './style.css'
import * as FcIcons from 'react-icons/fc';
const InfoModal = () => {

    return (
        <div className="infoModal">
            <FcIcons.FcInfo size={12}/>
            <p>Click icon to see info</p>
        </div>
    )
}

export default InfoModal