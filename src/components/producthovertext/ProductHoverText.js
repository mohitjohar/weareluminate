import React from 'react';
import './style.scss';
import { Row, Col, Container } from 'reactstrap';
const ProductHoverText = () => {
  var Products = [
    {
      img: 'img/NEC-LT25.webp',
      title: 'NEC LT25 (or similar)',
      desc: 'DLP 2300 lumens XGA',
      rate: 'from £50 per day',
      rtecntnt: '*All prices exclude VAT*'
    },
    {
      img: 'img/Sanyo-XU106.webp',
      title: 'Sanyo XU106',
      desc: 'LCD 4500 lumens XGA',
      rate: 'from £100 per day',
      rtecntnt: '*All prices exclude VAT*'
    },
    {
      active: true,
      img: 'img/Panasonic.webp',
      title: 'Panasonic DZ680',
      desc: 'DLP 6,500 lumens WUXGA',
      rate: 'from £350 per day incl. lens',
      rtecntnt: '*All prices exclude VAT*'
    },
    {
      img: 'img/Panasonic-EX12k.webp',
      title: 'Panasonic EX12k',
      desc: 'DLP 13,000 lumens XGA',
      rate: 'from £750 per day',
      rtecntnt: '*All prices exclude VAT*'
    },
    {
      img: 'img/Panasonic-RZ120.webp',
      title: 'Panasonic RZ120',
      desc: 'Laser DPL 12,000 lumens WUXGA',
      rate: 'from £750 a day',
      rtecntnt: '*All prices exclude VAT*'
    }
  ];

  return (
    <Container>
      <Row>
        {Products.map(item => {
          return (
            <>
              <Col>
                <div
                  className={
                    item.active ? 'producthovertext active' : 'producthovertext'
                  }
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <div className="overlay-product">
                    <div>
                      <div class="prdct-ttle">{item.title}</div>
                      <div class="prdct-des">{item.desc}</div>
                    </div>
                    <div>
                      <div class="prdct-rate">{item.rate}</div>
                      <div class="rtecntnt">{item.rtecntnt}</div>
                    </div>
                  </div>
                </div>
              </Col>
            </>
          );
        })}
      </Row>
    </Container>
  );
};
export default ProductHoverText;
