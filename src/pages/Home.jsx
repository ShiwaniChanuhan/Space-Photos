import React from 'react'

const Home = () => {
  return (
    <div className="home">
    <section>
      <div className="container">
        <div className='section_steps'>
          <h2>New Booking</h2>
          <div className='steps'>
            <div className='step_1 steps_inner'>
              <div className='step_check step_active'>
                <img src={'/images/check.png'} alt='check'/>
              </div>
              <h6>Select services</h6>
            </div>
            <span></span>
            <div className='step_2 steps_inner'>
              <div className='step_check '>
                
              </div>
              <h6>Order details</h6>
            </div>
            <span></span>
            <div className='step_3 steps_inner'>
              <div className='step_check '>
                
              </div>
              <h6>Finish</h6>
            </div>
          </div>
        </div>
        <div className='section_content'>
          <div className='services_required'>
            <div className="new_booking_heading">
              <h5>Please select services required *</h5>
            </div>
            <div className="new_booking_content">
              <div className="booking_cards">
                <div className="cards_head p_15">
                  <div className="question_mark">
                    <img src={'/images/question.png'} alt="question_mark" />
                    <div className='tooltip_box'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                  </div>
                  <img src={'/images/Visual_tours.png'} className="cards_img" alt="" />
                  <h6>3D Visual tours</h6>
                </div>
              </div>
              <div className="booking_cards primary_bg">
                <div className="cards_head p_15 pb_0">
                  <div className="question_mark">
                    <img src={'/images/question.png'} alt="question_mark" />
                    <div className='tooltip_box'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                  </div>
                  <img src={'/images/camera.png'} className="cards_img" alt="" />
                  <h6>Property Photography</h6>
                </div>
                <div className="cards_footer property_option">
                  <div className="options">
                    <span>Budget option</span>
                  </div>
                  <div className="options primary_selection">
                    <span>Quality option</span>
                  </div>
                </div>
              </div>
              <div className="booking_cards">
                <div className="cards_head p_15">
                  <div className="question_mark">
                    <img src={'/images/question.png'} alt="question_mark" />
                    <div className='tooltip_box'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                  </div>
                  <img src={'/images/video-camera.png'} className="cards_img" alt="" />
                  <h6>Walkthrough video</h6>
                </div>
              </div>
              <div className="booking_cards primary_bg">
                <div className="cards_head p_15 pb_0">
                  <div className="question_mark">
                    <img src={'/images/question.png'} alt="question_mark" />
                    <div className='tooltip_box'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                  </div>
                  <img src={'/images/floorplan.png'} className="cards_img" alt="" />
                  <h6>Floor Plan</h6>
                </div>
                <div className="cards_footer Floor_option">
                  <div className="options">
                    <span>HMO</span>
                  </div>
                  <div className="options primary_selection">
                    <span>Illustrative</span>
                  </div>
                  <div className="options">
                    <span>Lease Plan</span>
                  </div>
                </div>
              </div>
              <div className="booking_cards">
                <div className="cards_head p_15">
                  <div className="question_mark">
                    <img src={'/images/question.png'} alt="question_mark" />
                    <div className='tooltip_box'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                  </div>
                  <img src={'/images/epc.png'} className="cards_img" alt="" />
                  <h6>EPC</h6>
                </div>
              </div>
            </div>
          </div>
          <div className='select_services'>
            <div className="new_booking_heading">
              <h5>Or select services in a package</h5>
            </div>
            <div className="new_booking_content">
              <div className="services_cards secondary_bg">
                <div className="cards_head">
                  <div className="question_mark">
                    <img src={'/images/question.png'} alt="question_mark" />
                    <div className='tooltip_box'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                  </div>
                  <div className='service__img'>
                    <img src={'/images/camera.png'} className="cards_img" alt="" />
                    <img src={'/images/floorplan.png'} className="cards_img" alt="" />
                  </div>
                  <div className='service_plus'>
                    <h6>Photos</h6>
                    <span>+</span>
                    <h6>Floor Plan</h6>
                  </div>
                </div>
              </div>
              <div className="services_cards">
                <div className="cards_head">
                  <div className="question_mark">
                    <img src={'/images/question.png'} alt="question_mark" />
                    <div className='tooltip_box'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                  </div>
                  <div className='service__img'>
                    <img src={'/images/camera.png'} className="cards_img" alt="" />
                    <img src={'/images/video-camera.png'} className="cards_img" alt="" />
                  </div>
                  <div className='service_plus'>
                    <h6>Photos</h6>
                    <span>+</span>
                    <h6>Video</h6>
                  </div>
                </div>
              </div>
              <div className="services_cards">
                <div className="cards_head">
                  <div className="question_mark">
                    <img src={'/images/question.png'} alt="question_mark" />
                    <div className='tooltip_box'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                  </div>
                  <div className='service__img'>
                    <img src={'/images/camera.png'} className="cards_img" alt="" />
                    <img src={'/images/floorplan.png'} className="cards_img" alt="" />
                    <img src={'/images/video-camera.png'} className="cards_img" alt="" />
                  </div>
                  <div className='service_plus'>
                    <h6>Photos</h6>
                    <span>+</span>
                    <h6>Floor Plan</h6>
                    <span>+</span>
                    <h6>Video</h6>
                  </div>
                </div>
              </div>
              <div className="services_cards">
                <div className="cards_head">
                  <div className="question_mark">
                    <img src={'/images/question.png'} alt="question_mark" />
                    <div className='tooltip_box'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                  </div>
                  <div className='service__img'>
                    <img src={'/images/camera.png'} className="cards_img" alt="" />
                    <img src={'/images/floorplan.png'} className="cards_img" alt="" />
                    <img src={'/images/epc.png'} className="cards_img" alt="" />
                  </div>
                  <div className='service_plus'>
                    <h6>Photos</h6>
                    <span>+</span>
                    <h6>Floor Plan</h6>
                    <span>+</span>
                    <h6>EPC</h6>
                  </div>
                </div>
              </div>
              <div className="services_cards">
                <div className="cards_head">
                  <div className="question_mark">
                    <img src={'/images/question.png'} alt="question_mark" />
                    <div className='tooltip_box'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                  </div>
                  <div className='service__img'>
                    <img src={'/images/camera.png'} className="cards_img" alt="" />
                    <img src={'/images/epc.png'} className="cards_img" alt="" />
                  </div>
                  <div className='service_plus'>
                    <h6>Floor Plan</h6>
                    <span>+</span>
                    <h6>EPC</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='additional_services'>
            <div className="new_booking_heading">
              <h5>Additional services</h5>
            </div>
            <div className="additional_services_content">
              <div className="booking_cards">
                <div className="cards_head p_8">
                  <div className="question_mark">
                    <img src={'/images/question.png'} alt="question_mark" />
                    <div className='tooltip_box'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                  </div>
                  <img src={'/images/house.png'} className="cards_img" alt="" />
                  <h6>Declutter the poperty</h6>
                </div>
              </div>
              <div className="booking_cards primary_bg">
                <div className="cards_head p_8">
                  <div className="question_mark">
                    <img src={'/images/question.png'} alt="question_mark" />
                    <div className='tooltip_box'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                  </div>
                  <img src={'/images/images.png'} className="cards_img" alt="" />
                  <h6>Choice of images</h6>
                </div>
              </div>
              <div className="booking_cards">
                <div className="cards_head p_8">
                  <div className="question_mark">
                    <img src={'/images/question.png'} alt="question_mark" />
                    <div className='tooltip_box'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                  </div>
                  <img src={'/images/furniture.png'} className="cards_img" alt="" />
                  <h6>Add furniture to floor plan</h6>
                </div>
              </div>
            </div>
          </div>
          <div className='total_cost'>
            <h4 className='total_cost_head'>Your total cost</h4>
            <div className='total_cost_content'>
              <h4>£135.00</h4>
              <h5>instead of £177.00</h5>
              <span>* excluding VAT</span>
            </div>
            <div className='continue_btn'>
              <a href='{}'>Continue</a>
            </div>
          </div>
        </div>
        <div className='additional_info'>
          <p>Working hours are Mon. - Fri. 9 AM to 5 PM</p>
          <p>The displayed prices are applicable for London within M25 area</p>
          <p>For services required outside of this region or during non-standard working hours, please feel free to contact us for further assistance</p>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Home