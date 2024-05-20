
import React, { useState } from "react";
import { GoQuestion } from "react-icons/go";
import TooltipModal from "./modal";

const AdditionalServices = ({ service, isSelected, onSelect,additional}) => {
    const [show, setShow] = useState(false);

  
    const handleClose = () => setShow(false)
    const handleClick = () => {
        onSelect(service);
    };

    const isVisible = additional.some(item => item.case === service.case);
    // console.log(isVisible,"isvisivlble")

    // console.log(additional,"additional")
    
    return (
        <>
            <div
                className={`booking_cards booking_cardss ${isSelected ? "primary_bg" : ""}`}
                // onClick={handleClick}
                onClick={isVisible ? handleClick : undefined}
     
            >
                <div className="cards_head p_8 Additional__services">
                 
                              <div className="question_mark">
                    <GoQuestion onClick={()=>setShow(true)} />
              <TooltipModal show={show} handleClose={handleClose} tooltip={service.tooltip}/>
                </div>
                    <img src={service.image} className="cards_img" alt="" />
                    <h6>{service.title}</h6>
                </div>
                {!isVisible && (
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgb(220 220 220 / 38%)" ,cursor:"not-allowed"}} />
                )}
            </div>
        </>
    );
};

export default AdditionalServices;
