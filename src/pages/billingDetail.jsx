import React from "react";

const BillingDetail = () => {
  return (
    <div className="item-2">
      <span className="heading2">Billing details</span>

      <div className="billing">
        {/* <div className='radio'>
     
          <input
            type="radio"
            value="option1"
            id="radio-btn"
            // checked={selectedOption === "option1"}
            // onChange={handleOptionChange}
          />
             <label>
 Pay with card <img src="images/visa.png" height="50px" width="50px"/><img src="images/mastercard.png" height="25px" width="50px"/>
        </label>
    
      </div> */}
        <div className="radio">
          <label>
            <input type="radio" name="gender" value="male" />
            <span className="custom-radio"></span> Pay with card{" "}
            <img src="images/visa.png" height="50px" width="50px" />
            <img src="images/mastercard.png" height="25px" width="50px" />
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="gender" value="male" />
            <span className="custom-radio"></span> Debit & Credit Cards{" "}
            <img src="images/visa.png" height="50px" width="50px" />
            <img src="images/mastercard.png" height="25px" width="50px" />
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="gender" value="male" />
            <span className="custom-radio"></span>{" "}
            <img src="images/paypal.png" height="50px" width="50px" />
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="gender" value="male" />
            <span className="custom-radio"></span>{" "}
            <img src="images/apple-pay.png" height="50px" width="50px" />
          </label>
        </div>

        <div className="checkbox">

        
          <input type="checkbox" style={{ width: "20px" }} />
          <p> I accept the term and condition *</p> 
        </div>
      </div>
    </div>
  );
};

export default BillingDetail;
