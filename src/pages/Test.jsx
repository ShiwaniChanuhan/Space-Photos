// Home.js
import React, { useEffect, useState } from "react";
import {
  servicesData,
  additionalServicesData,
  packagedServicesData,
} from "../components/servicesData";
import ServiceCard from "../components/ServiceCard";
import PackageServices from "../components/PackageServices";
import AdditionalServices from "../components/AdditionalServices";
import { Link, useNavigate } from "react-router-dom";

const Test = ({setStep}) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const [packagePrice, setPackagePrice] = useState(0);
  const [packaged, setPackaged] = useState([]);
  const [services, setServices] = useState([]);
  const [additional, setAdditional] = useState([]);
const navigate=useNavigate();
  useEffect(() => {
 let serviceCost = 0;
  let packageCost = 0;

    selectedServices.forEach((service) => {
      if (service.type === "service") {
        serviceCost += service.price || 0;
      } else if (service.type === "packaged") {
        packageCost = service.price || 0;

        const matchingServicesToAdd = selectedServices.filter(
          (individualService) => {
            if (individualService.type === "service") {
              return !service.images.some((image) => {
                if (individualService.image === image) {
                  return individualService;
                }
              });
            }
          }
        );

        if (matchingServicesToAdd) {
          matchingServicesToAdd.forEach((item) => {
            packageCost += item.price || 0;
          });
        }
        // console.log(
        //   matchingServicesToAdd.map((el) => el.price),
        //   "image=============================================================>>>>>>>>>>>>>>"
        // );
      }
    });
    setTotalCost(serviceCost);
    setPackagePrice(packageCost);
  }, [selectedServices]);

  const handleServiceSelect = (service, type) => {
    setSelectedServices((prevSelected) => {
      let updatedSelected = [...prevSelected];
      if (prevSelected.includes(service)) {
        updatedSelected = updatedSelected.filter(
          (selected) => selected !== service
        );
      } else {
        updatedSelected = [...updatedSelected, service];
      }

      if (type === "service") {
        const selectedcase = updatedSelected.map((service) => service?.case);
        
        let additionalServicesFiltered = additionalServicesData.filter(
          (service) => selectedcase.includes(service.case)
        );

        if (prevSelected.includes(service)) {
          additionalServicesFiltered = updatedSelected.filter(
            (servicedata) =>
              servicedata.case && servicedata.case !== service.case
          );
        }
       
        const selectedImages = updatedSelected.map((service) => service?.image);

        const matchingPackagedService = packagedServicesData.filter(
          (packagedService) =>
            packagedService.images.every((image) =>
              selectedImages.includes(image)
            )
        );

        matchingPackagedService.sort((a, b) => {
          const imagesALength = a.images.length;
          const imagesBLength = b.images.length;
          return imagesALength - imagesBLength;
        });
        const value =
          matchingPackagedService[matchingPackagedService.length - 1];

        if (value) {
          setPackaged([value]);

          updatedSelected = [
            value,

            ...updatedSelected.filter(
              (service) => service?.type === "service" && service?.new
            ),
            ...additionalServicesFiltered,
          ];
        } else {
          updatedSelected = [
            ...updatedSelected.filter(
              (service) => service?.type === "service" && service?.new
            ),
            ...additionalServicesFiltered,
          ];
        }
      } else if (type === "packaged") {
        let additionalServicesFiltered;

        if (prevSelected.includes(service)) {
          const matchingServicesToRemove = servicesData.filter(
            (individualService) => {
              return service.images.some(
                (image) => individualService.image === image
              );
            }
          );

          
          updatedSelected = updatedSelected.filter(
            (selected) => !matchingServicesToRemove.includes(selected)
          );
       

          additionalServicesFiltered = updatedSelected.filter((servicedata) => {
            if (servicedata.case == "camera") {
              return;
            } else if (servicedata.case == "floor plan") {
              return;
            } else {
              return servicedata;
            }
          });
          updatedSelected = [...additionalServicesFiltered];
        } else {
          let matchingServicesToAdd = servicesData.filter(
            (individualService) => {
              return service.images.some(
                (image) => individualService.image === image
              );
            }
          );

          const selectedcase = matchingServicesToAdd.map(
            (service) => service?.case
          );
         
          additionalServicesFiltered = additionalServicesData.filter(
            (service) => selectedcase.includes(service.case)
          );

          updatedSelected = [
            ...matchingServicesToAdd,
            service,
            ...additionalServicesFiltered,
          ];
        }
      }

      return updatedSelected;
    });
  };

  console.log(selectedServices, "sdfsjj");

  return (
    <div className="home">
      <section>
        <div className="container">
          {/* <div className="section_steps">
            <h2>New Booking</h2>
            <div className="steps">
              <div className="step_1 steps_inner">
                <div className="step_check step_active">
                  <img src={"/images/check.png"} alt="check" />
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
          </div> */}
          {/* Your JSX content */}
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
                    isSelected={selectedServices.includes(service)}
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
                    isSelected={selectedServices.includes(service)}
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
                    isSelected={selectedServices.includes(service)}
                    onSelect={handleServiceSelect}
                  />
                ))}
              </div>
            </div>

            <div className="total_cost">
              <h4 className="total_cost_head">Your total cost</h4>
              <div className="total_cost_content">
                <h4>£{packagePrice === 0 ? totalCost : packagePrice}</h4>
                {packagePrice > 0 && (
                  <div style={{ display: "flex" }}>
                    <h5>instead of £{totalCost.toFixed(2)}</h5>
                    <span>* excluding VAT</span>
                  </div>
                )}
              </div>
              <div className="continue_btn" onClick={()=>{setStep((prev)=>prev+1); navigate("/detail")}}>
             <button>Continue</button>
                  
                
              </div>
            </div>
          </div>
          <div className="additional_info">
            <p>Working hours are Mon. - Fri. 9 AM to 5 PM</p>
            <p>
              The displayed prices are applicable for London within M25 area
            </p>
            <p>
              For services required outside of this region or during
              non-standard working hours, please feel free to contact us for
              further assistance
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Test;
