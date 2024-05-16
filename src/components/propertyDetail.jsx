import React, { useState } from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, setOptions } from "@mobiscroll/react";
import { useNavigate } from "react-router-dom";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

const PropertyDetail = ({setStep}) => {
  const [form, setForm] = useState({
    address: "",
    propertype: "",
    propertyaccess: "",
    note: "",
    selectedDateTime: null, 
  });

  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  console.log(form);

  const handleDateTimeChange = (event, inst) => {
    // Extract the selected date and time
    const selectedDateTime = inst.getVal();
    setForm({ ...form, selectedDateTime });
  };


  return (
    <div className="main-prop">
      {/* ----rightside_____--------------------- */}
      <div className="property-form2">
        <span className="heading">Pick date and time</span>

        <div className="btn-opt">
          <button className="btn">Choose preferred Date and Time</button>
          <button className="btn1">As soon as possible</button>
        </div>
        <div className="datepicker">
          <Datepicker controls={["calendar", "time"]} display="inline" onChange={handleDateTimeChange}/>
        </div>
        <p>You can select multiple slots</p>
         <p>  We will come back with the confirmation or the nearest availability in email</p>
      </div>
      {/* ----left side--------------------- */}
      <div className="property-form">
        <span className="heading1">Property details</span>

        <label>Address *</label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Start typing"
        />
        <label>Property type *</label>
        <select
          name="propertype"
          value={form.propertype}
          onChange={handleChange}
        >
          <option value="">Choose an option </option>
          <option value="Option 1 ">Option 1 </option>
          <option value="Option 2 ">Option 2 </option>
          <option value="Option 3 ">Option 3 </option>
        </select>
        <label>Access to Property *</label>
        <select
          name="propertyaccess"
          value={form.propertyaccess}
          onChange={handleChange}
        >
          <option value="">Choose an option </option>
          <option value="Option 1 ">Option 1 </option>
          <option value="Option 2 ">Option 2 </option>
          <option value="Option 3 ">Option 3 </option>
        </select>
        <label>Notes</label>
        <textarea
          placeholder="Your comments"
          name="note"
          value={form.note}
          onChange={handleChange}
        />

        <div className="btn-opt2">
          <button className="button" onClick={()=>{setStep((prev)=>prev+1); navigate("/finalcheckout")}}>Continue</button>
          <button className="button1">Add another property</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
