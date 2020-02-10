import React from 'react';
import './style.scss';
import dateimg from './../../img/date-icon.png';
import { Row, Col, Container } from 'reactstrap';
const MkBlog = () => {
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
      <h2 class="text-center ttle-bott-bor mb-5">Blogs</h2>
      <Row>
        {Products.map(item => {
          return (
            <>
              <Col md={4}>
                <div className="mk-blog">
                  <img src="img/blog.jpg" className="w-100 mk-blog-img" />
                  <div className="mk-blog-body">
                    <div class="entry-date">
                      <img src={dateimg} />
                      &nbsp;&nbsp; January 06th,2020
                    </div>
                    <h2 className="mk-blog-title">
                      <a href="">
                        Subcontractor Management Plan: A Template for Success
                      </a>
                    </h2>
                    <div className="mk-blog-cat">Category</div>
                    <a href="" className="btn btn-primary">
                      Read More &nbsp;&nbsp;{' '}
                      <i className="fa fa-arrow-right"></i>
                    </a>
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
export default MkBlog;
