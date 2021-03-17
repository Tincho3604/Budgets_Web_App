import React,{useState,useEffect} from 'react';
import Header from '../../Component/Header/index';
import Footer from '../../Component/Footer/index'
import Bars from '../../Component/Graphics/Bars/index';
import Cake from '../../Component/Graphics/Cake/index';
import HorizontalBarTable from '../../Component/Graphics/HorizontalBarTable/index';
import {getAllRecords} from '../../Redux/actions/recordsActions';
import { connect } from 'react-redux';
import {loadLocalStorage, setLocalStorage} from '../../useLocalStorage/index';
import Axios from 'axios';
import {ROUTE_API} from '../../Constants/index';
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
    sumAmountsByAmount,
    amountIngress,
    amountEgress,
    valueWidth,
    sumArray,
    totalEgressIngress
} from '../../Constants/index';

import './style.css';

const Statistics = (props) => {
    const [ingress, setIngress] = useState([
        {id:'',amount:''},
    ])       
    
    const [egress, setEgress] = useState([
        {id:'',amount:''},
    ])
    
    const [general, setGeneral] = useState()

    ingress?.ingress?.map((item) => amountIngress[item.id] = item.amount)
    egress?.egress?.map((item) => amountEgress[item.id] = item.amount)

    const GraphicAmountIngress = totalEgressIngress(general, 'Ingress')
    const GraphicAmountEgress = totalEgressIngress(general, 'Egress')



useEffect(() => {
    Axios.get(`${ROUTE_API}/getAllRegisters`).then((response) => {
        setGeneral(response.data)
        setIngress({
            ingress: sumAmountsByAmount(response.data.filter(item => item.type === 'Ingress').map(item => {
                return { id: (parseNum(item.date)-1), amount: Math.round(item.amount * 100) / 100 };
            })
        )})

        setEgress({
            egress: sumAmountsByAmount(response.data.filter(item => item.type === 'Egress').map(item => {
                return { id: (parseNum(item.date)-1), amount: Math.round(item.amount * 100) / 100 };
            })
        )})

    }) 
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
                    amountsEgress={[ GraphicAmountEgress]}
                    amountsIngress={[ GraphicAmountIngress]}
                    primaryBackgroundColor={defaultBackgroundColorEgress}
                    secondaryBackgroundColor={defaultBackgroundColorIngress}
                    borderWidth={borderWidth}
                />

                <Cake 
                    title={defaultTitleCakeTable}
                    labels={types}
                    amountsEgress={ GraphicAmountEgress}
                    amountsIngress={ GraphicAmountIngress}
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


const mapDispatchToProps = {
    getAllRecords
}

export default connect(null, mapDispatchToProps)(Statistics)


