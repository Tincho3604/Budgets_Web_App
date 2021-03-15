import React from "react";
import {HorizontalBar} from 'react-chartjs-2'
import './style.css';

const HorizontalBarTable = ({
    title,
    valueWidth,
    labels,
    primaryLabel,
    secondatyLabel,
    amountsEgress,
    amountsIngress,
    primaryBackgroundColor,
    secondaryBackgroundColor
}) => {

    const data = {
        labels: labels,
        datasets: [{
            label: primaryLabel,
            backgroundColor:  primaryBackgroundColor,
            data: amountsIngress
        }, {
            label: secondatyLabel,
            data: amountsEgress,
            backgroundColor:secondaryBackgroundColor,
        }
    ]
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
    <div className="horizontalBarGraphics" style={valueWidth}>
        <h2>{title}</h2>
        <HorizontalBar data={data} options={options}/>
    </div>
    )
}

export default HorizontalBarTable;