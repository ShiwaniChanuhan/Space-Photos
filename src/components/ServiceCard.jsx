// ServiceCard.js
import React from "react";

const ServiceCard = ({ service, isSelected, onSelect }) => {
    const handleClick = () => {
        onSelect(service);
    };

    return (
        <div className={`booking_cards ${isSelected ? "primary_bg" : ""}`}>
            <div className="cards_head p_15" onClick={handleClick}>
              
                <div className="question_mark">
                    <img src={"/images/question.png"} alt="question_mark" />
                    <div className="tooltip_box">
                        <p>{service.tooltip}</p>
                    </div>
                </div>
                <img
                    src={service.image}
                    className="cards_img"
                    alt={service.title}
                />
                <h6>{service.title}</h6>
            </div>
            <div
                className={`cards_footer ${
                    service.options && service.options.length === 3
                        ? "Floor_option"
                        : "property_option"
                }`}
            >
                {isSelected &&
                    service.options &&
                    service.options.length !== 0 &&
                    service.options.map((el) => (
                        <div
                            className={`options ${
                                el.selected ? "primary_selection" : ""
                            }`}
                        >
                            <span>{el.label}</span>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ServiceCard;
