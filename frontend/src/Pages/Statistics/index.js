import React from 'react';
import Header from '../../Component/Header/index';
import Footer from '../../Component/Footer/index'
import Bars from '../../Component/Graphics/Bars/index';
import Cake from '../../Component/Graphics/Cake/index';
import {
    defaultLabel, 
    Ingress, 
    Egress, 
    defaultBackgroundColorEgress, 
    defaultBackgroundColorIngress,
    borderWidth,
    defaultTitleBarTable,
    defaultTitleCakeTable,
    types
} from '../../Constants/index';

import './style.css';

const Statistics = () => {
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
                <Bars valueWidth={{width:'100%'}}/>
        </div>
        <Footer/>
    </>
    )
}

export default Statistics