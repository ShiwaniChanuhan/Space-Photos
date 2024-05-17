// ServiceCard.js
import React, { useEffect, useState } from "react";
import TooltipModal from "./modal";
import { AiTwotoneQuestionCircle } from "react-icons/ai";

const ServiceCard = ({ service, isSelected, onSelect }) => {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dynamicTitle, setDynamicTitle] = useState(service?.title);

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

  const handleClick = () => {
    onSelect(service, "service");
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionImage, setSelectedOptionImage] = useState(
    service?.image
  );
  const [selectedTooltip, setSelectedtooltip] = useState(
    service?.tooltip
  );

  useEffect(() => {
    if (service.options) {
      const preSelectedOption = service.options.find(
        (option) => option.selected
      );
      if (preSelectedOption) {
        setSelectedOption(preSelectedOption.label);
      }
    }
  }, [service.options]);

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
          <AiTwotoneQuestionCircle onClick={() => setShow(true)} />
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
          {service.options &&
            service.options.length !== 0 &&
            service.options.map((el) => (
              <div
                className={`options ${
                  selectedOption === el.label ? "primary_selection" : ""
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
