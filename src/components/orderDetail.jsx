import React from 'react'

const OrderDetail = () => {
  return (
    <div className='order-form'>

         <span className="heading1">Order details</span>

        <label>Name *</label>
        <input
          type="text"
          name="name"
      
        />
            <label>Contact Number * </label>
        <input
          type="email"
          name="u8u"
      
        />
            <label>Email Address *</label>
        <input
          type="text"
          name="u8yu8"
      
        />
            <label>Comapny name (Optional)</label>
        <input
          type="text"
          name="y7yu"
      
        />

        
    </div>
  )
}

export default OrderDetail;
