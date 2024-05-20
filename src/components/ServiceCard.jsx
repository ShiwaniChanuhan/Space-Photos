// ServiceCard.js
import React, { useEffect, useState } from "react";
import TooltipModal from "./modal";
import { GoQuestion } from "react-icons/go";


const ServiceCard = ({ service, isSelected, onSelect }) => {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dynamicTitle, setDynamicTitle] = useState(service?.title);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionImage, setSelectedOptionImage] = useState(
    service?.image
  );
  const [selectedTooltip, setSelectedtooltip] = useState(
    service?.tooltip
  );
  useEffect(() => {
    const checkMobileScreen = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    checkMobileScreen();

    window.addEventListener("resize", checkMobileScreen);

    return () => {
      window.removeEventListener("resize", checkMobileScreen);
    };
  }, []);

  useEffect(() => {
    if (isMobile && service?.title === "Property Photography") {
      setDynamicTitle("Photo Session");
    } else {
      setDynamicTitle(service?.title);
    }
  }, [isMobile, service?.title]);

  const handleClose = () => setShow(false);




  // useEffect(() => {

  //   if (service.options) {
  //     const preSelectedOption = service.options.find(
  //       (option) => option.selected
  //     );
  //     if (preSelectedOption) {
  //       setSelectedOption(preSelectedOption.label);
    
  //     }
  //   }
  // }, [service.options]);
  useEffect(() => {
    // Set first option as selected when service options change
    if (service.options && service.options.length > 0) {
      const firstOptionLabel = service.options[0].label;
      handleOptionClick(firstOptionLabel);
    }
  }, [service.options]);

  const handleClick = () => {
    onSelect(service, "service");
   };
 
  const handleOptionClick = (option) => {
 
    setSelectedOption(option);
    const selectedOptionObj = service.options.find((el) => el.label === option);
    if (selectedOptionObj) {
      
      setSelectedOptionImage(selectedOptionObj.image);
      setSelectedtooltip(selectedOptionObj.tooltip)

    
    
    } 
  };



  

  return (
    <div className={`booking_cards`}>
      <div
        className={`cards_head p_15 ${isSelected ? "primary_bg" : ""}`}
        onClick={handleClick}
      >
        {/* Render service card content */}
        <div className="question_mark">
          <GoQuestion onClick={() => setShow(true)} />
          <TooltipModal
            show={show}
            handleClose={handleClose}
            tooltip={selectedTooltip}
          />
        </div>
        <img
          src={selectedOptionImage}
          className="cards_img"
          alt={service?.title}
        />
        <h6>{dynamicTitle}</h6>
      </div>
      {service.options ? (
        <div
          className={`cards_footer ${
            service?.options && service?.options.length === 3
              ? "Floor_option"
              : "property_option"
          }`}
        >
          {service.options  &&
            service.options.length !== 0 &&
            service.options.map((el) => (
              <div
                className={`${service.options.length===2?"cards_option2":"cards_option3"}  ${
                 isSelected && selectedOption === el.label ? "primary_selection" : ""
                }`}
                onClick={() => handleOptionClick(el.label)}
              >
                <span>{el.label}</span>
              </div>
            ))}
        </div>
      ) : (
        <div className="optionn"></div>
      )}
    </div>
  );
};

export default ServiceCard;
