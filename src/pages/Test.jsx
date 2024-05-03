// Home.js
import React, { useEffect, useState } from "react";
import {servicesData,additionalServicesData,packagedServicesData} from "../components/servicesData";
import ServiceCard from "../components/ServiceCard";
import PackageServices from "../components/PackageServices";
import AdditionalServices from "../components/AdditionalServices";

const Test = () => {
    const [selectedServices, setSelectedServices] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        // Calculate the total cost when selectedServices or their options change
        let cost = 0;
        selectedServices.forEach(service => {
            cost += service.price || 0; // Add base price of service
            if (service.options) {
                service.options.forEach(option => {
                    if (option.selected) {
                        cost += option.price || 0; // Add price of selected option
                    }
                });
                if (cost > 100) {
                    cost *= 0.9;
                }
            }
        });
        setTotalCost(cost);
    }, [selectedServices]);

    const handleServiceSelect = (service) => {
        setSelectedServices((prevSelected) => {
            if (prevSelected.includes(service)) {
                return prevSelected.filter((selected) => selected !== service);
            } else {
                return [...prevSelected, service];
            }
        });
    };

    // console.log(totalCost,selectedServices)
    return (
        <div className="home">
            <section>
                <div className="container">
                    <div className="section_steps">
                        <h2>New Booking</h2>
                        <div className="steps">
                            <div className="step_1 steps_inner">
                                <div className="step_check step_active">
                                    <img
                                        src={"/images/check.png"}
                                        alt="check"
                                    />
                                </div>
                                <h6>Select services</h6>
                            </div>
                            <span></span>
                            <div className="step_2 steps_inner">
                                <div className="step_check "></div>
                                <h6>Order details</h6>
                            </div>
                            <span></span>
                            <div className="step_3 steps_inner">
                                <div className="step_check "></div>
                                <h6>Finish</h6>
                            </div>
                        </div>
                    </div>
                    {/* Service card section*/}
                    <div className="section_content">
                        <div className="services_required">
                            <div className="new_booking_heading">
                                <h5>Please select services required *</h5>
                            </div>
                            <div className="new_booking_content">
                                {servicesData.map((service, index) => (
                                    <ServiceCard
                                        key={index}
                                        service={service}
                                        isSelected={selectedServices.includes(
                                            service
                                        )}
                                        onSelect={handleServiceSelect}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Packages section */}
                        <div className="select_services">
                            <div className="new_booking_heading">
                                <h5>Or select services in a package</h5>
                            </div>
                            <div className="new_booking_content">
                                {packagedServicesData.map((service, index) => (
                                    <PackageServices
                                        key={index}
                                        service={service}
                                        isSelected={selectedServices.includes(
                                            service
                                        )}
                                        onSelect={handleServiceSelect}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Additional section */}
                        <div className="additional_services">
                            <div className="new_booking_heading">
                                <h5>Additional services</h5>
                            </div>
                            <div className="additional_services_content">
                                {additionalServicesData.map((service, index) => (
                                    <AdditionalServices
                                        key={index}
                                        service={service}
                                        isSelected={selectedServices.includes(
                                            service
                                        )}
                                        onSelect={handleServiceSelect}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="total_cost">
                            <h4 className="total_cost_head">Your total cost</h4>
                            <div className="total_cost_content">
                                <h4>£{totalCost.toFixed(2)}</h4>
                                <h5>instead of £{(totalCost * 1.1).toFixed(2)}</h5>
                                <span>* excluding VAT</span>
                            </div>
                            <div className="continue_btn">
                                <a href="">Continue</a>
                            </div>
                        </div>
                    </div>
                    <div className="additional_info">
                        <p>Working hours are Mon. - Fri. 9 AM to 5 PM</p>
                        <p>
                            The displayed prices are applicable for London
                            within M25 area
                        </p>
                        <p>
                            For services required outside of this region or
                            during non-standard working hours, please feel free
                            to contact us for further assistance
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Test;
