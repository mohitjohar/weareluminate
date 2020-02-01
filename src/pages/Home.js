import React from 'react';
import { MDBContainer, MDBAnimation } from 'mdbreact';
import Header from '../components/header/Header';
import ImageWithText from '../components/imagewithtext/ImageWithText';

const Home = () => {
  return (
    <>
      <Header />
      <MDBContainer className="">
        <MDBAnimation reveal type="fadeInLeft">
          <span className="animated fadeInRight">hello</span>
        </MDBAnimation>
        <ImageWithText />
      </MDBContainer>
    </>
  );
};
export default Home;
