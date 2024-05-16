import React, { useEffect, useState } from 'react'
import { Routes,Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Test from '../pages/Test'
import Navbar from '../pages/navbar'
import Detail from '../pages/detail'
import FinalCheckout from '../pages/finalCheckout'

const AllRoutes = () => {

  const [step,setStep]=useState(1);
  console.log(step,"step")

  const location = useLocation();


  useEffect(() => {

    const pathname = location.pathname;
    if (pathname === '/') {
      setStep(1);
    } else if (pathname === '/detail') {
      setStep(2);
    } else if (pathname === '/finalcheckout') {
      setStep(3);
    }
  }, [location]);

  return (
    <div>
  <div className="section_steps">
            <h2>{step===1?"New Booking":step===2?"Details":"Checkout"}</h2>
            <div className="steps">
              <div className="step_1 steps_inner">
                <div  className={`step_check ${step>=1?"step_active":""} `}>
                  <img src={"/images/check.png"} alt="check" />
                </div>
                <h6>Select services</h6>
              </div>
              <span></span>
              <div className="step_2 steps_inner">
                <div className={`step_check ${step>=2?"step_active":""} `}>     <img src={"/images/check.png"} alt="check" /></div>
           
                <h6>Order details</h6>
              </div>
              <span></span>
              <div className="step_3 steps_inner">
                <div className={`step_check ${step>=3?"step_active":""} `}><img src={"/images/check.png"} alt="check" /></div>
                <h6>Finish</h6>
              </div>
            </div>
          </div>
    
        <Routes>
       
{/* <Route path="/" element={<Home/>} /> */}
<Route path="/" element={<Test setStep={setStep}/>} />
<Route path="/detail" element={<Detail setStep={setStep}/>} />
{/* <Route path="/finalcheckout" element={<FinalCheckout setStep={setStep}/>} /> */}
        </Routes>

    </div>
  )
}

export default AllRoutes;