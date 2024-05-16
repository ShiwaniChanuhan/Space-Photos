import React from 'react'
import OrderDetail from '../components/orderDetail';
import BillingDetail from './billingDetail';
import { RiDeleteBin6Line } from 'react-icons/ri';


const FinalCheckout = () => {
  return (
    <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-4 col-md-6'>
            <OrderDetail/>
          </div>
          <div className='col-xl-4 col-md-6 order-xl-0 order-2'>
           <BillingDetail/>
          </div>
          <div className='col-xl-4 col-md-6'>
          <div className='item-3'>
            <span className="head">Billing details</span>
<table className="subtotal table">
  <thead className="thead-dark">
    <tr>
    
      <th scope="col">Product</th>
      <th scope="col">Subtotal</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr className='table__tr'>
    
      <td className='table__td fw-bold'>Standard Photos + Floor Plan</td>
      <td className='table__tdd fw-normal'>£145.20 (incl. VAT)</td>
      <td><RiDeleteBin6Line/></td>
    </tr>
    <tr>
  
      <td className='border-0 table__td fw-bold'>Total</td>
      <td className='border-0 fw-normal'>£255.60 (incl. VAT)</td>
      
    </tr>
   
  </tbody>
</table>
</div>
          </div>
       
      
     

        </div>
        <button className='order-btn'>Place order</button>
     
    </div>
  )
}

export default FinalCheckout;
