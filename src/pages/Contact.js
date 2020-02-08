import React from 'react';
import Header from '../components/header/Header';
import { Row, Col, Container } from 'reactstrap';
import CustomCard from '../components/customcard/CustomCard';

const Contact = () => {
  var Products = [
    {
      img: 'img/Home-md1.png',
      title: 'Straight Forward',
      desc:
        'We’re up-front about expressing what can be done to simplify and streamline your financial workflow. No beating around the bush!'
    },
    {
      color: true,
      img: 'img/Home-md3-2.png',
      title: 'Knowledgeable',
      desc:
        'We have the know-how and the experience when it comes to accounting, QuickBooks, the construction industry and project management software integration.'
    },
    {
      img: 'img/Home-md2-1.png',
      title: 'Non-Judgmental',
      desc:
        'It doesn’t matter to us what happened; we care about solving the issues. Together, we’ll figure out what needs to be done to move it forward.'
    }
  ];
  return (
    <>
      <Container className="pt-4">
        <Row className="align-items-center">
          <Col md={4}>
            <CustomCard item={Products[0]} />
            <CustomCard item={Products[2]} />
          </Col>
          <Col md={4}>
            <CustomCard item={Products[1]} />
          </Col>
          <Col md={4}>
            <h2 class="ttle-bott-bor">What makes us different</h2>
            We’re problem solvers! We take the time to know ‘you’ and find
            solutions that will streamline, automate and simplify your financial
            processes.
            <div>
              <a href="contact" class="custom-btn">
                Get Started
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Contact;
