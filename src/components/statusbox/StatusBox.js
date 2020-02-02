import React from 'react';
import './style.scss';
import { Row, Col } from 'reactstrap';
import { MDBBtn } from 'mdbreact';
const StatusBox = () => {
  const posts = [
    {
      img: 'img/liveevent.png',
      bg: 'img/shutterstock.jpg',
      title: 'Live Event AV',
      link: '#'
    },
    {
      img: 'img/liveevent.png',
      bg: 'img/shutterstock.jpg',
      title: 'Live Event AV',
      link: '#'
    }
  ];
  return (
    <div className="container">
      <Row>
        <Col
          className="bgcover statusbox active"
          md={4}
          style={{ backgroundImage: `url(${posts[0].bg})` }}
        >
          <div className="position-relative">
            <div className="text-center">
              <img src="img/liveevent.png" className="statusicon" />
            </div>
            <h3>Live Event AV</h3>
            <ul>
              <li>Meetings</li>
              <li>Conferences</li>
              <li>Seminars</li>
              <li>Awards Ceremonies</li>
              <li>Road Shows</li>
            </ul>
            <MDBBtn color="primary">Find More</MDBBtn>
          </div>
          <a
            href={posts[0].link}
            className="position-absolute h-100 w-100 left-0 top-0"
          ></a>
        </Col>
        {posts.map(p => {
          return (
            <>
              <Col
                className="bgcover statusbox"
                md={4}
                style={{ backgroundImage: `url(${p.bg})` }}
              >
                <div className="position-relative">
                  <div className="text-center">
                    <img src={p.img} className="statusicon" />
                  </div>
                  <h3>{p.title}</h3>
                  <ul>
                    <li>Meetings</li>
                    <li>Conferences</li>
                    <li>Seminars</li>
                    <li>Awards Ceremonies</li>
                    <li>Road Shows</li>
                  </ul>
                  <MDBBtn color="primary">Find More</MDBBtn>
                </div>
                <a
                  className="position-absolute h-100 w-100 left-0 top-0"
                  href={p.link}
                ></a>
              </Col>
            </>
          );
        })}
      </Row>
    </div>
  );
};
export default StatusBox;
