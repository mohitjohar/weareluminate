import React from 'react';
import './style.scss';
import { Container, Row, Col } from 'reactstrap';
import { MDBContainer, MDBBtn, MDBAnimation } from 'mdbreact';
const ImageWithText = () => {
  return (
    <>
      <Row>
        <Col data-test="animation" className="animated fadeInLeft">
          <div className="spacer"></div>dfdfdfd
        </Col>
        <Col data-test="animation" className="animated fadeInRight">
          <h3>We have your back!</h3>
          <p>
            We advise clients on how to establish secure, compliant, and
            efficient IT solutions, while working alongside them to help manage
            IT operations to increase efficiency and stability.
          </p>

          <MDBBtn color="primary">Meet our amazing team</MDBBtn>
        </Col>
      </Row>
    </>
  );
};
export default ImageWithText;
