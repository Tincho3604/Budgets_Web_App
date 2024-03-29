import React from 'react'
import './style.css'
    const HomeTable = ({numValue, titleColumn, title}) => {
		const currentMoney = numValue < 0 ? "negativeAmout" : ''
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
	            return  <td id={currentMoney} key={index}>$ {num}</td>
			})}
		    </tr>
	    </tbody>
    </table>
</div>
) 
}

export default HomeTable