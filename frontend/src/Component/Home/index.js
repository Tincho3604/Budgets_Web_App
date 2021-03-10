import React from 'react'
import Header from '../Header/index'
import Footer from '../Footer/index'
import Balance from '../Balance/index'
import './style.css'

const Home = () => {
return (
    <>
 
    <Header/>
    <div className="mainHome">
  
        <Balance/>
    
        <Footer/>
    </div>
</>
)
}

export default Home