// AdditionalServices.js
import React from "react";

const AdditionalServices = ({ service, isSelected, onSelect }) => {
    const handleClick = () => {
        onSelect(service);
    };

    return (
        <>
            <div
                className={`booking_cards ${isSelected ? "primary_bg" : ""}`}
                onClick={handleClick}
            >
                <div className="cards_head p_8">
                    <div className="question_mark">
                        <img src={"/images/question.png"} alt="question_mark" />
                        <div className="tooltip_box">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                    </div>
                    <img src={service.image} className="cards_img" alt="" />
                    <h6>{service.title}</h6>
                </div>
            </div>
        </>
    );
};

export default AdditionalServices;
