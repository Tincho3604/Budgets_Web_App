import React,{useState,useEffect} from 'react';
import Header from '../../Component/Header/index';
import Footer from '../../Component/Footer/index'
import Bars from '../../Component/Graphics/Bars/index';
import Cake from '../../Component/Graphics/Cake/index';
import HorizontalBarTable from '../../Component/Graphics/HorizontalBarTable/index';

import {
    defaultLabel, 
    Ingress, 
    Egress, 
    defaultBackgroundColorEgress, 
    defaultBackgroundColorIngress,
    borderWidth,
    defaultTitleBarTable,
    defaultTitleCakeTable,
    defaultHorizontalTable,
    types,
    months,
    parseNum,
    sumAmounts,
    amountIngress,
    amountEgress,
    valueWidth
} from '../../Constants/index';

import './style.css';

const Statistics = () => {
    
    const [ingress, setIngress] = useState([
        {id:'',amount:''},
    ])       
    
    const [egress, setEgress] = useState([
        {id:'',amount:''},
    ])
    
  ingress?.ingress?.map((item,index) => amountIngress[item.id] = item.amount)
  egress?.egress?.map((item,index) => amountEgress[item.id] = item.amount)

    useEffect(() => {
        const objGeneral = [
            // Primera Mitad
            {amount: "1000.59", concept: "cuotasremix", date: "2021-01-10",type: "Ingress"},
            {amount: "2000", concept: "cuotasremix", date: "2021-02-10",type: "Ingress"},
            {amount: "3000", concept: "cuotasremix", date: "2021-03-10",type: "Ingress"},
            {amount: "4000", concept: "cuotasremix", date: "2021-04-10",type: "Ingress"},
            {amount: "5000", concept: "cuotasremix", date: "2021-01-10",type: "Ingress"},
            
            // Segunda Mitad
            {amount: "6000", concept: "cuotasremix", date: "2021-05-10",type: "Egress"},
            {amount: "7000", concept: "cuotasremix", date: "2021-06-10",type: "Egress"},
            {amount: "8000", concept: "cuotasremix", date: "2021-03-10",type: "Egress"},
            {amount: "9000", concept: "cuotasremix", date: "2021-04-10",type: "Egress"},
            {amount: "10000", concept: "cuotasremix", date: "2021-05-10",type: "Egress"}
            ]
        
            setIngress({
                ingress: sumAmounts(objGeneral.filter(item => item.type === 'Ingress').map(item => {
                    return { id: parseNum(item.date), amount: Math.round(item.amount * 100) / 100 };
                })
            )})

            setEgress({
                egress: sumAmounts(objGeneral.filter(item => item.type === 'Egress').map(item => {
                    return { id: parseNum(item.date), amount: Math.round(item.amount * 100) / 100 };
                })
            )})
        
    }, []);

    return(
    <>
        <Header/>
        <div className="test">
            <div className="mainContainerGraphics">
                <Bars
                    title={defaultTitleBarTable}
                    labels={defaultLabel}
                    primaryLabel={Egress}
                    secondaryLabel={Ingress}
                    amountsEgress={[15,25,36]}
                    amountsIngress={[30,55,10]}
                    primaryBackgroundColor={defaultBackgroundColorEgress}
                    secondaryBackgroundColor={defaultBackgroundColorIngress}
                    borderWidth={borderWidth}
                />

                <Cake 
                    title={defaultTitleCakeTable}
                    labels={types}
                    amountsEgress={2500}
                    amountsIngress={2500}
                    primaryBackgroundColor={defaultBackgroundColorEgress}
                    secondaryBackgroundColor={defaultBackgroundColorIngress}
                    borderWidth={borderWidth}
                />
            </div>
                <HorizontalBarTable
                    valueWidth={valueWidth}
                    title={defaultHorizontalTable}
                    labels={months}
                    primaryLabel={Egress}
                    secondatyLabel={Ingress}
                    amountsEgress={amountEgress}
                    amountsIngress={amountIngress}
                    primaryBackgroundColor={defaultBackgroundColorEgress}
                    secondaryBackgroundColor={defaultBackgroundColorIngress}
                    borderWidth={borderWidth}
                />
        </div>
        <Footer/>
    </>
    )
}

export default Statistics