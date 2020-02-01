import React from 'react';
import { MDBAnimation } from 'mdbreact';
import Header from '../components/header/Header';
import ImageWithText from '../components/imagewithtext/ImageWithText';

const Home = () => {
  return (
    <>
      <Header />
      {/* <MDBAnimation reveal type="fadeInLeft">
        <span className="animated fadeInRight">hello</span>
      </MDBAnimation> */}
      <ImageWithText />
    </>
  );
};
export default Home;
