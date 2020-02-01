import React from 'react';
import './style.scss';
import { Row, Col } from 'reactstrap';
import { MDBBtn } from 'mdbreact';
const ImageWithText = () => {
  return (
    <div className="container-fluid">
      <Row>
        <Col
          data-test="animation"
          className="animated fadeInLeft bgcover"
          style={{ backgroundImage: 'url(img/home-team-1.jpg)' }}
          md={6}
        >
          <div className="spacer"></div>dfdfdfd
        </Col>
        <Col
          data-test="animation"
          className="animated fadeInRight bgfixed text-light pt-5 pb-5 pl-4 pr-4"
          style={{ backgroundImage: 'url(img/home-star-bg-1.jpg)' }}
          md={6}
        >
          <h3>We have your back!</h3>
          <p>
            We advise clients on how to establish secure, compliant, and
            efficient IT solutions, while working alongside them to help manage
            IT operations to increase efficiency and stability.
          </p>

          <MDBBtn color="primary">Meet our amazing team</MDBBtn>
        </Col>
      </Row>
    </div>
  );
};
export default ImageWithText;
