
import React from "react";

const PackageServices = ({ service, isSelected, onSelect }) => {
    const handleClick = () => {
        onSelect(service);
    };

    return (
        <>
            <div 
                className={`services_cards ${isSelected ? "secondary_bg" : ""}`}
                onClick={handleClick}
            >
                <div className="cards_head">
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
