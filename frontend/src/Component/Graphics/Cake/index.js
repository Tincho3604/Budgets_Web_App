import React from 'react';
import {Pie} from 'react-chartjs-2'
import './style.css';

const Cake = ({
    title,
    labels,
    amountsEgress, 
    amountsIngress, 
    primaryBackgroundColor,
    secondaryBackgroundColor,
    borderWidth
})  => {
    const data = {
        labels: labels,
        datasets: [{
            data: [amountsEgress,amountsIngress],
            backgroundColor: [
                primaryBackgroundColor,
                secondaryBackgroundColor,
            ],
            borderWidth: borderWidth
        }]
    }
const options = {
    resposive: true,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}


    return (
    <div className="pieGraphics">
        <h2>{title}</h2>
        <Pie data={data} options={options}/>
    </div>
)
}

export default Cake