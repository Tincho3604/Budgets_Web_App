import React, {useState} from 'react'
import './style.css'
const GlobalTable = ({numValue, titleColumn, title}) => {
	const arrayTitle =['Titulo1','Titulo2']
	const arrayNums = [1200,2500]
return (
<div className="main-container-table">
    <h1>{title}</h1>
    <table class="container">
	    <thead>
		    <tr>
			    {titleColumn?.map(title => {
	                return <th><h1>{title}</h1></th>
		 	   })}
		    </tr>
	    </thead>
	    <tbody>
		    <tr>
		        {numValue?.map(num => {
	            return <td>$ {num}</td>
			})}
		    </tr>
	    </tbody>
    </table>
</div>
)
}

export default GlobalTable