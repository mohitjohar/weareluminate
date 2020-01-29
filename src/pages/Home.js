import React from 'react';
import { MDBContainer, MDBAnimation } from 'mdbreact';
import Header from '../components/header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <MDBContainer className="">
        <MDBAnimation reveal type="fadeInLeft">
          <span className="animated fadeInRight">hello</span>
        </MDBAnimation>
      </MDBContainer>
    </>
  );
};
export default Home;
