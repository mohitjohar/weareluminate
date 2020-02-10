import React from 'react';
import './style.scss';
import { Row, Col } from 'reactstrap';
import { MDBBtn } from 'mdbreact';
const PostHoverRead = () => {
  var posts = [
    {
      img: 'img/workshopimg4-1024x1024.png',
      title: 'Mental health awareness training',
      link: '#'
    },
    {
      img: 'img/workshopimg4-1024x1024.png',
      title: 'Mental health awareness training',
      link: '#'
    },
    {
      img: 'img/workshopimg4-1024x1024.png',
      title: 'Mental health awareness training',
      link: '#'
    },
    {
      img: 'img/workshopimg4-1024x1024.png',
      title: 'Mental health awareness training',
      link: '#'
    },
    {
      img: 'img/workshopimg4-1024x1024.png',
      title: 'Mental health awareness training',
      link: '#'
    },
    {
      img: 'img/workshopimg4-1024x1024.png',
      title: 'Mental health awareness training',
      link: '#'
    }
  ];

  return (
    <div className="container posthoverread">
      <Row>
        {posts.map(items => {
          return (
            <>
              <Col
                className="animated fadeInBottom bgcover"
                data-test="animation"
                style={{
                  backgroundImage: `url(${items.img})`
                }}
                md={4}
              >
                <h3 className="position-relative">{items.title}</h3>
                <a href={items.link} className="linkabsolute">
                  <MDBBtn color="primary" href={items.link}>
                    Read More
                  </MDBBtn>
                </a>
              </Col>
            </>
          );
        })}
      </Row>
    </div>
  );
};
export default PostHoverRead;
