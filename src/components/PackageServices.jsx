// PackageServices.js
import React, { useState } from "react";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import TooltipModal from "./modal";

const PackageServices = ({ service, isSelected, onSelect }) => {

    const [show, setShow] = useState(false);

  
    const handleClose = () => setShow(false);
    const handleClick = () => {
        onSelect(service,"packaged");
    };

    return (
        <>
            <div
                className={`services_cards ${isSelected ? "secondary_bg" : ""}`}
                onClick={handleClick}
            >
                <div className="cards_head select__services">
                    {/* <div className="question_mark">
                        <img src={"/images/question.png"} alt="question_mark" />
                        <div className="tooltip_box">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                    </div> */}
                       <div className="question_mark">
                    <AiTwotoneQuestionCircle onClick={()=>setShow(true)} />
              <TooltipModal show={show} handleClose={handleClose} tooltip={service.tooltip}/>
                </div>
                    <div className="service__img">
                   {   service.images.map((el)=>(
                    <img
                            src={el}
                            className="cards_img"
                            alt=""
                        />
                   ))  }
                    </div>
                    <div className="service_plus">
                        <h6>{service.title}</h6>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PackageServices;
