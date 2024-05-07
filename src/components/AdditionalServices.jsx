
import React, { useState } from "react";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import TooltipModal from "./modal";

const AdditionalServices = ({ service, isSelected, onSelect }) => {
    const [show, setShow] = useState(false);

  
    const handleClose = () => setShow(false)
    const handleClick = () => {
        onSelect(service);
    };

    
    return (
        <>
            <div
                className={`booking_cards booking_cardss ${isSelected ? "primary_bg" : ""}`}
                onClick={handleClick}
            >
                <div className="cards_head p_8">
                 
                              <div className="question_mark">
                    <AiTwotoneQuestionCircle onClick={()=>setShow(true)} />
              <TooltipModal show={show} handleClose={handleClose} tooltip={service.tooltip}/>
                </div>
                    <img src={service.image} className="cards_img" alt="" />
                    <h6>{service.title}</h6>
                </div>
            </div>
        </>
    );
};

export default AdditionalServices;
