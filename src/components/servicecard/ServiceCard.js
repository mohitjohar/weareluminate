import React from 'react';
import './style.scss';
import { Row, Col, Container } from 'reactstrap';
const ServiceCard = () => {
  var Products = [
    {
      color: true,
      img: 'img/Home-md1.png',
      title: 'Straight Forward',
      desc:
        'We’re up-front about expressing what can be done to simplify and streamline your financial workflow. No beating around the bush!'
    },
    {
      img: 'img/Home-md3-2.png',
      title: 'Knowledgeable',
      desc:
        'We have the know-how and the experience when it comes to accounting, QuickBooks, the construction industry and project management software integration.'
    },
    {
      color: true,
      img: 'img/Home-md2-1.png',
      title: 'Non-Judgmental',
      desc:
        'It doesn’t matter to us what happened; we care about solving the issues. Together, we’ll figure out what needs to be done to move it forward.'
    }
  ];

  return (
    <Container>
      <h2 class="ttle-bott-bor text-center mb-3">Our Services</h2>
      <p className="mb-5 text-center">
        Our services cover all or part of your financial workflow and we can
        take as little or as much as you’d like. We bridge the gap between
        QuickBooks and construction management software and collaborate with you
        ongoing to create a simple and streamlined financial process.
      </p>
      <Row>
        {Products.map(item => {
          return (
            <>
              <Col md={4}>
                <div className="servicecard mb-5">
                  <div class="servce-card-img">
                    <img src={item.img} />
                  </div>
                  <h3>{item.title}</h3>
                  {item.desc}
                </div>
              </Col>
            </>
          );
        })}
      </Row>
    </Container>
  );
};
export default ServiceCard;
