import React, {useState} from 'react'
import './style.css'
    const HomeTable = ({numValue, titleColumn, title}) => {

return (
<div className="main-container-table">
    <h1>{title}</h1>
    <table className="container">
	    <thead>
		    <tr>
			    {titleColumn?.map((title,index) => {
	                return <th key={index}><h1>{title}</h1></th>
		 	   })}
		    </tr>
	    </thead>
	    <tbody>
		    <tr>
		        {numValue?.map((num,index) => {
	            return <td key={index}>$ {num}</td>
			})}
		    </tr>
	    </tbody>
    </table>
</div>
) 
}

export default HomeTable