import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#E3E3E3" }} className="py-md-5 py-4">
      <Container >
        <Row className="justify-content-between row-gap-3">
          <Col className="col-lg-6 col-12 col-md-4 text-lg-start text-center pb-3">
            <img className="nav_logo" src="/images/logo2.png" />
          </Col>
          <Col className="col-lg-3 col-md-4 col-sm-12 text-md-start text-center">
          
            <FaInstagram className="social_icon" />
            <FaFacebookF className="social_icon" />
            <p>020 3287 6610</p>
            <p>general@spacephoto.co.uk</p>
            <p>Terms and Conditions</p>
          </Col>

          <Col className="col-lg-3 col-12 col-md-4 col-sm-12  text-md-start text-center" >
            <p>Home</p>
            <p>About Us</p>
            <p>Products and Services</p>
            <p>Portfolio</p>
            <p className="mb-0">Shop</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
