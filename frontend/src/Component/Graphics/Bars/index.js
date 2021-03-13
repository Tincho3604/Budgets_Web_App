import React from 'react'
import {Bar} from 'react-chartjs-2'
import './style.css';

const Bars = ({
    valueWidth,
    title, 
    labels,
    primaryLabel,
    secondaryLabel,
    amountsIngress, 
    amountsEgress, 
    primaryBackgroundColor,
    secondaryBackgroundColor,
    borderWidth,
}) => {
    
        const data = {
            labels: [labels],
            datasets: [{
                label: primaryLabel,
                data: amountsEgress,
                backgroundColor: [primaryBackgroundColor],
                borderWidth: borderWidth
            },{
                label:secondaryLabel,
                data: amountsIngress,
                backgroundColor: [
                    secondaryBackgroundColor],
            }]
        }
    
    const options = {
        resposive: true,
        hover:{
            animationDuration:100
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

    return (
    <>
<div className="barGraphics" style={valueWidth}>
    <h2>{title}</h2>
    <Bar data={data} options={options}/>
</div>
    </>
    )
}

export default Bars

